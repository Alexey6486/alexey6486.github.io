import React from "react";
import styles from './style.module.css'


function ContactsInfo() {
    return (
        <div className={styles.contactsInfo}>
            <div className={styles.contactsInfo__name}>
                <h3>Alexey Chernov</h3>
            </div>
            <div className={styles.contactsInfo__item}>
                <div className={styles.contactsInfo__icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <g>
                            <g>
                                <path d="M256,0C114.624,0,0,114.624,0,256s114.624,256,256,256s256-114.624,256-256S397.376,0,256,0z M384,400
                                c-149.984,0-272-122.016-272-272c0-8.832,7.168-16,16-16h59.072c8.832,0,16,7.168,16,16c0,27.648,6.016,53.984,17.888,78.24
                                c1.888,3.84,2.144,8.224,0.736,12.256c-1.376,4.032-4.32,7.328-8.16,9.184l-23.872,11.52
                                c19.872,34.592,48.544,63.296,83.104,83.104l11.52-23.84c1.856-3.84,5.152-6.752,9.184-8.16c4.032-1.376,8.448-1.12,12.256,0.736
                                c24.32,11.872,50.624,17.888,78.24,17.888c8.832,0,16,7.168,16,16V384H400C400,392.832,392.832,400,384,400z"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className={styles.contactsInfo__data}>
                    <div className={styles.contactsInfo__title}>
                        <p>Phone:</p>
                    </div>
                    <a href='tel:+79032531666' className={styles.contactsInfo__text} rel="noopener noreferrer">
                        <p>+7 (903) 253-16-66</p>
                    </a>
                </div>
            </div>
            <div className={styles.contactsInfo__item}>
                <div className={styles.contactsInfo__icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <g>
                            <g>
                                <path d="M257,210c-24.814,0-45,20.186-45,45c0,24.814,20.186,45,45,45c24.814,0,45-20.186,45-45C302,230.186,281.814,210,257,210z
                                "/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path d="M255,0C114.39,0,0,114.39,0,255s114.39,257,255,257s257-116.39,257-257S395.61,0,255,0z M362,330
                                c-20.273,0-38.152-10.161-49.017-25.596C299.23,319.971,279.354,330,257,330c-41.353,0-75-33.647-75-75c0-41.353,33.647-75,75-75
                                c16.948,0,32.426,5.865,45,15.383V195c0-8.291,6.709-15,15-15c8.291,0,15,6.709,15,15c0,33.36,0,41.625,0,75
                                c0,16.538,13.462,30,30,30c16.538,0,30-13.462,30-30c0-100.391-66.432-150-135-150c-74.443,0-135,60.557-135,135
                                s60.557,135,135,135c30,0,58.374-9.609,82.061-27.803c15.822-12.078,33.94,11.765,18.281,23.789
                                C328.353,408.237,293.665,420,257,420c-90.981,0-165-74.019-165-165S166.019,90,257,90c82.897,0,165,61.135,165,180
                                C422,303.091,395.091,330,362,330z"/>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className={styles.contactsInfo__data}>
                    <div className={styles.contactsInfo__title}>
                        <p>E-mail:</p>
                    </div>
                    <a href='mailto:alexey6486@gmail.com' className={styles.contactsInfo__text} rel="noopener noreferrer">
                        <p>alexey6486@gmail.com</p>
                    </a>
                </div>
            </div>
            <div className={styles.contactsInfo__item}>
                <div className={styles.contactsInfo__icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <g>
                            <g>
                                <path d="M256,0C150.125,0,64,86.135,64,192c0,141.646,177.146,310,184.688,317.104C250.75,511.031,253.375,512,256,512
                                    s5.25-0.969,7.313-2.896C270.854,502,448,333.646,448,192C448,86.135,361.875,0,256,0z M256,298.667
                                    c-58.813,0-106.667-47.854-106.667-106.667S197.188,85.333,256,85.333S362.667,133.188,362.667,192S314.813,298.667,256,298.667z"
                                />
                            </g>
                        </g>
                    </svg>
                </div>
                <div className={styles.contactsInfo__data}>
                    <div className={styles.contactsInfo__title}>
                        <p>Address:</p>
                    </div>
                    <div className={styles.contactsInfo__text}>
                        <p>Russian Federation,</p>
                        <p>Moscow,</p>
                        <p>Zelenograd</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactsInfo;