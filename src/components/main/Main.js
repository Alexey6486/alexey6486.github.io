import React from "react";
import  styles from './style.module.css';
import Introduction from "./introduction/Introduction";

function Main() {
    return (
        <div className={styles.mainWrap}>
            <Introduction/>
        </div>
    );
}

export default Main;