import React, {FC} from 'react';
import styles from "./CheckmarkPoint.module.scss";
import {IoCheckmark} from "react-icons/io5";

interface CheckmarkPointProps {
    title: string;
}

const CheckmarkPoint: FC<CheckmarkPointProps> = ({title}) => {
    return (
        <div className={styles.checkmark}>
            <IoCheckmark/>
            <p>{title}</p>
        </div>
    );
};

export default CheckmarkPoint;