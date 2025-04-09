"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { newRequest } from "@/utils/newRequest";

interface Chat {
    _id: string;
    sellerId: string;
    buyerId: string;
    messages: { sender: string; text: string; createdAt: string }[];
    sellerAvatar?: string;
    buyerAvatar?: string;
}

interface ChatContextProps {
    chats: Chat[];
    fetchChats: (userId: string, role: string) => void;
}

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const useChat = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error("useChat must be used within a ChatProvider");
    }
    return context;
};

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [chats, setChats] = useState<Chat[]>([]);

    const fetchChats = async (userId: string, role: string) => {
        try {
            const response = await newRequest.get("/chat/get-chats", {
                params: { userId, role },
            });
            setChats(response.data);
        } catch (error) {
            console.error("Error fetching chats:", error);
        }
    };

    return (
        <ChatContext.Provider value={{ chats, fetchChats }}>
            {children}
        </ChatContext.Provider>
    );
};