"use client";

import React, { useState } from 'react';
import styles from "./BuildeoDashboard.module.scss";
import Image from "next/image";
import logo from "@/assets/logos/logo-white.svg";
import { MdSell } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import Buyers from "@/components/buyers/Buyers";
import Sellers from '../sellers/Sellers';
import AllUsers from "@/components/all-users/AllUsers";
import MetricsDashboard from "@/components/metrics-dashboard/MetricsDashboard";

const BuildeoDashboard = () => {
    const [selectedOption, setSelectedOption] = useState('buyers');

    const renderContent = () => {
        switch (selectedOption) {
            case 'buyers':
                return <Buyers/>;
            case 'sellers':
                return <Sellers/>;
            case 'allUsers':
                return <AllUsers/>;
            case 'dashboard':
                return <MetricsDashboard/>;
            default:
                return <div>Select an option to view content</div>;
        }
    };

    const logout = () => {
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    };

    return (
        <div className={styles.wrapper}>
            <aside className={styles.sidebar}>
                <div className={styles.navLinksWrapper}>
                    <Image className={styles.logo} src={logo} alt="Buildeo Logo" width={174} height={59}/>
                    <div className={styles.navLinks}>
                        <button
                            className={`${styles.link} ${selectedOption === 'dashboard' ? styles.active : ''}`}
                            onClick={() => setSelectedOption('dashboard')}>
                            <MdDashboard/>Dashboard
                        </button>
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
                <button className={styles.link} onClick={() => logout()}><IoLogOut/>Log Out</button>
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