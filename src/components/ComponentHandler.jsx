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


import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthToggle from './AuthToggle/AuthToggle'; // New component for toggling between Login and SignUp
import Practice from './Practice/Practice';
import NoPage from './NoPage';
import Layout from './Layout';
import Connect from './Connect/Connect';
import Blogs from './Blogs/Blogs';

function ComponentHandler() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLoginSuccess = () => {
        setIsAuthenticated(true);
    };

    return (
        // <BrowserRouter>
            <Routes>
                {/* Show AuthToggle if not authenticated */}
                {!isAuthenticated ? (
                    <Route path="*" element={<AuthToggle onLoginSuccess={handleLoginSuccess} />} />
                ) : (
                    <Route path="/" element={<Layout />}>
                        {/* Authenticated routes */}
                        <Route path="practice" element={<Practice tech="React" />} />
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
