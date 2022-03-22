import React from "react";
import {Link, NavLink, useNavigate } from "react-router-dom";
import pic from './logo/m.png'
import './App.css'
const Navbar =()=>{
    return(
        <>
        <section className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                <img src={pic} alt="" width="70px" height="60px" className="navpic"/>
                    <Link to='/' className="navbar-brand">mobashir</Link>
                    <div className="navbar-collapse collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active">home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link">about</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/service' className="nav-link">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link">contact</Link>
                            </li>
                        </ul>

                    </div>
                    
                    
                </nav>
                </div>
        </section>
    </>
)
}
export default Navbar