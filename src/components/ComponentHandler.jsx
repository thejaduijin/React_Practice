// import React from 'react'
// import Practice from './Practice/Practice'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NoPage from './NoPage';
// import Layout from './Layout';
// import Connect from './Connect/Connect';
// import Blogs from './Blogs/Blogs';
// function ComponentHandler() {

//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<Practice tech="React" />} />
//                     <Route path="blogs" element={<Blogs />} />
//                     <Route path="connect" element={<Connect />} />
//                     <Route path="*" element={<NoPage />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default ComponentHandler


import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthToggle from './AuthToggle/AuthToggle'; // New component for toggling between Login and SignUp
import Practice from './Practice/Practice';
import NoPage from './NoPage';
import Layout from './Layout';
import Connect from './Connect/Connect';
import Blogs from './Blogs/Blogs';

function ComponentHandler() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    // Check auth status on app load
    useEffect(() => {
        const authStatus = localStorage.getItem("isAuthenticated");
        if (authStatus === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
    };

    return (
        // <BrowserRouter>
        <Routes>
            {!isAuthenticated ? (
                <Route index element={<AuthToggle onLoginSuccess={handleLoginSuccess} />} />
            ) : (
                <Route path="/" element={<Layout onLogout={handleLogout} />}>
                    <Route index element={<Practice tech="React" />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="connect" element={<Connect />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            )}
        </Routes>
        // </BrowserRouter>
    );
}

export default ComponentHandler;


// {!isAuthenticated ? (
//     <Route index element={<Login onLoginSuccess={handleLoginSuccess} />} />
// ) : (
//     <Route path="/" element={<Layout onLogout={handleLogout} />}>
//         <Route index element={<Practice tech="React" />} />
//         <Route path="blogs" element={<Blogs />} />
//         <Route path="connect" element={<Connect />} />
//         <Route path="signup" element={<SignUp />} />
//         <Route path="*" element={<NoPage />} />
//     </Route>
// )}