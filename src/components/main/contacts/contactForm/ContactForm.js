import React, {useState} from "react";
import styles from './style.module.css'
import {mailApi} from "../../../api/api";

function ContactForm() {

    const [msgSent, setMsgSent] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const msgObj = {
            name,
            email,
            phone,
            message
        }
        mailApi.sendMsg(msgObj);
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
        setMsgSent(true)
    }
    const onNameChangeHandler = (e) => {
        if (e.currentTarget) {
            setName(e.currentTarget.value)
        }
    }
    const onEmailChangeHandler = (e) => {
        if (e.currentTarget) {
            setEmail(e.currentTarget.value)
        }
    }
    const onPhoneChangeHandler = (e) => {
        if (e.currentTarget) {
            setPhone(e.currentTarget.value)
        }
    }
    const onMessageChangeHandler = (e) => {
        if (e.currentTarget) {
            setMessage(e.currentTarget.value)
        }
    }
    return (
        !msgSent ?
        <div className={styles.contactsFormWrap}>
            <form className={styles.contactsForm} onSubmit={(e) => onSubmitHandler(e)}>
                <div className={styles.contactsForm__group}>
                    <input type="text" required value={name} onChange={(e) => onNameChangeHandler(e)}/>
                    <label htmlFor="contactsForm__input">Your name</label>
                </div>
                <div className={styles.contactsForm__group}>
                    <input type="email" required value={email} onChange={(e) => onEmailChangeHandler(e)}/>
                    <label htmlFor="contactsForm__input">E-mail</label>
                </div>
                <div className={styles.contactsForm__group}>
                    <input type="number" required value={phone} onChange={(e) => onPhoneChangeHandler(e)}/>
                    <label htmlFor="contactsForm__input">Phone</label>
                </div>
                <div className={`${styles.contactsForm__group} ${styles.textareaGroup}`}>
                    <textarea placeholder="Type your message..." required value={message} onChange={(e) => onMessageChangeHandler(e)}></textarea>
                </div>
                <div className={`${styles.contactsForm__group} ${styles.submitGroup}`}>
                    <button type="submit">Let me know</button>
                </div>
            </form>
        </div>
            : <div className={styles.msgSent}>Thank you for your message.<br/>I will contact you soon.</div>
    );
}

export default ContactForm;