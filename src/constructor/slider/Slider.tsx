"use client";

import React, { useState } from "react";
import styles from "./Slider.module.scss";
import Image from "next/image";

interface SliderProps {
    images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () =>
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    const nextSlide = () =>
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.slider}>
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${
                            index === currentIndex ? styles.active : ""
                        }`}
                    >
                        {index === currentIndex && (
                            <Image
                                src={src}
                                alt={`slide-${index}`}
                                width={1000}
                                height={600}
                                className={styles.image}
                                priority
                            />
                        )}
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className={`${styles.nav} ${styles.prev}`}>
                ‹
            </button>
            <button onClick={nextSlide} className={`${styles.nav} ${styles.next}`}>
                ›
            </button>
        </div>
    );
};

export default Slider;
