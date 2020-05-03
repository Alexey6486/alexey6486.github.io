import React from "react";
import styles from './style.module.css'
import GlobalTitle from "../../globalTitle/GlobalTitle";
import Skill from "./skill/Skill";
import cssImg from "./../../../assets/img/skills/css-new.png";
import htmlImg from "./../../../assets/img/skills/html-new.png";
import jsImg from "./../../../assets/img/skills/js-new.png";
import reactImg from "./../../../assets/img/skills/react-new.png";

function Skills() {
    return (
        <div className={styles.skillsBlock} id="skills">
            <div className="container">
                <GlobalTitle blockTitleFirstHalf="навыки" blockTitleSecondHalf="ыки"/>
                <div className={styles.skillsWrap}>
                    <Skill imgSrc={reactImg} skillType="React" reactAnimation/>
                    <Skill imgSrc={jsImg} skillType="JavaScript"/>
                    <Skill imgSrc={cssImg} skillType="CSS"/>
                    <Skill imgSrc={htmlImg} skillType="HTML"/>
                </div>
            </div>
        </div>
    );
}

export default Skills;