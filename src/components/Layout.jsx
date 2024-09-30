import React from 'react'
import Header from './Header'
import { Outlet } from "react-router-dom";
// import Sidebar from './Sidebar';

function Layout() {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Sidebar></Sidebar> */}
        </div>
    )
}

export default Layout
