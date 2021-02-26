import React from "react";
import {Button} from "antd";
import styles from './Settings.module.css';

const Settings = (props) => {
    return (
        <div className={styles.settingsWrapper}>
            <div className={styles.buttonsBlock}>
                <Button onClick={ () => {
                        localStorage.setItem('gameMode', 'easy');
                        localStorage.setItem('speed', '150');
                    }
                }>Easy</Button>
                <Button onClick={ () => {
                    localStorage.setItem('gameMode', 'medium');
                    localStorage.setItem('speed', '150');
                }
                }>Medium</Button>
                <Button onClick={ () => {
                    localStorage.setItem('gameMode', 'hard');
                    localStorage.setItem('speed', '150');
                }
                }>Hard</Button>
            </div>
        </div>
    )
}

export default Settings;