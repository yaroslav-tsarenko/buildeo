import React from 'react';
import { Badge } from '@mui/material';
import styles from './Benefit.module.scss';

type BenefitProps = {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    badgeContent?: string; // Optional badge content
};

const Benefit: React.FC<BenefitProps> = ({ icon, title, subtitle, badgeContent }) => {
    return (
        <Badge badgeContent={badgeContent} color="success" className={styles.badge}>
            <div className={styles.benefit}>
                <div className={styles.textWrapper}>
                    <div className={styles.icon}>{icon}</div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
            </div>
        </Badge>
    );
};

export default Benefit;