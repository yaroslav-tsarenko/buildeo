"use client";

import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {newRequest} from "@/utils/newRequest";
import {Button, Input, Textarea, Select, Option} from "@mui/joy";
import styles from "./SellProperty.module.scss";
import {MdOutlineFileUpload} from "react-icons/md";

const SellProperty = () => {
    const [loading, setLoading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    console.log(setIsDragging);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
            const filesArray = Array.from(selectedFiles);
            formik.setFieldValue("photos", filesArray);

            const previews = filesArray.map((file) => URL.createObjectURL(file));
            setImagePreviews(previews);
        }
    };

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            price: "",
            type: "",
            location: "",
            photos: [], // Updated to include photos as an array
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
            price: Yup.number().required("Price is required").positive().integer(),
            type: Yup.string().required("Type is required"),
            location: Yup.string().required("Location is required"),
            photos: Yup.array().of(Yup.mixed()).min(1, "At least one photo is required"), // Validate photos as an array
        }),
        onSubmit: async (values) => {
            setLoading(true);
            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("description", values.description);
            formData.append("price", values.price.toString());
            formData.append("type", values.type);
            formData.append("location", values.location);

            if (values.photos && Array.isArray(values.photos)) {
                values.photos.forEach((file: File) => {
                    formData.append("photos", file);
                });
            }

            try {
                const response = await newRequest.post("/property/create", formData, {
                    headers: {"Content-Type": "multipart/form-data"},
                });
                console.log("Property created successfully:", response.data);
                alert("Property created successfully!");
            } catch (error) {
                console.error("Error creating property:", error);
                alert("Error creating property");
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.titles}>
                    <h2>Sell your property fast</h2>
                    <p>Just add some fields to sell your property</p>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <Input
                        placeholder="Title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="title"
                        sx={{width: "100%", marginBottom: "16px"}}
                    />
                    {formik.touched.title && formik.errors.title && (
                        <div style={{color: "red"}}>{formik.errors.title}</div>
                    )}
                    <Textarea
                        placeholder="Description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="description"
                        minRows={4}
                        sx={{width: "100%", marginBottom: "16px"}}
                    />
                    {formik.touched.description && formik.errors.description && (
                        <div style={{color: "red"}}>{formik.errors.description}</div>
                    )}
                    <Input
                        placeholder="Price"
                        type="number"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="price"
                        sx={{width: "100%", marginBottom: "16px"}}
                    />
                    {formik.touched.price && formik.errors.price && (
                        <div style={{color: "red"}}>{formik.errors.price}</div>
                    )}
                    <Select
                        value={formik.values.type}
                        onChange={(event, newValue) => formik.setFieldValue("type", newValue)}
                        onBlur={formik.handleBlur}
                        placeholder="Type"
                        name="type"
                        sx={{width: "100%", marginBottom: "16px"}}
                    >
                        <Option value="apartment">Apartment</Option>
                        <Option value="house">House</Option>
                        <Option value="land">Land</Option>
                        <Option value="commercial">Commercial</Option>
                        <Option value="industrial">Industrial</Option>
                    </Select>
                    {formik.touched.type && formik.errors.type && (
                        <div style={{color: "red"}}>{formik.errors.type}</div>
                    )}
                    <Input
                        placeholder="Location"
                        value={formik.values.location}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="location"
                        sx={{width: "100%", marginBottom: "16px"}}
                    />
                    {formik.touched.location && formik.errors.location && (
                        <div style={{color: "red"}}>{formik.errors.location}</div>
                    )}
                    <div className={`${styles.dashedBorder} ${isDragging ? styles.dragging : ""}`}>
                        <MdOutlineFileUpload className={styles.icon} size={50}/>
                        <p>Drag and drop your files here</p>
                        <p>or</p>
                        <Button
                            variant="solid"
                            component="label"
                            sx={{
                                textTransform: "none",
                                backgroundColor: "#00ffd0",
                                borderRadius: "50px",
                                color: "black",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    backgroundColor: "#00e6b8",
                                    color: "white",
                                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                                    transform: "scale(1.05)",
                                },
                            }}
                        >
                            Browse File
                            <input type="file" hidden onChange={handleFileChange} multiple/>
                        </Button>
                    </div>
                    {formik.touched.photos && formik.errors.photos && (
                        <div style={{color: "red"}}>{formik.errors.photos}</div>
                    )}
                    {imagePreviews.length > 0 && (
                        <div className={styles.previewContainer}>
                            {imagePreviews.map((src, index) => (
                                <div key={index} className={styles.previewItem}>
                                    <img src={src} alt={`preview-${index}`} className={styles.previewImage}/>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const newFiles = [...(formik.values.photos || [])];
                                            const newPreviews = [...imagePreviews];
                                            newFiles.splice(index, 1);
                                            newPreviews.splice(index, 1);
                                            formik.setFieldValue("photos", newFiles);
                                            setImagePreviews(newPreviews);
                                        }}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                    <Button
                        type="submit"
                        variant="solid"
                        disabled={loading}
                        sx={{
                            textTransform: "none",
                            borderRadius: "10px",
                            marginTop: "10px",
                            color: "black",
                            backgroundColor: "#00ffd0",
                            "&:hover": {
                                backgroundColor: "#00e6b8",
                            },
                        }}
                    >
                        {loading ? "Publishing..." : "Publish"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SellProperty;