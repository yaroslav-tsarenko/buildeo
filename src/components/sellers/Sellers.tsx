import React from "react";
import { useAllUsers } from "@/context/AllUsersContext";
import UserItem from "../user-item/UserItem";

const Sellers = () => {
    const { users } = useAllUsers();

    return (
        <div>
            {users.filter(user => user.role === "seller").map(user => (
                <UserItem key={user._id} user={user} />
            ))}
        </div>
    );
};

export default Sellers;