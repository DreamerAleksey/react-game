import React from "react";
import {Button, Slider} from "antd";
import styles from './Settings.module.css';

const Settings = () => {
    let volume = +localStorage.getItem('volume');
    return (
        <div className={styles.settingsWrapper}>
            <div className={styles.buttonsBlock}>
                <div>
                    Music Volume
                    <Slider defaultValue={volume * 100} onChange={(value) => {localStorage.setItem('volume', value / 100)}}/>
                </div>
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
                <Button onClick={() => window.history.back()}>Back</Button>
            </div>
        </div>
    )
}

export default Settings;