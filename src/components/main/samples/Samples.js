import React from "react";
import styles from './style.module.css'
import GlobalTitle from "../../globalTitle/GlobalTitle";
import Sample from "./sample/Sample";
import sample_1 from "./../../../assets/img/samples/sample_1.png"
import sample_2 from "./../../../assets/img/samples/sample_2.png"
import sample_3 from "./../../../assets/img/samples/sample_3.png"
import sample_4 from "./../../../assets/img/samples/sample_4.png"

function Samples() {

    return (
        <div className={styles.samplesBlock}>
            <div className="container">
                <GlobalTitle blockTitleFirstHalf="работы" blockTitleSecondHalf="оты" classMod/>
                <div className={styles.samplesWrap}>
                    <Sample activeClass imgLink={sample_1}/>
                    <Sample imgLink={sample_2}/>
                    <Sample imgLink={sample_3}/>
                    <Sample imgLink={sample_4}/>
                </div>
            </div>
        </div>
    );
}
export default Samples;