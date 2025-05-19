"use client"

import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import styles from './FavorableOffer.module.scss';
import {Select, Textarea, Option, Input} from "@mui/joy";
import { MdOutlineFileUpload } from "react-icons/md";
import Link from "next/link";
import { newRequest } from "@/utils/newRequest";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import {navigate} from "@/constants/handleNav";

const FavorableOffer = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [loading, setLoading] = useState(false);
    const { showAlert } = useAlert();
    const user = useUser();
    const formik = useFormik({
        initialValues: {
            category: localStorage.getItem('selectedCategory') || '',
            description: '',
            title: '',
            price: '',
            photo: null,
        },
        validationSchema: Yup.object({
            category: Yup.string().required('Please select a category'),
            description: Yup.string()
                .required('Please provide a description')
                .min(250, 'Description must be at least 250 characters')
                .test('no-censored-words', 'Description contains inappropriate content', (value) => {
                    const censoredWords = ['fuck', 'damn', 'hell'];
                    const regex = new RegExp(`\\b(${censoredWords.join('|')})\\b`, 'i');
                    return value ? !regex.test(value) : true;
                }),
            title: Yup.string()
                .required('Please provide a title')
                .matches(
                    /^(Need a|I provide( a)? [\w\s]+ Services( for your [\w\s]+)?|Painter|Floor Layers|Architect|Flooring Adhesive|[\w\s]+ for my [\w\s]+)$/i,
                    'Please provide a meaningful title (e.g., "Need a Painter for My House" or "I provide Painter Services for your House")'
                ),
            price: Yup.string()
                .required('Please provide a price')
                .matches(/^\d{3}$/, 'Price must be exactly 3 digits'),
            photo: Yup.mixed(),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            const formData = new FormData();
            formData.append('category', values.category || 'none');
            formData.append('description', values.description);
            formData.append('userId', user?._id || '');
            formData.append('title', values.title);
            formData.append('price', values.price);

            if (values.photo) {
                formData.append('file', values.photo);
            }

            try {
                const response = await newRequest.post('/service/create', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('Service created successfully:', response.data);
                showAlert('Service created successfully!', 'success');
                setTimeout(() => {
                    navigate('/account');
                }, 1500);
            } catch (error: unknown) {
                console.error('Error creating service:', error);

                if (error instanceof Error && 'response' in error && error.response && 'data') {
                    const axiosError = error as { response: { data: { error: string } } };
                    const errorMessage = axiosError.response.data.error;
                    showAlert(errorMessage, 'error');
                } else {
                    showAlert('Error creating service', 'error');
                }
            }
            setLoading(false);
        },
    });

    useEffect(() => {
        localStorage.setItem('selectedCategory', formik.values.category);
    }, [formik.values.category]);

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
        const droppedFiles = Array.from(event.dataTransfer.files) as File[]; // Explicitly cast to File[]
        if (droppedFiles.length > 1) {
            showAlert('You can only upload one file.', 'error');
            return;
        }
        setFiles(droppedFiles.slice(0, 1));
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(event.target.files || []) as File[]; // Explicitly cast to File[]
        if (selectedFiles.length > 1) {
            showAlert('You can only upload one file.', 'error');
            return;
        }
        setFiles(selectedFiles.slice(0, 1));
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <h2>{user?.role === "buyer" ? "Offer Information" : "Service Information"}</h2>
                <p>Describe your project information to the provider</p>
                <form onSubmit={formik.handleSubmit}>
                    <Select
                        placeholder="Provider Category"
                        size="lg"
                        sx={{ width: '100%', marginBottom: 2 }}
                        value={formik.values.category}
                        onChange={(e, newValue) => {
                            formik.setFieldValue('category', newValue);
                        }}
                        onBlur={formik.handleBlur}>
                        <Option value="floorLayers">Floor Layers</Option>
                        <Option value="painter">Painter</Option>
                        <Option value="architect">Architect</Option>
                        <Option value="flooringAdhesive">Flooring Adhesive</Option>
                    </Select>
                    {formik.touched.category && formik.errors.category ? (
                        <div style={{ color: 'red' }}>{formik.errors.category}</div>
                    ) : null}
                    <Input
                        placeholder="Title"
                        size="lg"
                        sx={{ marginTop: 2, width: '100%' }}
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="title"
                    />
                    {formik.touched.title && formik.errors.title ? (
                        <div style={{ color: 'red' }}>{formik.errors.title}</div>
                    ) : null}
                    <Input
                        placeholder="Price"
                        size="lg"
                        type="number"
                        sx={{ width: '100%', marginTop: 2 }}
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="price"
                    />
                    {formik.touched.price && formik.errors.price ? (
                        <div style={{ color: 'red' }}>{formik.errors.price}</div>
                    ) : null}
                    <Textarea
                        placeholder="Describe your offer..."
                        minRows={5}
                        sx={{ width: '100%', marginTop: 2 }}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="description"
                    />
                    {formik.touched.description && formik.errors.description ? (
                        <div style={{ color: 'red' }}>{formik.errors.description}</div>
                    ) : null}
                    {files.length > 0 && (
                        <div className={styles.preview}>
                            {files.map((file, index) => (
                                <div key={index} className={styles.attachedFile}>
                                    <p> {file.name} - {(file.size / 1024).toFixed(2)} KB</p>
                                </div>
                            ))}
                        </div>
                    )}
                    <div
                        className={`${styles.dashedBorder} ${isDragging ? styles.dragging : ''}`}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}>
                        <MdOutlineFileUpload className={styles.icon} size={50} />
                        <p>Drag and drop your files here</p>
                        <p>or</p>
                        <Button
                            variant="contained"
                            component="label"
                            color="error"
                            sx={{
                                textTransform: 'none',
                                borderRadius: "50px",
                                backgroundColor: "#00ffd0",
                            }}
                        >
                            Browse File
                            <input type="file" hidden onChange={handleFileChange} multiple />
                        </Button>
                    </div>
                    {formik.touched.photo && formik.errors.photo ? (
                        <div style={{ color: 'red' }}>{formik.errors.photo}</div>
                    ) : null}
                    <div className={styles.navButtons}>
                        <Link className={styles.link} href="/account">
                            <Button variant="outlined" color="error" sx={{ borderRadius: "50px", textTransform: "none" }}>
                                Cancel
                            </Button>
                        </Link>
                        <Button
                            type="submit"
                            loading={loading}
                            variant="contained"
                            color="error"
                            sx={{ borderRadius: "50px", textTransform: "none" }}>
                            {user?.role === "buyer" ? "Add an Offer" : "Provide a Service"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FavorableOffer;