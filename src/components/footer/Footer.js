import React from "react";
import  styles from './style.module.css';
import Contact from "./contact/Contact";


function Footer() {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footerInner}>
                    <div className={styles.footer__author}>
                        <h3>John Doe</h3>
                    </div>
                    <Contact/>
                    <div className={styles.footer__copyright}>
                        <p>&copy; Все права защищены</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;