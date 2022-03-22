import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import About from './About';
import Home from './Home';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';

const App =()=>{
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/service' element={<Service/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </>
    )

}
export default App