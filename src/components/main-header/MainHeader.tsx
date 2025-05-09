"use client"

import React, {useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import logo from "@/assets/logos/buildeo-logo-dark.svg";
import Image from "next/image";
import styles from "./MainHeader.module.scss";
import {Button, IconButton, Tooltip, Menu, MenuItem, Typography, Drawer} from "@mui/material";
import {PiChatTeardropTextThin, PiUserCircleThin} from "react-icons/pi";
import {useUser} from "@/context/UserContext";
import Link from "next/link";
import {Autocomplete} from "@mui/joy";
import {CiMenuBurger} from "react-icons/ci";
import CustomTooltip from "@/components/toolltip/CustomTooltip";
import {headerContent} from "@/assets/config/content";
import {RxHamburgerMenu} from "react-icons/rx";
import {LiaTimesSolid} from "react-icons/lia";
import logoDark from "@/assets/logos/buildeo-logo-dark.svg";

const MainHeader = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const user = useUser();
    const pathname = usePathname();
    const [inputValue, setInputValue] = useState("");
    const router = useRouter();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [desktopDrawerOpen, setDesktopDrawerOpen] = useState(false);

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

    if (['/sign-up', '/sign-in', '/sign-up-buyer'].includes(pathname)) {
        return null;
    }

    switch (pathname) {
        case '/':
            return null;
        default:
            return (
                <>
                    <Drawer
                        anchor="left"
                        open={desktopDrawerOpen}
                        onClose={() => setDesktopDrawerOpen(false)}
                        sx={{'& .MuiDrawer-paper': {width: '30%'}, position: "relative"}}>
                        <div className={styles.buttonTimes}>
                            <CustomTooltip title="Close Menu">
                                <IconButton onClick={() => setDesktopDrawerOpen(false)}>
                                    <LiaTimesSolid/>
                                </IconButton>
                            </CustomTooltip>
                        </div>
                        <div className={styles.drawerWrapper}>
                            <CustomTooltip title={headerContent.homeTooltip} placement="bottom" arrow>
                                <Image className={styles.logo} src={logoDark} alt={headerContent.logoAlt} width={194}
                                       height={79}/>
                            </CustomTooltip>
                            <div className={styles.drawerContentDesktop}>
                                {headerContent.drawerLinks.map((link) => (
                                    <Link href={link.href} className={styles.animatedLink} key={link.href}>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Drawer>
                    <header className={styles.header}>
                        <div className={styles.logoMenu}>
                            <CustomTooltip title={headerContent.menuTooltip}>
                                <IconButton sx={{color: "#2b2b2b"}} onClick={() => setDesktopDrawerOpen(true)}>
                                    <RxHamburgerMenu/>
                                </IconButton>
                            </CustomTooltip>
                            <Tooltip title="Go Home" placement="bottom" arrow>
                                <Link href="/">
                                    <Image className={styles.logo} src={logo} alt="Logo" width={174} height={59}/>
                                </Link>
                            </Tooltip>
                        </div>
                        <div className={styles.searchbar}>
                            <Autocomplete
                                placeholder="Painter, Plumber, Electrician..."
                                options={["Lol"]}
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
                                    <Button
                                        sx={{color: "black", textTransform: "none", borderRadius: "50px"}}>Home</Button>
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
                </>
            );
    }
};

export default MainHeader;