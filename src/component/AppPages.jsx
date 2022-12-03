import React from 'react';
import { Route, Routes } from 'react-router-dom/dist';
import Home from "./Home";
import About from './About';
import Footer from "./Footer";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from './Navbar';

const AppPages = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Service />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
            {/* <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/service' element={<Service />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer /> */}
        </>
    )
}

export default AppPages