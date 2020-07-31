import React from "react";
import styles from './style.module.css'

function ContactForm() {
    return (
        <div className={styles.contactsFormWrap}>
            <form className={styles.contactsForm} action="#">
                <div className={styles.contactsForm__group}>
                    <input type="text" required/>
                    <label htmlFor="contactsForm__input">Your name</label>
                </div>
                <div className={styles.contactsForm__group}>
                    <input type="email" required/>
                    <label htmlFor="contactsForm__input">E-mail</label>
                </div>
                <div className={styles.contactsForm__group}>
                    <input type="number" required/>
                    <label htmlFor="contactsForm__input">Phone</label>
                </div>
                <div className={`${styles.contactsForm__group} ${styles.textareaGroup}`}>
                    <textarea placeholder="Type your message..." required></textarea>
                </div>
                <div className={`${styles.contactsForm__group} ${styles.submitGroup}`}>
                    <button type="submit">Let me know</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;