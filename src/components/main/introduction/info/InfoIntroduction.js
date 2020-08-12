import React from "react";
import styles from "./style.module.css"

function InfoIntroduction() {
    return (
        <div className={styles.infoIntroductionBlock}>
            <div className={styles.infoIntroductionBlock__title}>
                <h2>Alexey Chernov</h2>
            </div>
            <div className={styles.infoIntroductionBlock__position}>
                <h3>Front-end Web<br/><span>Developer</span></h3>
            </div>
        </div>
    );
}

export default InfoIntroduction;