import React from "react";
import styles from "./style.module.css"

function InfoIntroduction() {
    return (
        <div className={styles.infoIntroductionBlock}>
            <div className={styles.infoIntroductionBlock__title}>
                <h2>John Doe</h2>
            </div>
            <div className={styles.infoIntroductionBlock__position}>
                <h3>WEB developer</h3>
            </div>
        </div>
    );
}

export default InfoIntroduction;