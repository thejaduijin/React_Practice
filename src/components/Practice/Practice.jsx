import React, { useState } from 'react';
import "./Practice.css"
import { useRef } from 'react';

function Practice(props) {
    const [timer, setTimer] = useState(0);
    const [start, setStart] = useState(true);
    const intervalRef = useRef(null); // Use ref to store interval ID

    const startTimer = () => {
        setStart(true);
        if (start && !intervalRef.current) { // Start only if not already running
            console.log("started 2");
            intervalRef.current = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        setTimer(0);
        setStart((prev) => !prev);
        clearInterval(intervalRef.current); // Clear the correct interval
        intervalRef.current = null; // Reset ref
    };

    const pauseTimer = () => {
        clearInterval(intervalRef.current); // Clear the interval
        intervalRef.current = null; // Reset ref
    }

    return (
        <div className='main-outlet'>
            Practice Component of {props.tech}
            <p className='heading'>Let's Start</p>
            <div>{timer}</div>
            <button onClick={startTimer}>Start Button</button>
            <button onClick={stopTimer}>reset Button</button>
            <button onClick={pauseTimer}>pause Button</button>
        </div>
    )
}

export default Practice
