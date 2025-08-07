"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Media.module.scss";

interface MediaProps {
    src: string | StaticImageData;
    type?: "image" | "video";
    width?: number | string;
    height?: number | string;
    alt?: string;
    className?: string;
    objectFit?: "cover" | "contain" | "fill";
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
}

const Media: React.FC<MediaProps> = ({
                                         src,
                                         type = "image",
                                         width = "100%",
                                         height = "auto",
                                         alt = "media",
                                         className = "",
                                         objectFit = "cover",
                                         controls = true,
                                         autoPlay = false,
                                         loop = false,
                                         muted = false,
                                     }) => {
    return (
        <div
            className={`${styles.mediaWrapper} ${className}`}
            style={{ width, height }}
        >
            {type === "image" ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    style={{ objectFit }}
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 800px"
                />
            ) : (
                typeof src === "string" && (
                    <video
                        src={src}
                        controls={controls}
                        autoPlay={autoPlay}
                        loop={loop}
                        muted={muted}
                        className={styles.video}
                        style={{ objectFit, width: "100%", height: "100%" }}
                    />
                )
            )}
        </div>
    );
};

export default Media;
