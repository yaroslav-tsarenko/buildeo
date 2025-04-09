"use client"

import React, {useState} from 'react';
import {useService} from "@/context/ServiceContext";
import Image from "next/image";
import styles from "./CurrentService.module.scss";
import {Button, IconButton, Alert} from '@mui/material';
import {Textarea} from '@mui/joy';
import Rating from '@mui/material/Rating';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {useUser} from '@/context/UserContext';
import {newRequest} from "@/utils/newRequest";
import ReviewEntity from "@/components/review-entity/ReviewEntity";
import {useAlert} from "@/context/AlertContext";
import { navigate } from '@/constants/handleNav';

interface User {
    _id: string;
    role: string;
}

interface Service {
    title: string;
}

type ShowAlert = (message: string, severity: 'error' | 'warning' | 'info' | 'success') => void;

const CurrentService = () => {
    const {service} = useService();
    const [quantity, setQuantity] = useState(1);
    const [showForm, setShowForm] = useState(false);
    const [alert, setAlert] = useState('');
    const user = useUser();
    const {showAlert} = useAlert();
    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    const serviceId = localStorage.getItem("serviceId");

    const handleDecrement = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const handleLeaveComment = () => {
        if (!user?._id) {
            setAlert('You need to sign in, for leaving comments for service');
            return;
        }
        if (user._id === service?.userId) {
            setAlert('You cannot leave comments for yourself');
            return;
        }
        setAlert('');
        setShowForm(true);
    };



    const handleCreateChat = async (user: User, service: Service, showAlert: ShowAlert) => {
        try {
            const serviceId = localStorage.getItem("serviceId");
            if (!serviceId) {
                showAlert("Service ID not found in localStorage", "error");
                return;
            }

            const response = await newRequest.post('/chat/create', {
                role: user?.role,
                userId: user?._id,
                serviceId,
                text: `Hello, I am interested in your service: ${service?.title}`,
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
                    <Image src={service?.photo || ""} alt="Service Image" width={310} height={450}
                           className={styles.image}/>
                    <div className={styles.serviceDetails}>
                        <h2>{service?.title}</h2>
                        <span className={styles.reviewMetrics}>
                            <p>{service?.offerings ? service.offerings : "No Offerings"}</p>
                            <p>{service?.reviews && service.reviews.length > 0 ? service.reviews.length : "No Rating"}</p>
                        </span>
                        <h3>{service?.price}€</h3>
                        <p>{service?.description}</p>
                        <Button
                            color="error"
                            variant="outlined"
                            sx={{borderRadius: "50px", textTransform: "none"}}
                            onClick={() => {
                                if (service?.clientPhoneNumber) {
                                    window.location.href = `tel:${service.clientPhoneNumber}`;
                                } else {
                                    showAlert("Client didn't provide a phone number", "warning");
                                }
                            }}
                        >
                            Ask about product detail
                        </Button>
                    </div>
                    <div className={styles.action}>
                        <h3>Make your orders</h3>
                        <div className={styles.incrementWrapper}>
                            <div className={styles.incrementOrders}>
                                <IconButton
                                    color="error"
                                    sx={{
                                        border: "1px solid red",
                                        width: "35px",
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
                                        border: "1px solid red",
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
                            <h1>{(service?.price || 0) * quantity}€</h1>
                        </div>
                        <div className={styles.navButtons}>
                            <Button
                                className={styles.orderButton}
                                variant="contained"
                                color="error"
                                sx={{ borderRadius: "50px", width: "100%", textTransform: "none" }}
                                onClick={() => {
                                    if (user && service) {
                                        handleCreateChat(user, service, showAlert);
                                    } else if (!user) {
                                        showAlert("User is not logged in", "error");
                                    } else {
                                        showAlert("Service is not available", "error");
                                    }
                                }}
                            >
                                {user?.role === "buyer" ? "Order in Seller" : "Order in Buyer"}
                            </Button>
                            <Button
                                className={styles.orderButton}
                                variant="outlined"
                                color="error"
                                sx={{borderRadius: "50px", width: "100%", textTransform: "none"}}
                                onClick={() => {
                                    showAlert("Service added to your's wishlist", "success");
                                    setIsAddedToWishlist(true);
                                }}
                                disabled={isAddedToWishlist}>
                                {isAddedToWishlist ? "Added to Wishlist" : "Add to Wishlist"}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={styles.reviewContent}>
                    <h2>Review and Rates</h2>
                    {alert && <Alert severity="info">{alert}</Alert>}
                    {service?.reviews && service.reviews.length > 0 ? (
                        service.reviews.map((review) => (
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
                                            const response = await newRequest.post('/service/leave-comment', {
                                                userId: user?._id,
                                                serviceId: serviceId,
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
                                        color="error"
                                        sx={{borderRadius: '50px', textTransform: 'none', marginTop: '10px'}}>
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

export default CurrentService;