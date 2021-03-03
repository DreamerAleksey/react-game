import React from 'react';
import {Button} from "antd";
import Footer from "../Footer/Footer";
import styles from './Scoreboard.module.css'

const scoreArray = JSON.parse(localStorage.getItem('score'));

const Scoreboard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                Scoreboard
            </div>
            <div className={styles.scoreWrapper}>
                {scoreArray.map((e, index) => {
                    return (
                        <div className={styles.line}>
                            <div className={styles.index}>
                                {index + 1}
                            </div>
                            <div className={styles.score}>
                                {e}
                            </div>
                        </div>)
                })}
                <Button  onClick={() => window.history.back()}>Back</Button>
            </div>
            <Footer/>
        </div>
    )
}

export default Scoreboard;