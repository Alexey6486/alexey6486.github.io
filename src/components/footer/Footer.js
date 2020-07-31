import React from "react";
import  styles from './style.module.css';
import Contact from "./contact/Contact";


function Footer() {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.footerInner}>
                    <div className={styles.footer__author}>
                        <h3>Alexey Chernov</h3>
                    </div>
                    <Contact/>
                    <div className={styles.footer__copyright}>
                        <p>Copyright &copy; 2020</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;