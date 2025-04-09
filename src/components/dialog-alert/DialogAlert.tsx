"use client"

import React from 'react';
import { Dialog, DialogTitle, Typography } from '@mui/material';
import { CheckCircle, Close } from '@mui/icons-material';

type Severity = 'success' | 'error';

interface DialogAlertProps {
    severity: Severity;
    title: string;
    open: boolean;
    onClose: () => void;
}

const DialogAlert: React.FC<DialogAlertProps> = ({ severity, title, open, onClose }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="lg" // Options: 'xs', 'sm', 'md', 'lg', 'xl', false
            sx={{
                '& .MuiDialog-paper': {
                    width: '30%',
                    height: '30%',
                },
            }}
        >
            <DialogTitle
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                {severity === 'success' ? (
                    <CheckCircle color="success" fontSize="large" />
                ) : (
                    <Close color="error" fontSize="large" />
                )}
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                    {title}
                </Typography>
            </DialogTitle>
        </Dialog>
    );
};

export default DialogAlert;