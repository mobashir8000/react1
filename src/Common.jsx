import React from 'react';
import { Link } from 'react-router-dom';
import img from '../src/logo/money.jpg';
import './App.css';

const Common =(props)=>{
    return(
        <>
            <section id='Common' className='d-flex aline-itmes-center'>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-6'>
                            <h1 className='title mt-5 text-center'> {props.name} <strong>mobashir</strong> </h1>
                            <h2 className='description my-4 text-center'>we are the team of telented developer making websites</h2>
                            <div className='mt-5 text-center'>
                                <Link to={props.visit}> <button type="button" class="btn btn-primary">{props.btname}</button> </Link>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div>
                                <img src={props.imgsrc} className='img-fluid'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Common