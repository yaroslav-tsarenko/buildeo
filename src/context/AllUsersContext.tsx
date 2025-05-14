"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { newRequest } from "@/utils/newRequest";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

type User = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    avatar: string;
    createdAt: string;
};

type AllUsersContextType = {
    users: User[];
    loading: boolean;
};

const AllUsersContext = createContext<AllUsersContextType | undefined>(undefined);

export const AllUsersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await newRequest.get("/user/get-all-users");
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
            <Backdrop open={loading} style={{ zIndex: 1300, color: "#fff" }}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <AllUsersContext.Provider value={{ users, loading }}>
                {children}
            </AllUsersContext.Provider>
        </>
    );
};

export const useAllUsers = () => {
    const context = useContext(AllUsersContext);
    if (!context) {
        throw new Error("useAllUsers must be used within an AllUsersProvider");
    }
    return context;
};