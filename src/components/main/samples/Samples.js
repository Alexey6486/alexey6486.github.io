import React from "react";
import styles from './style.module.css'
import GlobalTitle from "../../globalTitle/GlobalTitle";
import Sample from "./sample/Sample";

function Samples() {

    return (
        <div className={styles.samplesBlock}>
            <div className="container">
                <GlobalTitle blockTitleFirstHalf="работы" blockTitleSecondHalf="оты" classMod/>
                <div className={styles.samplesWrap}>
                    <Sample activeClass/>
                    <Sample/>
                    <Sample/>
                    <Sample/>
                </div>
            </div>
        </div>
    );
}
export default Samples;