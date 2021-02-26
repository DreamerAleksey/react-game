import React from 'react';
import './App.css';
import MainMenu from "./Components/MainMenu/MainMenu";
import Play from "./Components/Play/Play";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {useEffect} from "react";

const App = () => {
    useEffect(() => {
        document.title = "Snake Game"
    }, []);
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Route exact path='/' component={MainMenu}/>
                <Route path='/play' component={Play}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
