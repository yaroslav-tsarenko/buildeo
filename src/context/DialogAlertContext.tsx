"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';
import DialogAlert from "@/components/dialog-alert/DialogAlert";

interface DialogAlertContextType {
    showDialog: (severity: 'success' | 'error', title: string) => void;
}

const DialogAlertContext = createContext<DialogAlertContextType | undefined>(undefined);

export const DialogAlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState<'success' | 'error'>('success');
    const [title, setTitle] = useState('');

    const showDialog = (severity: 'success' | 'error', title: string) => {
        setSeverity(severity);
        setTitle(title);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <DialogAlertContext.Provider value={{ showDialog }}>
            {children}
            <DialogAlert severity={severity} title={title} open={open} onClose={handleClose} />
        </DialogAlertContext.Provider>
    );
};

export const useDialogAlert = () => {
    const context = useContext(DialogAlertContext);
    if (!context) {
        throw new Error('useDialogAlert must be used within a DialogAlertProvider');
    }
    return context;
};