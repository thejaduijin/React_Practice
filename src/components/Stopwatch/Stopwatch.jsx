import React, { useEffect } from 'react'
import "./Stopwatch.css"
import { useRef, useState } from 'react';

function Stopwatch() {
    const [timer, setTimer] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hour, setHour] = useState(0);
    const [start, setStart] = useState(true);
    const intervalRef = useRef(null); // Use ref to store interval ID

    useEffect(() => {
        if (timer === 60) {
            setTimer(1);
            setMinutes((prev) => prev + 1);
            if (minutes === 60) {
                setMinutes(0);
                setHour((prev) => prev + 1);
            }
            if (hour === 24) {
                setHour(0);
            }
        }

        return () => { }
    }, [timer, minutes, hour])


    const startTimer = () => {
        if (!intervalRef.current) { // Only start if no interval is running
            setStart(true);
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
        <div>
            <div className='timer'>
                {hour}:{minutes}:{timer}
            </div>
            <div className="radio-input">
                <label className="label" onClick={startTimer}>
                    <div className="back-side"></div>
                    <input type="radio" id="value-1" name="value-radio" value="value-1" />
                    <span className="text">PLAY</span>
                    <span className="bottom-line"></span>
                </label>

                <label className="label" onClick={stopTimer}>
                    <div className="back-side"></div>
                    <input type="radio" id="value-2" name="value-radio" value="value-2" />
                    <span className="text">RESET</span>
                    <span className="bottom-line"></span>
                </label>

                <label className="label" onClick={pauseTimer}>
                    <div className="back-side"></div>
                    <input type="radio" id="value-3" name="value-radio" value="value-3" />
                    <span className="text" >PAUSE</span>
                    <span className="bottom-line"></span>
                </label>
            </div>
        </div>
    )
}

export default Stopwatch
