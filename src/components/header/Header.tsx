"use client"

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import logo from "@/assets/logos/logo-white.svg";
import logoDark from "@/assets/logos/buildeo-logo-dark.svg";
import Image from "next/image";
import styles from "./Header.module.scss";
import { Button, IconButton, Menu, MenuItem, Typography, Drawer } from "@mui/material";
import { PiChatTeardropTextThin, PiUserCircleThin } from "react-icons/pi";
import { useUser } from "@/context/UserContext";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import CustomTooltip from '../toolltip/CustomTooltip';
import { headerContent } from "@/assets/config/content"
import { LuUserPlus } from "react-icons/lu";
import { LuUserRoundCheck } from "react-icons/lu";

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [desktopDrawerOpen, setDesktopDrawerOpen] = useState(false);
    const user = useUser();
    const pathname = usePathname();

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        console.log(drawerOpen)
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
            <div className={styles.headerInner}>
                <div className={styles.logoMenu}>
                    <CustomTooltip title={headerContent.menuTooltip}>
                        <IconButton sx={{color: "white"}} onClick={() => setDesktopDrawerOpen(true)}>
                            <RxHamburgerMenu/>
                        </IconButton>
                    </CustomTooltip>
                    <CustomTooltip title={headerContent.homeTooltip} placement="bottom" arrow>
                        <Image className={styles.logo} src={logo} alt={headerContent.logoAlt} width={174} height={59}/>
                    </CustomTooltip>
                </div>
                <div className={styles.nav}>
                    {headerContent.navLinks.map((link) => (
                        <CustomTooltip title={link.tooltip} key={link.href}>
                            <Link href={link.href}>
                                <Button sx={{color: "white", textTransform: "none", borderRadius: "50px"}}>
                                    {link.conditionalLabel
                                        ? user?.role === "buyer"
                                            ? link.conditionalLabel.buyer
                                            : link.conditionalLabel.other
                                        : link.label}
                                </Button>
                            </Link>
                        </CustomTooltip>
                    ))}
                    {user ? (
                        <>
                            <CustomTooltip title={headerContent.userMenu.chats}>
                                <Link href="/chat">
                                    <IconButton sx={{color: "white"}}><PiChatTeardropTextThin/></IconButton>
                                </Link>
                            </CustomTooltip>
                            <CustomTooltip title={headerContent.userMenu.account}>
                                <IconButton sx={{color: "white"}}
                                            onClick={handleMenuOpen}><PiUserCircleThin/></IconButton>
                            </CustomTooltip>
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
                                {headerContent.userMenu.menuItems.map((item) => (
                                    <Link href={item.href} className={styles.link} key={item.href}>
                                        <MenuItem onClick={handleMenuClose}>{item.label}</MenuItem>
                                    </Link>
                                ))}
                                <MenuItem onClick={() => logout()}>{headerContent.userMenu.logout}</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Link href="/sign-up">
                                <Button startIcon={<LuUserPlus/>} variant="outlined"
                                        sx={{color: "white", borderColor: "white", textTransform: "none", borderRadius: "15px", lineHeight: "1.5"}}>
                                    {headerContent.auth.register}
                                </Button>
                            </Link>
                            <Link href="/sign-in">
                                <Button
                                    startIcon={<LuUserRoundCheck/>}
                                    variant="contained"
                                    sx={{
                                        textTransform: "none",
                                        borderRadius: "15px",
                                        lineHeight: "1.5",
                                        boxShadow: "none",
                                        backgroundColor: "#0ABAB5",
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: "#099E9A"
                                        }
                                    }}
                                >
                                    {headerContent.auth.login}
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
                <div className={styles.burger}>
                    <IconButton sx={{color: "white"}} onClick={() => setDrawerOpen(true)}>
                        <CiMenuBurger/>
                    </IconButton>
                </div>
            </div>
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
                        <Image className={styles.logo} src={logoDark} alt={headerContent.logoAlt} width={194} height={79}/>
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
        </header>
    );
};

export default Header;