import React from "react";
import  styles from './style.module.css';


function Navigation() {
    return (
        <div className={styles.headerNavigationBlock}>
            <nav className={styles.headerNavigation}>
                <ul className={styles.headerNavigation__ul}>
                    <li className={styles.headerNavigation__li}>
                        <a href="#" className={styles.active}>Главная</a>
                    </li>
                    <li className={styles.headerNavigation__li}>
                        <a href="#">Навыки</a>
                    </li>
                    <li className={styles.headerNavigation__li}>
                        <a href="#">Работы</a>
                    </li>
                    <li className={styles.headerNavigation__li}>
                        <a href="#">Контакты</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;