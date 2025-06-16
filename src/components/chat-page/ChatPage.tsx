"use client";

import React, { useEffect, useState } from "react";
import { useChat } from "@/context/ChatContext";
import { useUser } from "@/context/UserContext";
import styles from "./ChatPage.module.scss";
import Avatar from "@mui/material/Avatar";
import { io } from "socket.io-client";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;
const socket = io(BACKEND_URL);

interface Message {
    sender: string; // must be string
    text: string;
    createdAt: string;
}

interface Chat {
    _id: string;
    sellerId: string;
    buyerId: string;
    sellerAvatar?: string;
    buyerAvatar?: string;
    sellerFullName?: string;
    buyerFullName?: string;
    messages: Message[];
}

const ChatPage = () => {
    const { chats, fetchChats } = useChat();
    const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
    const [newMessage, setNewMessage] = useState("");
    const user = useUser();

    useEffect(() => {
        if (user?._id && user.role) {
            fetchChats(user._id, user.role);

            socket.on("receiveMessage", ({ chatId, message }: { chatId: string, message: Message }) => {
                setSelectedChat((prev) => {
                    if (!prev || prev._id !== chatId) return prev;
                    return {
                        ...prev,
                        messages: [...prev.messages, {
                            sender: message.sender || "", // fallback
                            text: message.text,
                            createdAt: message.createdAt,
                        }],
                    };
                });
            });

            return () => {
                socket.off("receiveMessage");
            };
        }
    }, [user, fetchChats]);

    const handleSendMessage = async () => {
        if (!newMessage.trim() || !selectedChat || !user?.role) return;

        const messagePayload: Message = {
            sender: user.role,
            text: newMessage,
            createdAt: new Date().toISOString(),
        };

        try {
            socket.emit("sendMessage", {
                chatId: selectedChat._id,
                ...messagePayload,
            });

            await fetch(`${BACKEND_URL}/chat/send-message`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chatId: selectedChat._id, ...messagePayload }),
            });

            setSelectedChat((prev) =>
                prev ? { ...prev, messages: [...prev.messages, messagePayload] } : prev
            );

            setNewMessage("");
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const renderMessage = (message: Message, index: number) => {
        const isCurrentUser = message.sender === user?.role;

        return (
            <div
                key={index}
                className={`${styles.messageWrapper} ${
                    isCurrentUser ? styles.messageRight : styles.messageLeft
                }`}
            >
                <div className={styles.message}>
                    <span>{message.text}</span>
                    <div className={styles.timestamp}>
                        {new Date(message.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.chatList}>
                <h3>Chats</h3>
                {chats.map((chat: Chat) => (
                    <div
                        key={chat._id}
                        className={`${styles.chatItem} ${selectedChat?._id === chat._id ? styles.active : ""}`}
                        onClick={() => setSelectedChat(chat)}
                    >
                        <Avatar
                            alt="User Avatar"
                            src={user?.role === "buyer" ? chat.sellerAvatar : chat.buyerAvatar}
                            sx={{ marginRight: "10px" }}
                        />
                        <span>{user?.role === "buyer" ? chat.sellerFullName : chat.buyerFullName}</span>
                    </div>
                ))}
            </div>

            <div className={styles.mainChat}>
                {selectedChat ? (
                    <>
                        <h3>
                            Chat with{" "}
                            {user?.role === "buyer" ? selectedChat.sellerId : selectedChat.buyerId}
                        </h3>
                        <div className={styles.messages}>
                            {selectedChat.messages.map(renderMessage)}
                        </div>
                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Type a message..."
                                className={styles.input}
                            />
                            <button onClick={handleSendMessage} className={styles.sendButton}>
                                Send
                            </button>
                        </div>
                    </>
                ) : (
                    <p>Select a chat to start messaging</p>
                )}
            </div>
        </div>
    );
};

export default ChatPage;
