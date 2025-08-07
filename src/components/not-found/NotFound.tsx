import React from 'react';
import styles from "./NotFound.module.scss";
import {Button} from "@mui/material";
import {LuUserPlus} from "react-icons/lu";
import {headerContent} from "@/assets/config/content";

const NotFoundComponent = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>404 :(</h1>
                    <p>This page doesnt exist, maybe in the future we will create this page, but currently you need to
                        return home.</p>
                </div>
                <Button startIcon={<LuUserPlus/>} variant="outlined"
                        sx={{color: "white", borderColor: "white", textTransform: "none", borderRadius: "15px", lineHeight: "1.5"}}>
                    {headerContent.auth.register}
                </Button>
            </div>
        </div>
    );
};

export default NotFoundComponent;