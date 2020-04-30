import React from "react";
import styles from './style.module.css'

function GlobalTitleInvert(props) {
    return (
        <div className={`${styles.globalTitle} ${styles.invertColors}`}>
            <h2>{props.blockTitleFirstHalf} <span>{props.blockTitleSecondHalf}</span></h2>
        </div>
    );
}

export default GlobalTitleInvert;