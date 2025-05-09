import React, {FC} from 'react';
import CustomTooltip from "@/components/toolltip/CustomTooltip";
import styles from "./PropertyItem.module.scss"

interface PropertyItemProps {
    title: string;
    icon: React.ReactNode;
    description?: string;
}

const PropertyItem: FC<PropertyItemProps> = ({title, description, icon}) => {
    return (
        <CustomTooltip title={description}>
            <div className={styles.wrapper}>
                <div className={styles.icon}>
                    {icon}
                </div>
                <p className={styles.title}>{title}</p>
            </div>
        </CustomTooltip>

    );
};

export default PropertyItem;