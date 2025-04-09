import React, {FC} from 'react';
import Image, {StaticImageData} from "next/image";
import styles from "./ProductCard.module.scss"
import {Tooltip} from "@mui/material";
import {navigate} from "@/constants/handleNav";

interface ProductCardProps {
    title: string;
    serviceId: string;
    price: number;
    image: StaticImageData | string;
}

const ProductCard:FC<ProductCardProps> = ({title, price, image, serviceId}) => {

    const handleSelect = (id: string) => {
        localStorage.setItem("serviceId", id);
        navigate("/service-page")
    }

    return (
        <Tooltip title={`Select ${title}`} >
            <div className={styles.wrapper} onClick={() => handleSelect(serviceId)}>
                <Image className={styles.image} src={image} alt={"Image"} width={213} height={204}/>
                <div className={styles.details}>
                    <h3>{title}</h3>
                    <p>{price}€</p>
                </div>
            </div>
        </Tooltip>
    );
};

export default ProductCard;