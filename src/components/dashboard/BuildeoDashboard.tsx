import React from 'react';
import styles from "./BuildeoDashboard.module.scss"

const BuildeoDashboard = () => {
    return (
        <div className={styles.wrapper}>
            <aside className={styles.sidebar}>
                <button>Buyers</button>
                <button>Sellers</button>
                <button>All Users</button>
            </aside>
            <div className={styles.content}>

            </div>
        </div>
    );
};

export default BuildeoDashboard;