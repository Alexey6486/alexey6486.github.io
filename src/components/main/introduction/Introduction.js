import React from "react";
import styles from './style.module.css'
import InfoIntroduction from "./info/InfoIntroduction";
import ImageIntroduction from "./image/ImageIntroduction";

function Introduction() {
    return (
        <div className={styles.introductionBlock} id="banner">
            <div className="container">
                <div className={styles.introduction}>
                    <InfoIntroduction/>
                    <ImageIntroduction/>
                </div>
            </div>
        </div>
    );
}

export default Introduction;