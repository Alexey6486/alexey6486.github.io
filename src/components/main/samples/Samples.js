import React from "react";
import styles from './style.module.css'
import GlobalTitle from "../../globalTitle/GlobalTitle";

function Samples() {
    return (
        <div className={styles.samplesBlock}>
            <div className="container">
                <GlobalTitle blockTitleFirstHalf="работы" blockTitleSecondHalf="оты" classMod/>
            </div>
        </div>
    );
}
export default Samples;