import React from "react";
import { useAllUsers } from "@/context/AllUsersContext";
import UserItem from "../user-item/UserItem";

const AllUsers = () => {
    const { users } = useAllUsers();
    return (
        <div>
            {users.map(user => (
                <UserItem key={user._id} user={user} />
            ))}
        </div>
    );
};

export default AllUsers;