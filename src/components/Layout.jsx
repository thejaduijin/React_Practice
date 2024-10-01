import React, { useState } from 'react'
import Header from './Header/Header'
import { Outlet } from "react-router-dom";
// import Sidebar from './Sidebar';

function Layout() {
    const [toggle, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!toggle);
    };

    return (
        <div className={toggle ? "DarkMode" : "LightMode"}>
            <Header handleToggle={handleToggle}></Header>
            <Outlet></Outlet>
            {/* <Sidebar></Sidebar> */}
        </div>
    )
}

export default Layout
