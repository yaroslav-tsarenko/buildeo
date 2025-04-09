import React, { FC, ReactNode } from 'react';
import styles from './ServiceWrapper.module.scss';

interface ServiceWrapperProps {
    title: string;
    description: string;
    color: 'peach' | 'blue' | 'white';
    children: ReactNode;
}

const ServiceWrapper: FC<ServiceWrapperProps> = ({ title, description, color, children }) => {
    const limitedChildren = React.Children.toArray(children).slice(0, 5);

    return (
        <div className={`${styles.wrapper} ${styles[color]}`}>
            <div className={styles.details}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{description}</p>
            </div>
            <div className={styles.childrenContainer}>
                {limitedChildren}
            </div>
        </div>
    );
};

export default ServiceWrapper;