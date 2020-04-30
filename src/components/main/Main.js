import React from "react";
import  styles from './style.module.css';
import Introduction from "./introduction/Introduction";
import Skills from "./skills/Skills";
import Samples from "./samples/Samples";

function Main() {
    return (
        <div className={styles.mainWrap}>
            <Introduction/>
            <Skills/>
            <Samples/>
        </div>
    );
}

export default Main;