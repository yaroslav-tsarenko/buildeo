"use client"

import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Input} from '@mui/joy';
import styles from "./SignUpAuthBuyer.module.scss"
import {Button} from "@mui/material";
import {newRequest} from "@/utils/newRequest";
import {useAlert} from "@/context/AlertContext";
import {navigate} from "@/constants/handleNav";
import Link from "next/link";

const SignUpAuth = () => {

    const [loading, setLoading] = useState(false);
    const { showAlert } = useAlert();
    const role = "buyer";

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            city: '',
            postNumber: '',
            street: '',
            phoneNumber: '',
            email: '',
            password: '',
            longitude: '',
            role: role,
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Please fill this form'),
            lastName: Yup.string().required('Please fill this form'),
            city: Yup.string().required('Please fill this form'),
            postNumber: Yup.string().required('Please fill this form'),
            street: Yup.string().required('Please fill this form'),
            phoneNumber: Yup.string().required('Please fill this form'),
            email: Yup.string().email('Invalid email address').required('Please fill this form'),
            password: Yup.string().required('Please fill this form'),
            longitude: Yup.string().required('Please fill this form'),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const response = await newRequest.post('/auth/sign-up', values);
                console.log('User created successfully:', response.data);
                showAlert('Thanks! Registration completed successfully', 'success');
                setTimeout(() => {
                    navigate("/sign-in")
                }, 1500)
            } catch (error: unknown) {
                console.error('Error logging in:', error);
                if (error instanceof Error && typeof error === 'object' && error !== null) {
                    const axiosError = error as { response?: { data?: { error?: string } } };
                    const errorMessage = axiosError.response?.data?.error || 'Error logging in';
                    showAlert(errorMessage, 'error');
                } else {
                    showAlert('Error logging in', 'error');
                }
            }
            setLoading(false);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <h1>
                Register As Buyer
            </h1>
            <p>
                Want to register in another role? <Link href="/sign-up">Register as Seller</Link>
            </p>
            <div className={styles.grid}>
                <div className={styles.inputDiv}>
                    <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size="lg"
                    />
                    {formik.touched.firstName && formik.errors.firstName ?
                        <div style={{color: 'red'}}>{formik.errors.firstName}</div> : null}
                </div>
                <div className={styles.inputDiv}>
                    <Input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size="lg"
                    />
                    {formik.touched.lastName && formik.errors.lastName ?
                        <div style={{color: 'red'}}>{formik.errors.lastName}</div> : null}
                </div>
                <div className={styles.inputDiv}>
                    <Input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size="lg"
                    />
                    {formik.touched.city && formik.errors.city ?
                        <div style={{color: 'red'}}>{formik.errors.city}</div> : null}
                </div>
                <div className={styles.inputDiv}>
                    <Input
                        type="text"
                        name="postNumber"
                        placeholder="Post Number"
                        value={formik.values.postNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size="lg"
                    />
                    {formik.touched.postNumber && formik.errors.postNumber ?
                        <div style={{color: 'red'}}>{formik.errors.postNumber}</div> : null}
                </div>
                <div className={styles.inputDiv}>
                    <Input
                        type="text"
                        name="street"
                        placeholder="Street"
                        value={formik.values.street}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size="lg"
                    />
                    {formik.touched.street && formik.errors.street ?
                        <div style={{color: 'red'}}>{formik.errors.street}</div> : null}
                </div>
                <div className={styles.inputDiv}>
                    <Input
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size="lg"
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ?
                        <div style={{color: 'red'}}>{formik.errors.phoneNumber}</div> : null}
                </div>
                <div className={styles.inputDiv}>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size="lg"
                    />
                    {formik.touched.email && formik.errors.email ?
                        <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                </div>
                <div className={styles.inputDiv}>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size="lg"
                    />
                    {formik.touched.password && formik.errors.password ?
                        <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                </div>
                <div className={styles.inputDiv}>
                    <Input
                        type="text"
                        name="longitude"
                        placeholder="Longitude"
                        value={formik.values.longitude}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        size="lg"
                    />
                    {formik.touched.longitude && formik.errors.longitude ?
                        <div style={{color: 'red'}}>{formik.errors.longitude}</div> : null}
                </div>
            </div>
            <Button type="submit" loading={loading} sx={{borderRadius: "50px", width: "100%", textTransform: "none"}} color="error"
                    variant="contained">Sign Up</Button>
            <div className={styles.separator}>
                <hr/>
                <span>Already have an account?</span>
                <hr/>
            </div>
            <Link href="/sign-in" className={styles.link}>
                <Button sx={{borderRadius: "50px", width: "100%", textDecoration: "none", textTransform: "none"}} color="error"
                        variant="outlined">Sign In</Button>
            </Link>
        </form>
    );
};

export default SignUpAuth;