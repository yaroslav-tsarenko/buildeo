"use client"

import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Input} from '@mui/joy';
import styles from "./SignInAuth.module.scss"
import {Button} from "@mui/material";
import {newRequest} from "@/utils/newRequest";
import {useAlert} from "@/context/AlertContext";
import {navigate} from "@/constants/handleNav";
import Link from "next/link";
import {useUser} from "@/context/UserContext";

const SignInAuth = () => {

    const [loading, setLoading] = useState(false);
    const { showAlert } = useAlert();
    const user = useUser();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Please fill this form'),
            password: Yup.string().required('Please fill this form'),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const response = await newRequest.post('/auth/sign-in', values);
                console.log('User logged in successfully:', response.data);
                document.cookie = `token=${response.data.token}; path=/`;
                showAlert('Welcome back! Sign In is successful!', 'success');
                setTimeout(() => {
                    if (user?.role === "admin") {
                        navigate("/admin")
                    } else {
                        navigate("/main")
                    }
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
                Sign In
            </h1>
            <p>
                Welcome back!
            </p>
            <div className={styles.grid}>
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
            </div>
            <Button type="submit" loading={loading} sx={{borderRadius: "50px", width: "100%", textTransform: "none"}} color="error"
                    variant="contained">Sign In</Button>
            <div className={styles.separator}>
                <hr/>
                <span>Already have an account?</span>
                <hr/>
            </div>
            <Link href="/sign-up" className={styles.link}>
                <Button sx={{borderRadius: "50px", textDecoration: "none", width: "100%", textTransform: "none"}} color="error"
                        variant="outlined">Sign Up</Button>
            </Link>
        </form>
    );
};

export default SignInAuth;