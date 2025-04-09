"use client";

import React, { useEffect, useState } from "react";
import { useChat } from "@/context/ChatContext";
import styles from "./ChatPage.module.scss";

interface Message {
    sender: string;
    text: string;
    createdAt: string;
}

interface Chat {
    _id: string;
    sellerId: string;
    buyerId: string;
    sellerAvatar?: string;
    buyerAvatar?: string;
    messages: Message[];
}

const ChatPage = () => {
    const { chats, fetchChats } = useChat();
    const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
    const [newMessage, setNewMessage] = useState("");

    const user = { _id: "userId", role: "seller" };

    useEffect(() => {
        fetchChats(user._id, user.role);
    }, [user, fetchChats]);

    const handleSelectChat = (chat: Chat) => {
        setSelectedChat(chat);
    };

    const handleSendMessage = () => {
        if (newMessage.trim() && selectedChat) {
            selectedChat.messages.push({ sender: user.role, text: newMessage, createdAt: new Date().toISOString() });
            setNewMessage("");
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.chatList}>
                <h3>Chats</h3>
                {chats.map((chat: Chat) => (
                    <div
                        key={chat._id}
                        className={`${styles.chatItem} ${selectedChat?._id === chat._id ? styles.active : ""}`}
                        onClick={() => handleSelectChat(chat)}
                    >
                        <img
                            src={user.role === "buyer" ? chat.sellerAvatar : chat.buyerAvatar}
                            alt="Avatar"
                            className={styles.avatar}
                        />
                        <span>{user.role === "buyer" ? chat.sellerId : chat.buyerId}</span>
                    </div>
                ))}
            </div>
            <div className={styles.mainChat}>
                {selectedChat ? (
                    <>
                        <h3>Chat with {user.role === "buyer" ? selectedChat.sellerId : selectedChat.buyerId}</h3>
                        <div className={styles.messages}>
                            {selectedChat.messages.map((message: Message, index: number) => (
                                <div key={index} className={styles.message}>
                                    {message.text}
                                </div>
                            ))}
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