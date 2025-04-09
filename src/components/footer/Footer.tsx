import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Tooltip from '@mui/material/Tooltip';
import { MdOutlineEmail } from "react-icons/md";
import { RiPhoneLine } from "react-icons/ri";
import styles from "./Footer.module.scss";
import redLogo from "@/assets/logos/logo-red.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Tooltip title="Go Home" placement="bottom" arrow>
                <Link href={"/"}>
                    <Image src={redLogo} alt="Footer Logo" width={244} height={82}/>
                </Link>
            </Tooltip>
            <div className={styles.footerNavWrapper}>
                <div className={styles.footerNav}>
                    <h4>BUILDEO</h4>
                    <Tooltip title="Imprint" placement="left">
                        <Link href="/coming-soon" className={styles.p}>Imprint</Link>
                    </Tooltip>
                    <Tooltip title="Our Mission" placement="left">
                        <Link href="/coming-soon" className={styles.p}>Our Mission</Link>
                    </Tooltip>
                    <Tooltip title="The BUILDEO Principal" placement="left">
                        <Link href="/coming-soon" className={styles.p}>The BUILDEO Principal</Link>
                    </Tooltip>
                </div>
                <div className={styles.footerNav}>
                    <h4>Partnership</h4>
                    <Tooltip title="Become a Partner" placement="left">
                        <Link href="/coming-soon" className={styles.p}>Become a Partner</Link>
                    </Tooltip>
                    <Tooltip title="Privacy Statement" placement="left">
                        <Link href="/coming-soon" className={styles.p}>Privacy Statement</Link>
                    </Tooltip>
                    <Tooltip title="Shipping and Payment Conditions" placement="left">
                        <Link href="/coming-soon" className={styles.p}>Shipping and Payment Conditions</Link>
                    </Tooltip>
                </div>
                <div className={styles.footerNav}>
                    <h4>Contact Us</h4>
                    <Tooltip title="Help Center" placement="left" >
                        <Link href="/coming-soon" className={styles.p}>Help Center</Link>
                    </Tooltip>
                    <Tooltip title="Email" placement="left">
                        <Link href="mailto:info@buildeo.de" className={styles.p}><MdOutlineEmail/>info@buildeo.de</Link>
                    </Tooltip>
                    <Tooltip title="Phone" placement="left">
                        <Link href="tel:05745300560" className={styles.p}><RiPhoneLine/>05745 /300 560</Link>
                    </Tooltip>
                </div>
            </div>
        </footer>
    );
};

export default Footer;