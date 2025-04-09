"use client"

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import logo from "@/assets/logos/logo-white.svg";
import Image from "next/image";
import styles from "./Header.module.scss";
import { Button, IconButton, Tooltip, Menu, MenuItem, Typography, Drawer } from "@mui/material";
import { PiChatTeardropTextThin, PiUserCircleThin } from "react-icons/pi";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const user = useUser();
    const pathname = usePathname();

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    };

    if (pathname !== '/') {
        return null;
    }

    return (
        <header className={styles.header}>
            <Tooltip title="Go Home" placement="bottom" arrow>
                <Image className={styles.logo} src={logo} alt="Logo" width={174} height={59} />
            </Tooltip>
            <div className={styles.nav}>
                <Tooltip title="Home Page">
                    <Link href="/">
                        <Button sx={{ color: "white", textTransform: "none", borderRadius: "50px" }}>Home</Button>
                    </Link>
                </Tooltip>
                <Tooltip title="Favorable Offer">
                    <Link href="/favorable-offer">
                        <Button sx={{ color: "white", textTransform: "none", borderRadius: "50px" }}>
                            {user?.role === "buyer" ? "Favorable Offer" : "Provide a Service"}
                        </Button>
                    </Link>
                </Tooltip>
                {user ? (
                    <>
                        <Tooltip title="My Chats">
                            <Link href="/chat">
                                <IconButton sx={{ color: "white" }}><PiChatTeardropTextThin/></IconButton>
                            </Link>
                        </Tooltip>
                        <Tooltip title="My Account">
                            <IconButton sx={{ color: "white" }} onClick={handleMenuOpen}><PiUserCircleThin /></IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            PaperProps={{
                                style: {
                                    width: '250px',
                                },
                            }}>
                            <div style={{ padding: '16px' }}>
                                <Typography variant="h6">{user?.firstName} {user?.lastName}</Typography>
                                <Typography variant="body2">{user?.email}</Typography>
                            </div>
                            <Link href="/account" className={styles.link}>
                                <MenuItem onClick={handleMenuClose}>Personal Information</MenuItem>
                            </Link>
                            <Link href="/coming-soon" className={styles.link}>
                                <MenuItem onClick={handleMenuClose}>Orders</MenuItem>
                            </Link>
                            <Link href="/coming-soon" className={styles.link}>
                                <MenuItem onClick={handleMenuClose}>Pending Offers</MenuItem>
                            </Link>
                            <Link href="/coming-soon" className={styles.link}>
                                <MenuItem onClick={handleMenuClose}>Open Application</MenuItem>
                            </Link>
                            <Link href="/coming-soon" className={styles.link}>
                                <MenuItem onClick={handleMenuClose}>Inquiry Form</MenuItem>
                            </Link>
                            <Link href="/coming-soon" className={styles.link}>
                                <MenuItem onClick={handleMenuClose}>Refer Friends</MenuItem>
                            </Link>
                            <Link href="/coming-soon" className={styles.link}>
                                <MenuItem onClick={handleMenuClose}>My Reviews</MenuItem>
                            </Link>
                            <MenuItem onClick={() => logout()}>Sign Out</MenuItem>
                        </Menu>
                    </>
                ) : (
                    <>
                        <Link href="/sign-up">
                            <Button variant="outlined" sx={{ color: "white", borderColor: "white", textTransform: "none" }}>Register</Button>
                        </Link>
                        <Link href="/sign-in">
                            <Button variant="contained" color="error" sx={{ textTransform: "none" }}>Login</Button>
                        </Link>
                    </>
                )}
            </div>
            <div className={styles.burger}>
                <IconButton sx={{ color: "white" }} onClick={() => setDrawerOpen(true)}>
                    <CiMenuBurger />
                </IconButton>
            </div>

            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <div className={styles.drawerContent}>
                    <Link href="/">
                        <Button sx={{ color: "black", textTransform: "none", borderRadius: "50px", marginBottom: "16px" }}>
                            Home
                        </Button>
                    </Link>
                    <Tooltip title="Favorable Offer">
                        <Link href="/favorable-offer">
                            <Button sx={{ color: "black", textTransform: "none", borderRadius: "50px", marginBottom: "16px" }}>
                                {user?.role === "buyer" ? "Favorable Offer" : "Provide a Service"}
                            </Button>
                        </Link>
                    </Tooltip>
                    {user ? (
                        <>
                                <Link href="/chat">
                                    <Button sx={{ color: "black", textTransform: "none", borderRadius: "50px", marginBottom: "16px" }}>
                                        Chats
                                    </Button>
                                </Link>
                                <Button onClick={handleMenuOpen} sx={{ color: "black", textTransform: "none", borderRadius: "50px", marginBottom: "16px" }}>
                                    Account
                                </Button>
                        </>
                    ) : (
                        <>
                            <Link href="/sign-up">
                                <Button variant="outlined" sx={{ color: "black", textTransform: "none", borderRadius: "50px", marginBottom: "16px" }}>
                                    Register
                                </Button>
                            </Link>
                            <Link href="/sign-in">
                                <Button variant="contained" color="error" sx={{ textTransform: "none", borderRadius: "50px" }}>
                                    Login
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
            </Drawer>
        </header>
    );
};

export default Header;