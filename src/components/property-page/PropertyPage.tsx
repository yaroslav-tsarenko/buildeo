"use client"

import React, {useState} from 'react';
import styles from "./PropertyPage.module.scss";
import {Button, IconButton, Alert} from '@mui/material';
import {Textarea} from '@mui/joy';
import Rating from '@mui/material/Rating';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {useUser} from '@/context/UserContext';
import {newRequest} from "@/utils/newRequest";
import ReviewEntity from "@/components/review-entity/ReviewEntity";
import {useAlert} from "@/context/AlertContext";
import {navigate} from '@/constants/handleNav';
import {usePropertyItem} from "@/context/PropertyItemContext";
import Slider from '../image-slider/Slider';

interface User {
    _id: string;
    role: string;
}

interface property {
    title: string;
}

type ShowAlert = (message: string, severity: 'error' | 'warning' | 'info' | 'success') => void;

const PropertyPage = () => {
    const {property} = usePropertyItem();
    const [quantity, setQuantity] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [alert, setAlert] = useState('');
    const user = useUser();
    const {showAlert} = useAlert();
    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    const propertyId = localStorage.getItem("propertyId");

    const handleDecrement = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const handleLeaveComment = () => {
        if (!user?._id) {
            setAlert('You need to sign in, for leaving comments for property');
            return;
        }
        if (user._id === property?.userId) {
            setAlert('You cannot leave comments for yourself');
            return;
        }
        setAlert('');
        setShowForm(true);
    };

    const handleCreateChat = async (user: User, property: property, showAlert: ShowAlert) => {
        try {
            const propertyId = localStorage.getItem("propertyId");
            if (!propertyId) {
                showAlert("property ID not found in localStorage", "error");
                return;
            }
            const response = await newRequest.post('/chat/create', {
                role: user?.role,
                userId: user?._id,
                type: 'property',
                propertyId,
                text: `Hello, I am interested in your property: ${property?.title}`,
            });
            setTimeout(() => {
                navigate("/chat");
            }, 1500);
            console.log('Order created successfully:', response.data);
            showAlert("Chat created successfully!", "success");
        } catch (error) {
            console.error('Error creating chat:', error);
            showAlert("Failed to create chat. Please try again.", "error");
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.details}>
                    {property?.photos && property.photos.length > 0 && (
                        <Slider images={property.photos}/>
                    )}
                    <div className={styles.propertyDetails}>
                        <h2>{property?.title}</h2>
                        <span className={styles.reviewMetrics}>
                            <p>{property?.offerings ? property.offerings : "No Offerings"}</p>
                            <p>{property?.reviews && property.reviews.length > 0 ? property.reviews.length : "No Rating"}</p>
                        </span>
                        <h3>{property?.price}€</h3>
                        <p>{property?.description}</p>
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: "50px",
                                textTransform: "none",
                                backgroundColor: "none",
                                borderColor: "#00ffd0",
                                color: "#000",
                                '&:hover': {
                                    backgroundColor: "#00ffd0",
                                    borderColor: "#00ffd0",
                                }
                            }}
                            onClick={() => {
                                if (property?.clientPhoneNumber) {
                                    window.location.href = `tel:${property.clientPhoneNumber}`;
                                } else {
                                    showAlert("Client didn't provide a phone number", "warning");
                                }
                            }}>
                            Ask about product detail
                        </Button>
                    </div>
                    <div className={styles.action}>
                        <h3>Make your orders</h3>
                        <div className={styles.incrementWrapper}>
                            <div className={styles.incrementOrders}>
                                <IconButton
                                    sx={{
                                        width: "35px",
                                        border: "1px solid #00ffd0",
                                        color: "#00ffd0",
                                        height: "35px",
                                        borderRadius: "5px",
                                        padding: "10px"
                                    }}
                                    onClick={handleDecrement}>
                                    -
                                </IconButton>
                                {quantity}
                                <IconButton
                                    color="error"
                                    sx={{
                                        border: "1px solid #00ffd0",
                                        color: "#00ffd0",
                                        width: "35px",
                                        height: "35px",
                                        borderRadius: "5px",
                                        padding: "10px"
                                    }}
                                    onClick={handleIncrement}
                                >
                                    +
                                </IconButton>
                            </div>
                            <h1>{(property?.price || 0) * quantity}€</h1>
                        </div>
                        <div className={styles.navButtons}>
                            <Button
                                className={styles.orderButton}
                                variant="contained"
                                disabled={user?.role === "seller" }
                                sx={{
                                    borderRadius: "50px",
                                    textTransform: "none",
                                    width: "100%",
                                    backgroundColor: "#00ffd0",
                                    borderColor: "#00ffd0",
                                    color: "#000",
                                    '&:hover': {
                                        backgroundColor: "#00ffd0",
                                        borderColor: "#00ffd0",
                                    }
                                }}
                                onClick={() => {
                                    if (user && property) {
                                        handleCreateChat(user, property, showAlert);
                                    } else if (!user) {
                                        showAlert("User is not logged in", "error");
                                    } else {
                                        showAlert("property is not available", "error");
                                    }
                                }}>
                                Order in Seller
                            </Button>
                            <Button
                                className={styles.orderButton}
                                variant="outlined"
                                color="success"
                                sx={{
                                    borderRadius: "50px",
                                    width: "100%",
                                    textTransform: "none",
                                    border: "1px solid #00ffd0",
                                    color: "#057762"
                                }}
                                onClick={() => {
                                    showAlert("property added to your's wishlist", "success");
                                    setIsAddedToWishlist(true);
                                }}
                                disabled={isAddedToWishlist || user?.role === "seller"}>
                                {isAddedToWishlist ? "Added to Wishlist" : "Add to Wishlist"}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={styles.reviewContent}>
                    <h2>Review and Rates</h2>
                    {alert && <Alert severity="info">{alert}</Alert>}
                    {property?.reviews && property.reviews.length > 0 ? (
                        property.reviews.map((review) => (
                            <ReviewEntity
                                key={review._id}
                                avatar={review.avatar}
                                firstName={review.firstName}
                                lastName={review.lastName}
                                rating={review.rating}
                                comment={review.comment}
                            />
                        ))
                    ) : (
                        <p>No reviews available</p>
                    )}
                    <Button color="error" sx={{borderRadius: "50px", textTransform: "none"}}
                            onClick={handleLeaveComment}>Leave Comment</Button>
                    {showForm && !alert && (
                        <Formik
                            initialValues={{
                                comment: '',
                                rating: 0,
                            }}
                            validationSchema={Yup.object({
                                comment: Yup.string().required('Comment is required'),
                                rating: Yup.number().min(1, 'Rating must be at least 1').required('Rating is required'),
                            })}
                            onSubmit={(values) => {
                                console.log('Form submitted:', values);
                            }}>
                            {({values, errors, touched, handleChange, handleBlur, setFieldValue}) => (
                                <Form
                                    style={{marginTop: '20px'}}
                                    className={styles.form}
                                    onSubmit={async (e) => {
                                        e.preventDefault();
                                        try {
                                            const response = await newRequest.post('/property/leave-comment', {
                                                userId: user?._id,
                                                propertyId: propertyId,
                                                comment: values.comment,
                                                rating: values.rating,
                                            });
                                            console.log('Comment submitted successfully:', response.data);
                                            setAlert('Comment submitted successfully!');
                                            setShowForm(false);
                                        } catch (error) {
                                            console.error('Error submitting comment:', error);
                                            setAlert('Failed to submit comment. Please try again.');
                                        }
                                    }}>
                                    <div>
                                        <h4>Leave Rating feedback</h4>
                                        <Rating
                                            name="rating"
                                            value={values.rating}
                                            sx={{margin: '10px 0'}}
                                            onChange={(event, newValue) => {
                                                setFieldValue('rating', newValue);
                                            }}
                                        />
                                        {touched.rating && errors.rating && (
                                            <div style={{color: 'red'}}>{errors.rating}</div>
                                        )}
                                    </div>
                                    <Textarea
                                        name="comment"
                                        placeholder="Enter your comment"
                                        value={values.comment}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        minRows={3}
                                        style={{width: '100%', marginBottom: '10px'}}
                                    />
                                    {touched.comment && errors.comment && (
                                        <div style={{color: 'red'}}>{errors.comment}</div>
                                    )}
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{
                                            borderRadius: '50px',
                                            textTransform: 'none',
                                            marginTop: '10px',
                                            color: "#076554",
                                            width: '100%',
                                            background: "#00ffd0"
                                    }}>
                                        Leave Comment
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PropertyPage;