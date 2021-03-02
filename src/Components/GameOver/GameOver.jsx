import React from 'react';
import styles from './GameOver.module.css';

const GameOver = (props) => {
    if (!localStorage.getItem('score')) localStorage.setItem('score', '[0,0,0,0,0,0,0,0,0,0]');

    const scoreArray = JSON.parse(localStorage.getItem('score'));
    scoreArray.push(props.count);
    scoreArray.sort((a, b) => {
        return a - b
    }).reverse().splice(10);
    localStorage.setItem('score', JSON.stringify(scoreArray));

    return (
        <div className={styles.style}>
            <div>
                Game Over
            </div>
            <div>
                Your Score is {props.count}
            </div>
        </div>

    )
}
export default GameOver;