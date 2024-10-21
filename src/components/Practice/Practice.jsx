import React from 'react';
import "./Practice.css"
import Stopwatch from '../Stopwatch/Stopwatch';
import Button from '../Button/Button';

function Practice(props) {
    return (
        <div className='main-outlet'>
            Practice Component of {props.tech}
            <p className='heading'>Let's Start</p>
            "to see the example of useEffect"
            <Stopwatch></Stopwatch>
            "to see the example of useReducer"
            <Button />
        </div>
    )
}

export default Practice
