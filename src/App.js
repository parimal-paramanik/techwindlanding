import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/libs/@mdi/font/css/materialdesignicons.min.css';
import Contact from './pages/contact/Contact';
import IndexConsulting from './pages/index/indexConsulting';
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<IndexConsulting />} />
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}
