import React from "react";
import { NavLink } from "react-router-dom";
import img from '../src/logo/money.jpg';
import './App.css';
const Card =(props)=>{
    return(
        <>
        <div className="col-md-4">
            <div className="card">
                <img src={props.imgsrc} className="card-img-top img" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
            </div>
            </div>
            </div>
                    </>
    )
}
export default Card