import React from 'react';
import {Button} from "antd";

const scoreArray = JSON.parse(localStorage.getItem('score'));


const Scoreboard = () => {
    return (
        <div>
            {scoreArray.map((e, index) => {
                return <div>{index + 1} {e}</div>
            })}
            <Button onClick={() => window.history.back()}>Back</Button>
        </div>
    )
}

export default Scoreboard;