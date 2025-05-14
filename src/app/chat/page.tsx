import React from 'react';
import ChatPage from "@/components/chat-page/ChatPage";
import {ChatProvider} from "@/context/ChatContext";

const Page = () => {
    return (
        <ChatProvider>
            <ChatPage/>
        </ChatProvider>
    );
};

export default Page;