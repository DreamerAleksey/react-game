import React from 'react';
import styles from './Cell.module.css';

const getItem = (x, y, snakeSegments, foodItem) => {
    if (foodItem.x === x && foodItem.y === y) {
        return <span className={styles.food}>f</span>
    }

    for (const segment of snakeSegments) {
        if (segment.x === x && segment.y === y) {
            return <span className={styles.snakeBody}>s</span>
        }
    }
};

const Cell = (props) => {
    return (
        <div className={styles.main}>
            {getItem(props.x, props.y, props.segments, props.foodItem) || ``}
        </div>
    )
}

export default Cell;