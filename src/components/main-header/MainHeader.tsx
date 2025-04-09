"use client"

import React, {useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import logo from "@/assets/logos/logo-red.svg";
import Image from "next/image";
import styles from "./MainHeader.module.scss";
import {Button, IconButton, Tooltip, Menu, MenuItem, Typography, Drawer} from "@mui/material";
import {PiChatTeardropTextThin, PiUserCircleThin} from "react-icons/pi";
import {useUser} from "@/context/UserContext";
import Link from "next/link";
import {Autocomplete} from "@mui/joy";
import {useServices} from "@/context/ServicesContext";
import {CiMenuBurger} from "react-icons/ci";

const MainHeader = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const user = useUser();
    const pathname = usePathname();
    const { services } = useServices();
    const [inputValue, setInputValue] = useState("");
    const router = useRouter();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const serviceTitles = services.map((service) => service.title);

    const handleSelect = (value: string | null) => {
        localStorage.setItem("service", value ?? "");
        router.push("/services");
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };


    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    switch (pathname) {
        case '/':
            return null;
        default:
            return (
                <header className={styles.header}>
                    <Tooltip title="Go Home" placement="bottom" arrow>
                        <Link href="/">
                            <Image className={styles.logo} src={logo} alt="Logo" width={174} height={59}/>
                        </Link>
                    </Tooltip>
                    <div className={styles.searchbar}>
                        <Autocomplete
                            placeholder="Painter, Plumber, Electrician..."
                            options={serviceTitles}
                            value={inputValue}
                            onChange={(event, newValue) => handleSelect(newValue)}
                            onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    localStorage.setItem("service", inputValue);
                                    router.push("/services");
                                }
                            }}
                            sx={{width: 500, height: 40}}/>
                    </div>
                    <div className={styles.burger}>
                        <IconButton sx={{color: "black"}} onClick={() => setDrawerOpen(true)}>
                            <CiMenuBurger/>
                        </IconButton>
                    </div>
                    <div className={styles.nav}>
                        <Tooltip title="Home Page">
                            <Link href="/">
                                <Button sx={{color: "black", textTransform: "none", borderRadius: "50px"}}>Home</Button>
                            </Link>
                        </Tooltip>
                        <Tooltip title="Favorable Offer">
                            <Link href="/favorable-offer">
                                <Button sx={{color: "black", textTransform: "none", borderRadius: "50px"}}>
                                    {user?.role === "buyer" ? "Favorable Offer" : "Provide a Service"}</Button>
                            </Link>
                        </Tooltip>
                        {user ?
                            <>
                                <Tooltip title="My Chats">
                                    <Link href="/chat">
                                        <IconButton sx={{color: "black"}}><PiChatTeardropTextThin/></IconButton>
                                    </Link>
                                </Tooltip>
                                <Tooltip title="My Account">
                                    <IconButton sx={{color: "black"}}
                                                onClick={handleMenuOpen}><PiUserCircleThin/></IconButton>
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
                                    <div style={{padding: '16px'}}>
                                        <Typography variant="h6">{user?.firstName} {user?.lastName}</Typography>
                                        <Typography variant="body2">{user?.email}</Typography>
                                    </div>
                                    <Link href="/account" className={styles.link}>
                                        <MenuItem onClick={handleMenuClose}>
                                            Personal Information
                                        </MenuItem>
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
                                    <MenuItem onClick={handleMenuClose} className={styles.link}>Sign Out</MenuItem>
                                </Menu>
                            </>
                            :
                            <>
                                <Link href="/sign-up">
                                    <Button variant="outlined" sx={{
                                        color: "red",
                                        borderColor: "red",
                                        textTransform: "none"
                                    }}>Register</Button>
                                </Link>
                                <Link href="/sign-in">
                                    <Button variant="contained" color="error"
                                            sx={{textTransform: "none"}}>Login</Button>
                                </Link>
                            </>}
                    </div>
                    <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                        <div className={styles.drawerContent}>
                            <Link href="/">
                                <Button sx={{
                                    color: "black",
                                    textTransform: "none",
                                    borderRadius: "50px",
                                    marginBottom: "16px"
                                }}>
                                    Home
                                </Button>
                            </Link>
                            <Tooltip title="Favorable Offer">
                                <Link href="/favorable-offer">
                                    <Button sx={{
                                        color: "black",
                                        textTransform: "none",
                                        borderRadius: "50px",
                                        marginBottom: "16px"
                                    }}>
                                        {user?.role === "buyer" ? "Favorable Offer" : "Provide a Service"}
                                    </Button>
                                </Link>
                            </Tooltip>
                            {user ? (
                                <>
                                    <Link href="/chat">
                                        <Button sx={{
                                            color: "black",
                                            textTransform: "none",
                                            borderRadius: "50px",
                                            marginBottom: "16px"
                                        }}>
                                            Chats
                                        </Button>
                                    </Link>
                                    <Button onClick={handleMenuOpen} sx={{
                                        color: "black",
                                        textTransform: "none",
                                        borderRadius: "50px",
                                        marginBottom: "16px"
                                    }}>
                                        Account
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Link href="/sign-up">
                                        <Button variant="outlined" sx={{
                                            color: "black",
                                            textTransform: "none",
                                            borderRadius: "50px",
                                            marginBottom: "16px"
                                        }}>
                                            Register
                                        </Button>
                                    </Link>
                                    <Link href="/sign-in">
                                        <Button variant="contained" color="error"
                                                sx={{textTransform: "none", borderRadius: "50px"}}>
                                            Login
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </Drawer>
                </header>
            );
    }
};

export default MainHeader;