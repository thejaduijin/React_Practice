import React from 'react'
import "./ToggleButton.css"
function ToggleButton() {
    const test = () =>{
        console.log("Toggle button clicked");
        // Add your functionality here
        // For example, you could use a Redux action to toggle a boolean state
        // dispatch({ type: "TOGGLE_BUTTON_STATE" });
    }
    return (
        <>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider" onChange={test}></span>
            </label>
        </>
    )
}

export default ToggleButton
