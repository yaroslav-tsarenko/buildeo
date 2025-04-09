import React, {FC} from 'react';
import styles from "./AuthLayout.module.scss"
import Image from "next/image";
import logo from "@/assets/images/logo-auth.svg"
interface AuthLayoutInterface {
    children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutInterface> = ({children}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <Image src={logo} alt="Logo" width={205} height={205}/>
                <h1>We are looking for builders who want to save money</h1>
            </div>
            <div className={styles.right}>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;