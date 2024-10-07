import React from 'react'
import Practice from './Practice/Practice'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './NoPage';
import Layout from './Layout';
import Connect from './Connect/Connect';
import Blogs from './Blogs/Blogs';
function ComponentHandler() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Practice tech="React" />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="connect" element={<Connect />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ComponentHandler
