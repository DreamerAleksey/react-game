import React, {useEffect, useState} from "react";
import useInterval from "../../useInterval";
import Header from "../Header/Header";
import GameOver from "../GameOver/GameOver";
import Cell from "../Cell/Cell";
import Statistics from "../Statistics/Statistics";
import Footer from "../Footer/Footer";
import Music from "../Music/Music";

import sound from '../../bite_sound.mp3'
import {Button} from "antd";

const FieldSize = 16;
const FieldRow = [...new Array(FieldSize).keys()];

const AudioFood = new Audio(sound);
let intersectsWithWall = false;

const DIRECTION = {
    right: {x: 1, y: 0},
    left: {x: -1, y: 0},
    top: {x: 0, y: -1},
    bottom: {x: 0, y: 1},
};

const limitByField = (x) => {
    if ((x >= FieldSize) && (localStorage.getItem('gameMode') === 'hard')) {
        intersectsWithWall = true;
        return;
    }

    if ((x < 0) && (localStorage.getItem('gameMode') === 'hard')) {
        intersectsWithWall = true;
        return;
    }

    if (x >= FieldSize) {
        return 0;
    }
    if (x < 0) {
        return FieldSize - 1;
    }
    return x;
}

let foodItem = {
    x: Math.floor(Math.random() * FieldSize),
    y: Math.floor(Math.random() * FieldSize)
};

const collidesWithFood = (head, foodItem) => {
    return foodItem.x === head.x && foodItem.y === head.y;
};
let k = 0;
const countIncreaser = () => {
    k++;
    return k;
}

const newSnakePosition = (segments, direction) => {
    const [head] = segments;
    const newHead = {
        x: limitByField(head.x + direction.x),
        y: limitByField(head.y + direction.y)
    };
    if (collidesWithFood(newHead, foodItem)) {
        countIncreaser();
        AudioFood.volume = +localStorage.getItem('volume');
        AudioFood.play();
        if ((localStorage.getItem('gameMode') !== 'easy')) {
            let num = localStorage.getItem('speed');
            num = +num - 2;
            localStorage.setItem('speed', num);
        }
        foodItem = {
            x: Math.floor(Math.random() * FieldSize),
            y: Math.floor(Math.random() * FieldSize)
        };
        segments.unshift(head);
        return [newHead, ...segments];
    } else {
        return [newHead, ...segments.slice(0, -1)];
    }
}


const Play = () => {

    if (k === 0) localStorage.setItem('speed', '150');

    const [direction, setDirection] = useState(DIRECTION.bottom);

    const [snakeSegments, setSnakeSegments] = useState([
        {x: 8, y: 8},
        {x: 8, y: 7},
        {x: 8, y: 6},
    ]);


    useEffect(() => {
        const onKeypress = e => {
            if (e.key.toLowerCase() === 'w' ||
                e.key.toLowerCase() === 'ц' ||
                e.key === 'ArrowUp') {
                setDirection(DIRECTION.top);
            }
            if (e.key.toLowerCase() === 's' ||
                e.key.toLowerCase() === 'ы' ||
                e.key === 'ArrowDown') {
                setDirection(DIRECTION.bottom);
            }
            if (e.key.toLowerCase() === 'a' ||
                e.key.toLowerCase() === 'ф' ||
                e.key === 'ArrowLeft') {
                setDirection(DIRECTION.left);
            }
            if (e.key.toLowerCase() === 'd' ||
                e.key.toLowerCase() === 'в' ||
                e.key === 'ArrowRight') {
                setDirection(DIRECTION.right);
            }
            if (e.key === ' ') {
                window.location.reload();
            }
        }
        document.addEventListener('keydown', onKeypress);
        return () => {
            document.removeEventListener('keydown', onKeypress);
        };
    }, []);

    const [head, ...tail] = snakeSegments;
    const intersectsWithItself = tail.some(segment => segment.x === head.x && segment.y === head.y);

    useInterval(() => {
        setSnakeSegments(segments => newSnakePosition(segments, direction));
    }, intersectsWithItself ? null : Number(localStorage.getItem('speed')));

    let intersectsWithSomething;

    if (intersectsWithItself || intersectsWithWall) {
        intersectsWithSomething = true;
    }

    return (
        <div className="wrapper">
            <Header/>
            <div>
                <div>
                    <Statistics count={k}/>
                </div>
                {intersectsWithSomething ? <GameOver count={k}/> : (
                    <div className='miniField'>
                        {FieldRow.map(y => (
                            <div className='horizontal'>
                                {FieldRow.map(x => (
                                    <Cell x={x} y={y} segments={snakeSegments} foodItem={foodItem}/>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
                <div>
                    {intersectsWithSomething ?

                                <Button onClick={() => {window.location.reload()}}>New Game</Button> :
                            <Button onClick={() => {window.history.back()}}>Back</Button>
                    }
                </div>
            </div>
            <Music/>
            <Footer/>
        </div>
    );
}
export default Play;