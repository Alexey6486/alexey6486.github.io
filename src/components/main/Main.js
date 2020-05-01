import React from "react";
import  styles from './style.module.css';
import Introduction from "./introduction/Introduction";
import Skills from "./skills/Skills";
import Samples from "./samples/Samples";
import Contacts from "./contacts/Contacts";

function Main() {
    return (
        <div className={styles.mainWrap}>
            <Introduction/>
            <Skills/>
            <Samples/>
            <Contacts />
        </div>
    );
}

export default Main;