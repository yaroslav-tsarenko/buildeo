import React, {FC} from 'react';
import styles from "./AuthLayout.module.scss";
import logo from "@/assets/logos/buildeo-logo-dark.svg";
import {headerContent} from "@/assets/config/content";
import Image from "next/image";
import Link from 'next/link';

interface AuthLayoutInterface {
    children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutInterface> = ({children}) => {

    const currentYear = new Date().getFullYear();


    return (
        <div className={styles.authLayout}>
            <header className={styles.header}>
                <Link href={"/"} className={styles.logoWrapper}>
                    <Image className={styles.logo} src={logo} alt={headerContent.logoAlt} width={174} height={59}/>
                </Link>
                <p>Num 1 Marktplatz</p>
            </header>
            <div className={styles.wrapper}>
                <div className={styles.right}>
                    {children}
                </div>
            </div>
            <footer className={styles.footer}>
                <ul className={styles.footerLinks}>
                    <li><Link href="/about-us">Über uns</Link></li>
                    <li><Link href="/contact-help">Kontakt & Hilfe</Link></li>
                    <li><Link href="/impressum">Impressum</Link></li>
                    <li><Link href="/terms">AGB & Rechtliche Hinweise</Link></li>
                    <li><Link href="/privacy-policy">Datenschutz</Link></li>
                    <li><Link href="/consumer-info">Verbraucherinformationen</Link></li>
                    <li><Link href="/security">Sicherheit</Link></li>
                    <li><Link href="/cancel-contracts">Verträge hier kündigen</Link></li>
                    <li><Link href="/privacy-manager">Zum Privacy-Manager</Link></li>
                </ul>
                <p className={styles.copyright}>
                    © Copyright 1999 - {currentYear} Immobilien Scout GmbH
                </p>
            </footer>
        </div>

    );
};

export default AuthLayout;