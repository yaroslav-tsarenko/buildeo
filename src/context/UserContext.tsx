'use client';

import React, { createContext, useContext, ReactNode } from 'react';

export type User = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    city: string;
    street: string;
    postNumber: string;
    phoneNumber: string;
    longitude: string;
    role: string;
    avatar: string;
    createdAt: string;
};

interface UserProviderProps {
    user: User | null;
    children: ReactNode;
}

const UserContext = createContext<User | null>(null);

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ user, children }: UserProviderProps) {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}