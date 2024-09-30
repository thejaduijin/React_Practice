import React from 'react'
import { Link } from 'react-router-dom'
import ToggleButton from './ToogleButton/ToggleButton'
function Header() {
    return (
        <div style={{ backgroundColor: "black", width: "100%", height: "50px", color: "white" }}>
            <nav style={{ color: "white", display: "flex", justifyContent: "flex-end", gap: "25px", marginRight: "10px" }}>
                <Link className="Link" to="/">Practice</Link>
                <Link className="Link" to="/blogs">Blogs</Link>
                <Link className="Link" to="/connect">Connect</Link>
                <ToggleButton></ToggleButton>
            </nav>
        </div>
    )
}

export default Header

