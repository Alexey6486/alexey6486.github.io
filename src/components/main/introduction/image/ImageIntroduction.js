import React from "react";
import styles from "./style.module.css"
import banner from "./../../../../assets/img/introduction-block/banner-bg.jpg"

function ImageIntroduction() {
    return (
        <div className={styles.imageIntroductionBlock}>
            <div className={styles.imageIntroductionBlock__img}>
                <img src={banner} alt=""/>
            </div>
        </div>
    );
}

export default ImageIntroduction;