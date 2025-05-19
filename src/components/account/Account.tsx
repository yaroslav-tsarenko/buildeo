"use client"

import React, { useState } from 'react';
import { Avatar, Button, Typography } from '@mui/material';
import { useUser } from '@/context/UserContext';
import styles from "./Account.module.scss";
import Link from "next/link";
import {useAlert} from "@/context/AlertContext";
import { newRequest } from '@/utils/newRequest';
import { useServices } from '@/context/ServicesContext';
import ProductCard from '../product-card/ProductCard';

const Account = () => {
    const user = useUser();
    const [preview, setPreview] = useState(user?.avatar || '');
    const {showAlert} = useAlert();

    const { services } = useServices();
    const userServices = services.filter((service) => service.userId === user?._id);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);

            const formData = new FormData();
            formData.append('file', file);
            formData.append('userId', user?._id || "");

            try {
                const response = await newRequest.post('/user/upload-avatar', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                const { avatarUrl } = response.data;
                showAlert('Avatar updated successfully!', 'success');
                setPreview(avatarUrl);
            } catch (error) {
                console.error('Error uploading avatar:', error);
                showAlert('Failed to upload avatar. Please try again.', 'error');
            }
        }
    };

    return (
        <div className={styles.wrapper}>
            <h3>Personal Information</h3>
            <div className={styles.userInfo}>
                <div className={styles.userLeft}>
                    <Avatar
                        src={preview}
                        sx={{ width: 150, height: 150, fontSize: 20, borderRadius: "10px" }}>
                        {user?.firstName?.charAt(0).toUpperCase()}{user?.lastName?.charAt(0).toUpperCase()}
                    </Avatar>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ marginTop: 2,  borderRadius: "10px", backgroundColor: "#00ffd0", color: "black" }}
                        component="label">
                        Change Profile Picture
                        <input
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleFileChange}
                        />
                    </Button>
                </div>
                <div className={styles.userRight}>
                    <Typography variant="h6" sx={{ marginTop: 2 }}>
                        {user?.firstName} {user?.lastName}
                    </Typography>
                    <Typography variant="body1">Email: {user?.email}</Typography>
                    <Typography variant="body1">City: {user?.city}</Typography>
                    <Typography variant="body1">Street: {user?.street}</Typography>
                    <Typography variant="body1">Post Number: {user?.postNumber}</Typography>
                    <Typography variant="body1">Phone Number: {user?.phoneNumber}</Typography>
                    <Typography variant="body1">Role: {user?.role}</Typography>
                </div>
            </div>
            <div className={styles.offerList}>
                <h2>Your Offer List</h2>
                <div className={styles.banner}>
                    <div className={styles.description}>
                        <h3>
                            {user?.role === "buyer" ? "Make Your Dream Offer" : "Provide your service"}
                        </h3>
                        <p>
                            {user?.role === "buyer" ? "Create your own offer and wait for a provider to call" : "Provide your own service and wait for a buyer to call you"}
                        </p>
                    </div>
                    <Link href="/favorable-offer">
                        <Button
                            variant="contained"
                            color="error"
                            sx={{
                                textTransform: "none",
                                borderRadius: "10px",
                                padding: "10px 30px",
                                fontSize: "15px",
                                maxWidth: "350px",
                                width: "100%",
                                backgroundColor: "#00ffd0",
                                color: "black"
                            }}>
                            {user?.role === "buyer" ? "Add Offer" : "Create own Service"}
                        </Button>
                    </Link>
                </div>
                <h2>Your Properties List</h2>
                <div className={styles.bannerProperty}>
                    <div className={styles.descriptionProperty}>
                        <h3>
                           Sell your property fast
                        </h3>
                        <p>
                            Sell your property fast and easy with our platform. Just create your own service and wait for a buyer to call you
                        </p>
                    </div>
                    <Link href="/sell-property">
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                borderRadius: "10px",
                                padding: "10px 30px",
                                fontSize: "15px",
                                color: "black",
                                maxWidth: "350px",
                                width: "100%",
                                backgroundColor: "#00ffd0",
                            }}>
                            Sell your property
                        </Button>
                    </Link>
                </div>
                <div className={styles.servicesWrapper}>
                    <h2>Your Services</h2>
                    <div className={styles.services}>
                        {user?.role === "buyer" ? (
                            "Currently your Offer list is empty"
                        ) : userServices.length > 0 ? (
                            userServices.map((service) => (
                                <ProductCard
                                    key={service._id}
                                    title={service.title || "No title available"}
                                    price={service.price}
                                    serviceId={service._id}
                                    image={service.photo || ""}/>
                            ))
                        ) : (
                            "Currently your Service list is empty"
                        )}
                    </div>
                </div>
                <div className={styles.servicesWrapper}>
                    <h2>Your Properties</h2>
                    <div className={styles.services}>
                        {user?.role === "buyer" ? (
                            "Currently your Offer list is empty"
                        ) : userServices.length > 0 ? (
                            userServices.map((service) => (
                                <ProductCard
                                    key={service._id}
                                    title={service.title || "No title available"}
                                    price={service.price}
                                    serviceId={service._id}
                                    image={service.photo || ""}/>
                            ))
                        ) : (
                            "Currently your Property list is empty"
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;