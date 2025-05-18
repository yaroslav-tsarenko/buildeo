"use client";

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import styles from "./Footer.module.scss";
import blackLogo from "@/assets/logos/buildeo-logo-dark.svg";
import { footerContent } from "@/assets/config/content";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { RiTiktokLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useUser } from '@/context/UserContext';

const Footer = () => {
    const pathname = usePathname();
    const user = useUser();
    const userRole = user?.role;

    if (['/sign-up', '/sign-in', '/sign-up-buyer'].includes(pathname) || userRole === 'admin') {
        return null;
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.footerNavWrapper}>
                {footerContent.sections.map((section) => (
                    <div className={styles.footerNav} key={section.title}>
                        <h4>{section.title}</h4>
                        {section.links.map((link) => (
                            <Tooltip title={link.label} placement="left" key={link.href}>
                                <Link href={link.href} className={styles.p}>{link.label}</Link>
                            </Tooltip>
                        ))}
                    </div>
                ))}
            </div>
            <div className={styles.socialWrapper}>
                <h4>Folge Uns</h4>
                <div className={styles.socials}>
                    {[
                        { icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com" },
                        { icon: <FiFacebook />, label: "Facebook", href: "https://www.facebook.com" },
                        { icon: <RiTiktokLine />, label: "TikTok", href: "https://www.tiktok.com" },
                        { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com" },
                        { icon: <FaYoutube />, label: "YouTube", href: "https://www.youtube.com" },
                    ].map((social, index) => (
                        <Tooltip title={social.label} key={index}>
                            <Link href={social.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                {social.icon}
                            </Link>
                        </Tooltip>
                    ))}
                </div>
            </div>
            <div className={styles.logoWrapper}>
                <Link href={"/"}>
                    <Image src={blackLogo} alt="Footer Logo" className={styles.logo} width={155} height={55} />
                </Link>
                <p>Nummer 1 auf dem Marktplatz</p>
            </div>

            <div className={styles.copyright}>
                <p>{footerContent.copyright}</p>
            </div>
        </footer>
    );
};

export default Footer;