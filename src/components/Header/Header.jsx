import React from 'react'
import { Link } from 'react-router-dom'
import ToggleButton from '../ToogleButton/ToggleButton'
import "./Header.css"

function Header(props) {
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

