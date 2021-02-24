import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import useInterval from "./useInterval";
import Header from "./Components/Header/Header";
import Cell from "./Components/Cell/Cell";
import Footer from "./Components/Footer/Footer";
import GameOver from "./Components/GameOver/GameOver";

const FieldSize = 16;
const FieldRow = [...new Array(FieldSize).keys()];

const DIRECTION = {
    right: {x: 1, y: 0},
    left: {x: -1, y: 0},
    top: {x: 0, y: -1},
    bottom: {x: 0, y: 1},
};

const limitByField = (x) => {
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

const newSnakePosition = (segments, direction) => {
    const [head] = segments;
    const newHead = {
        x: limitByField(head.x + direction.x),
        y: limitByField(head.y + direction.y)
    };
    if (collidesWithFood(newHead, foodItem)) {
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

const App = () => {
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
    }, intersectsWithItself ? null : 150);
    return (
        <div className="wrapper">
                <Header/>
                {intersectsWithItself ? <GameOver/> : (
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
                <Footer/>
        </div>
    );
}

export default App;
