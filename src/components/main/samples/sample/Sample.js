import React from "react";
import styles from './style.module.css'

function Sample(props) {

    function mouseOver(e) {
        let parentElement = e.target.parentElement.parentElement.parentElement;
        parentElement.querySelector(`.${styles.active}`).classList.remove(`${styles.active}`);
        e.target.parentElement.parentElement.classList.add(`${styles.active}`);
    }

    function clickEvent(e) {
        e.stopPropagation();
        let parentElement = e.target.parentElement.parentElement;
        parentElement.querySelector(`.${styles.active}`).classList.remove(`${styles.active}`);
        e.target.parentElement.classList.add(`${styles.active}`);
    }

    function clickEvent2(e) {
        e.stopPropagation();
        let parentElement = e.target.parentElement.parentElement.parentElement;
        parentElement.querySelector(`.${styles.active}`).classList.remove(`${styles.active}`);
        e.target.parentElement.parentElement.classList.add(`${styles.active}`);
    }

    return (
        <div className={props.activeClass ? `${styles.sample} ${styles.active}` : styles.sample}>
            <div className={styles.sample__image} onClick={clickEvent}>
                <img src={props.imgLink} alt="" onMouseOver={mouseOver}/>
                <a className={styles.sample__details} href={props.sampleUrl} target="_blank" onMouseOver={mouseOver} onClick={clickEvent2} rel="noopener noreferrer">
                    Подробнее
                </a>
            </div>
        </div>
    );
}

export default Sample;