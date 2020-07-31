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
        <div className={styles.samplesBlock} id="works">
            <div className="container">
                <GlobalTitle blockTitleFirstHalf="samples" blockTitleSecondHalf="ples" classMod/>
                <div className={styles.samplesWrap}>
                    <Sample activeClass imgLink={sample_1} sampleUrl={'http://netadmin.acroweb296.tmweb.ru/'}/>
                    <Sample imgLink={sample_2} sampleUrl={'http://ffr.acroweb296.tmweb.ru/'}/>
                    <Sample imgLink={sample_3} sampleUrl={'https://grantfinance.ru/'}/>
                    <Sample imgLink={sample_4} sampleUrl={'https://bmw-sphere.ru/'}/>
                </div>
            </div>
        </div>
    );
}
export default Samples;