import React, { useState, useEffect } from "react";
import {SoundOutlined, SoundFilled} from '@ant-design/icons';
import styles from './Music.module.css';

const useAudio = () => {
    const [audio] = useState(new Audio('https://mp3hap.net/uploads/files/2020-10/1603377900_elena_zheludok_-_shchuchynshchyna_456485968474499226.mp3'));
    const [playing, setPlaying] = useState(false);
    const toggle = () => setPlaying(!playing);
    audio.volume = +localStorage.getItem('volume');

    useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Music = () => {

    const [playing, toggle] = useAudio();
    return (
        <div>
            <span className={styles.playMuteButton}  onClick={toggle}>{playing ? <SoundOutlined /> : <SoundFilled />}</span>
        </div>
    );
};

export default Music;