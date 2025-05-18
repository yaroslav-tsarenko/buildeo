import React, { useState } from "react";
import styles from "./UserItem.module.scss";
import { Button, Avatar, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { newRequest } from "@/utils/newRequest";
import { useAlert } from "@/context/AlertContext";

type User = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    avatar?: string;
};

const UserItem: React.FC<{ user: User }> = ({ user }) => {
    const { showAlert } = useAlert();
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [isEditDialogOpen, setEditDialogOpen] = useState(false);
    const [editedUser, setEditedUser] = useState<Partial<User>>({
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
    });

    const handleEditChange = (field: keyof User, value: string) => {
        setEditedUser((prev) => ({ ...prev, [field]: value }));
    };

    const handleDelete = async () => {
        try {
            await newRequest.delete(`/user/delete-user/${user._id}`);
            showAlert(`User ${user.firstName} ${user.lastName} deleted successfully`, "success");
        } catch {
            showAlert("Failed to delete user", "error");
        } finally {
            setDeleteDialogOpen(false);
        }
    };

    const handleEdit = async () => {
        try {
            await newRequest.put(`/user/update-user/${user._id}`, editedUser);
            showAlert(`User ${editedUser.firstName} ${editedUser.lastName} updated successfully`, "success");
        } catch {
            showAlert("Failed to update user", "error");
        } finally {
            setEditDialogOpen(false);
        }
    };

    return (
        <div className={styles.userItem}>
            <div className={styles.userInfo}>
                <Avatar src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
                <h3>{user.firstName} {user.lastName}</h3>
                <p>Email: {user.email}</p>
                <p>Role: {user.role}</p>
            </div>
            <div className={styles.actions}>
                <Button variant="outlined" color="primary" onClick={() => setEditDialogOpen(true)}>
                    Edit
                </Button>
                <Button variant="outlined" color="error" onClick={() => setDeleteDialogOpen(true)}>
                    Delete
                </Button>
            </div>
            <Dialog open={isDeleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete user: {user.firstName} {user.lastName}?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="error">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={isEditDialogOpen} onClose={() => setEditDialogOpen(false)}>
                <DialogTitle>Edit User</DialogTitle>
                <DialogContent>
                    <TextField
                        label="First Name"
                        value={editedUser.firstName}
                        onChange={(e) => handleEditChange("firstName", e.target.value)}
                        fullWidth
                        margin="dense"
                    />
                    <TextField
                        label="Last Name"
                        value={editedUser.lastName}
                        onChange={(e) => handleEditChange("lastName", e.target.value)}
                        fullWidth
                        margin="dense"
                    />
                    <TextField
                        label="Role"
                        value={editedUser.role}
                        onChange={(e) => handleEditChange("role", e.target.value)}
                        fullWidth
                        margin="dense"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEditDialogOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleEdit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default UserItem;