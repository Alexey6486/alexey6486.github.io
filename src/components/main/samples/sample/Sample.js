import React from "react";
import styles from './style.module.css'

function Sample(props) {

    function mouseOver(e) {
        let parentElement = e.target.parentElement;
        parentElement.querySelector(`.${styles.active}`).classList.remove(`${styles.active}`);
        e.target.classList.add(`${styles.active}`);
    }
    return (
        <div className={props.activeClass ? `${styles.sample} ${styles.active}` : styles.sample}
             onMouseOver={mouseOver}>
        </div>
    );
}

export default Sample;