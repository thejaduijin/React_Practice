import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ToggleButton from '../ToogleButton/ToggleButton'
import "./Header.css"

function Header(props) {
    // const [toggle, setIsToggled] = useState(false);

    // const handleToggle = () => {
    //     setIsToggled(!toggle);
    //     console.log("Toggle button clicked");

    //     // Add your functionality here
    //     // For example, you could use a Redux action to toggle a boolean state
    //     // dispatch({ type: "TOGGLE_BUTTON_STATE" });
    // };
    return (
        <div id="Header" >
            <nav >
                <Link className="Link" to="/">Practice</Link>
                <Link className="Link" to="/blogs">Blogs</Link>
                <Link className="Link" to="/connect">Connect</Link>
                <ToggleButton handleToggle={props.handleToggle}></ToggleButton>
            </nav>
        </div>
    )
}

export default Header

