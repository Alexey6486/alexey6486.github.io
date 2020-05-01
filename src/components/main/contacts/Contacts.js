import React from "react";
import styles from './style.module.css';
import GlobalTitle from "../../globalTitle/GlobalTitle";
import ContactForm from "./contactForm/ContactForm";
import ContactsInfo from "./contactsInfo/ContactsInfo";



function Contacts() {
    return (
        <div className={styles.contactsBlock}>
            <div className="container">
                <GlobalTitle blockTitleFirstHalf="контакты" blockTitleSecondHalf="акты"/>
                <div className={styles.contactsWrap}>
                    <div className={styles.contactsWrapInner}>
                        <ContactsInfo/>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;