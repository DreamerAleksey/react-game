import React from 'react';
import styles from './HowToPlay.module.css';
import {Button} from "antd";

const HowToPlay = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                How to play
            </div>
            <div className={styles.buttonsContainer}>
                <div>
                    <div>Up</div>
                    <div>Down</div>
                    <div>Left</div>
                    <div>Right</div>
                </div>
                <div>
                    <div>W / ArrowUp</div>
                    <div>S / ArrowDown</div>
                    <div>A / ArrowLeft</div>
                    <div>D / ArrowRight</div>
                </div>
            </div>
            <div className={styles.button}>
                <Button onClick={() => window.history.back()}>Back</Button>
            </div>
        </div>
    )
}

export default HowToPlay;