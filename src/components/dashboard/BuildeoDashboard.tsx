"use client";

import React, { useState } from 'react';
import styles from "./BuildeoDashboard.module.scss";
import Image from "next/image";
import logo from "@/assets/logos/logo-white.svg";
import { MdSell } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const BuildeoDashboard = () => {
    const [selectedOption, setSelectedOption] = useState('buyers');

    const renderContent = () => {
        switch (selectedOption) {
            case 'buyers':
                return <div>Buyers Content</div>;
            case 'sellers':
                return <div>Sellers Content</div>;
            case 'allUsers':
                return <div>All Users Content</div>;
            default:
                return <div>Select an option to view content</div>;
        }
    };

    return (
        <div className={styles.wrapper}>
            <aside className={styles.sidebar}>
                <div className={styles.navLinksWrapper}>
                    <Image className={styles.logo} src={logo} alt="Buildeo Logo" width={174} height={59}/>
                    <div className={styles.navLinks}>
                        <button
                            className={`${styles.link} ${selectedOption === 'buyers' ? styles.active : ''}`}
                            onClick={() => setSelectedOption('buyers')}>
                            <MdSell/>Buyers
                        </button>
                        <button
                            className={`${styles.link} ${selectedOption === 'sellers' ? styles.active : ''}`}
                            onClick={() => setSelectedOption('sellers')}>
                            <FaUser/>Sellers
                        </button>
                        <button
                            className={`${styles.link} ${selectedOption === 'allUsers' ? styles.active : ''}`}
                            onClick={() => setSelectedOption('allUsers')}>
                            <FaUsers/>All Users
                        </button>
                    </div>
                </div>
                <button className={styles.link}><IoLogOut/>Log Out</button>
            </aside>
            <div className={styles.content}>
                <div className={styles.contentInner}>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default BuildeoDashboard;