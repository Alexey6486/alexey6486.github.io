import React from "react";
import styles from './style.module.css'

function Skill(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.skill__img}>
                <img src={props.imgSrc}/>
            </div>
            <div className={styles.skill__type}>
                <h3>{props.skillType}</h3>
            </div>
        </div>
    );
}

export default Skill;