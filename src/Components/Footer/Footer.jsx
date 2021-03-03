import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>

                <a href="https://rs.school/react/"><img src="https://rs.school/images/rs_school_js.svg" alt="logo"/></a>
                <span>Snake Game 2021</span>
                <div className={styles.develop}>
                    <a href="https://github.com/DreamerAleksey">Dreamer Aleksey</a>
                </div>
        </div>
    )
}

export default Footer;