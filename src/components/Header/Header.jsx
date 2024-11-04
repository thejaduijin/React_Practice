import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ToggleButton from '../ToogleButton/ToggleButton'
import "./Header.css"
import { ThemeContext } from '../ContextApi/ContextApi';

function Header({ onLogout }) {
    const theme = useContext(ThemeContext);

    return (
        <div id="Header" >
            <nav className={theme}>
                <Link className="Link" to="/">Practice</Link>
                <Link className="Link" to="/blogs">Blogs</Link>
                <Link className="Link" to="/connect">Connect</Link>
                <ToggleButton></ToggleButton>
                <button onClick={onLogout}>Logout</button>
            </nav>
        </div>
    )
}

export default Header

