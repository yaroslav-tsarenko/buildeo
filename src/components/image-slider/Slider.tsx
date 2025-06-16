import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FC } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import styles from "./Slider.module.scss";
import { Tooltip } from '@mui/material';

interface SliderProps {
    images: string[];
}

const Slider: FC<SliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [imageUrls, setImageUrls] = useState<string[]>(images);

    useEffect(() => {
        if (images.length === 0) {
            const placeholderImages = [
                'https://placehold.co/600x400?text=No+Image',
                'https://placehold.co/600x400?text=No+Image',
                'https://placehold.co/600x400?text=No+Image'
            ];
            setImageUrls(placeholderImages);
        } else {
            setImageUrls(images);
        }
    }, [images]);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
    };

    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index);
    };

    const handleImageClick = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog} maxWidth="lg">
                <DialogContent>
                    <Image
                        src={imageUrls[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        width={1000}
                        height={600}
                        className={styles.expandedImage}
                        objectFit="cover"
                    />
                </DialogContent>
            </Dialog>
            <div className={styles.wrapper}>
                <Tooltip title="Expand Image" placement="top">
                    <Image
                        src={imageUrls[currentIndex]}
                        className={styles.mainImage}
                        alt={`Slide ${currentIndex + 1}`}
                        width={500}
                        height={300}
                        objectFit="cover"
                        onClick={handleImageClick}
                    />
                </Tooltip>
                <div className={styles.navigation}>
                    <Tooltip title="Previous Image">
                        <IconButton onClick={handlePrevClick} size="large">
                            <IoMdArrowDropleft/>
                        </IconButton>
                    </Tooltip>
                    <div className={styles.thumbnails}>
                        {imageUrls.map((src, index) => (
                            <Tooltip title="Select Image" arrow key={index}>
                                <Image
                                    src={src}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={100}
                                    height={75}
                                    onClick={() => handleThumbnailClick(index)}
                                    className={index === currentIndex ? styles.selectedThumbnail : styles.thumbnail}
                                />
                            </Tooltip>
                        ))}
                    </div>
                    <Tooltip title="Next Image">
                        <IconButton onClick={handleNextClick} size="large">
                            <IoMdArrowDropright/>
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </>
    );
};

export default Slider;