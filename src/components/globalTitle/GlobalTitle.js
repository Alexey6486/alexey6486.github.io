import React from "react";
import styles from './style.module.css'

function GlobalTitle(props) {
    return (
        <div className={props.classMod ? `${styles.globalTitle} ${styles.invertColors}` : styles.globalTitle}>
            <h2>{props.blockTitleFirstHalf} <span>{props.blockTitleSecondHalf}</span></h2>
        </div>
    );
}

export default GlobalTitle;

