import React from "react";
import  styles from './style.module.css';


function Navigation() {

    function menuToggle(e) {
        e.stopPropagation();
        e.preventDefault();
        let hiddenNav_1 = e.target.parentElement.querySelector(`.${styles.headerNavigationBlock}`);
        !hiddenNav_1.classList.contains(`${styles.active}`)
            ? hiddenNav_1.classList.add(`${styles.active}`)
            : hiddenNav_1.classList.remove(`${styles.active}`)
    }
    function menuToggle2(e) {
        e.stopPropagation();
        e.preventDefault();
        let hiddenNav_1 = e.target.parentElement.parentElement.querySelector(`.${styles.headerNavigationBlock}`);
        !hiddenNav_1.classList.contains(`${styles.active}`)
            ? hiddenNav_1.classList.add(`${styles.active}`)
            : hiddenNav_1.classList.remove(`${styles.active}`)
    }

    return (
        <>

            <svg className={styles.headerNavHiddenBtn} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={menuToggle2}>
                <rect x="16" y="16" width="30" height="30"/>
                <path d="M197.2,32v165.2H32V32H197.2 M229.2,0H0v229.2h229.2V0L229.2,0z"/>
                <rect x="298.8" y="16" width="30" height="30"/>
                <path d="M480,32v165.2H314.8V32H480 M512,0H282.8v229.2H512V0L512,0z"/>
                <rect x="16" y="298.8" width="30" height="30"/>
                <path d="M197.2,314.8V480H32V314.8H197.2 M229.2,282.8H0V512h229.2V282.8L229.2,282.8z"/>
                <rect x="298.8" y="298.8" width="30" height="30"/>
                <path d="M480,314.8V480H314.8V314.8H480 M512,282.8H282.8V512H512V282.8L512,282.8z"/>
            </svg>

            <div className={styles.headerNavigationBlock}>
                <nav className={styles.headerNavigation}>
                    <ul className={styles.headerNavigation__ul}>
                        <li className={styles.headerNavigation__li}>
                            <a href="#banner" className={styles.active}>Главная</a>
                        </li>
                        <li className={styles.headerNavigation__li}>
                            <a href="#skills">Навыки</a>
                        </li>
                        <li className={styles.headerNavigation__li}>
                            <a href="#works">Работы</a>
                        </li>
                        <li className={styles.headerNavigation__li}>
                            <a href="#contacts">Контакты</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </>
    );
}

export default Navigation;