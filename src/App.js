import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/libs/@mdi/font/css/materialdesignicons.min.css';

import IndexConsulting from './pages/index/indexConsulting';
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Navigate to="/index" />} />
                <Route exact path="/index" element={<Index />} /> */}
                <Route exact path="/" element={<IndexConsulting />} />
            </Routes>
        </BrowserRouter>
    )
}
