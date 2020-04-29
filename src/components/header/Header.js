import React from "react";
import  styles from './style.module.css';
import Navigation from "./navigation/Navigation";
import Social from "./social/Social";
import Contact from "./contact/Contact";

function Header() {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.headerInner}>
                    <Navigation/>
                    <div className={styles.contactsBlockHeader}>
                        <Social/>
                        <Contact/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;