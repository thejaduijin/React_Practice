import React, { useState } from 'react';
import "./Practice.css"
import Stopwatch from '../Stopwatch/Stopwatch';

function Practice(props) {
    return (
        <div className='main-outlet'>
            Practice Component of {props.tech}
            <p className='heading'>Let's Start</p>
            <Stopwatch></Stopwatch>
        </div>
    )
}

export default Practice
