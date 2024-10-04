import React, { useContext } from 'react'
import Header from './Header/Header'
import { Outlet } from "react-router-dom";
import { ThemeContext } from './ContextApi/ContextApi';
// import Sidebar from './Sidebar';

function Layout() {
    const theme = useContext(ThemeContext);

    return (
        <div className={theme}>
            <Header ></Header>
            <Outlet></Outlet>
            {/* <Sidebar></Sidebar> */}
        </div>
    )
}

export default Layout
