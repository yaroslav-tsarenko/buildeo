"use client"

import React from "react";
import { useAllUsers } from "@/context/AllUsersContext";
import UserItem from "../user-item/UserItem";

const Buyers = () => {
    const { users } = useAllUsers();

    return (
        <div>
            {users.filter(user => user.role === "buyer").map(user => (
                <UserItem key={user._id} user={user} />
            ))}
        </div>
    );
};

export default Buyers;