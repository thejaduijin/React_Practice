import React, { useContext, useState } from 'react'
import Header from './Header/Header'
import { Outlet } from "react-router-dom";
import { ThemeContext } from './ContextApi/ContextApi';
// import Sidebar from './Sidebar';

function Layout() {
    const theme = useContext(ThemeContext);
    const [toggle, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!toggle);
    };

    return (
        <div className={theme}>
            <Header handleToggle={handleToggle}></Header>
            <Outlet></Outlet>
            {/* <Sidebar></Sidebar> */}
        </div>
    )
}

export default Layout
