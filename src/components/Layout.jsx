import React, { useContext } from 'react'
import Header from './Header/Header'
import { Outlet } from "react-router-dom";
import { ThemeContext } from './ContextApi/ContextApi';
import Sidebar from './Sidebar/Sidebar';

function Layout() {
    const theme = useContext(ThemeContext);

    return (
        <div className={theme}>
            <Header ></Header>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    )
}

export default Layout
