import React from 'react';
import { Avatar, Rating } from '@mui/material';
import styles from './ReviewEntity.module.scss';

interface ReviewEntityProps {
    avatar: string;
    firstName: string;
    lastName: string;
    comment: string;
    rating: number | null;
}

const ReviewEntity: React.FC<ReviewEntityProps> = ({ avatar, firstName, lastName, comment, rating }) => {

    const ratingToNum = rating ? parseFloat(rating.toString()) : 0;

    return (
        <div className={styles.reviewEntity}>
            <Avatar src={avatar} alt={`${firstName} ${lastName}`} sx={{ width: 50, height: 50 }} />
            <div className={styles.reviewDetails}>
                <h4>{firstName} {lastName}</h4>
                <Rating defaultValue={ratingToNum} readOnly precision={0.5} sx={{ margin: '5px 0' }} />
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default ReviewEntity;