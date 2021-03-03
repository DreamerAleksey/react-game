import React from 'react';
import styles from './HowToPlay.module.css';
import {Button} from "antd";
import Footer from "../Footer/Footer";

const HowToPlay = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                How to play
            </div>
            <div className={styles.buttonsContainer}>
                <div className={styles.table}>
                    <div className={styles.column}>
                        <div className={styles.line}>Up</div>
                        <div className={styles.line}>Down</div>
                        <div className={styles.line}>Left</div>
                        <div className={styles.line}>Right</div>
                        <div className={styles.line}>New Game</div>
                    </div>
                    <div className={styles.column}>
                        <div className={styles.line}>W / ArrowUp</div>
                        <div className={styles.line}>S / ArrowDown</div>
                        <div className={styles.line}>A / ArrowLeft</div>
                        <div className={styles.line}>D / ArrowRight</div>
                        <div className={styles.line}>Space</div>
                    </div>
                </div>
                <div className={styles.button}>
                    <Button onClick={() => window.history.back()}>Back</Button>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default HowToPlay;