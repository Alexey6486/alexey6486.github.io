import React from "react";
import styles from './style.module.css'

function Sample(props) {

    function mouseOver(e) {
console.log(e.target);
        let parentElement = e.target.parentElement.parentElement.parentElement;
        parentElement.querySelector(`.${styles.active}`).classList.remove(`${styles.active}`);
        e.target.parentElement.parentElement.classList.add(`${styles.active}`);
    }
    return (
        <div className={props.activeClass ? `${styles.sample} ${styles.active}` : styles.sample}
             >
            <div className={styles.sample__image} >
                <img src={props.imgLink} alt="" onMouseOver={mouseOver}/>
                <a className={styles.sample__details} href={props.sampleUrl} target="_blank">
                    Подробнее
                </a>
            </div>
        </div>
    );
}

export default Sample;