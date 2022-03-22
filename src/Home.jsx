
import React from 'react';
import img from '../src/logo/money.jpg';
import './App.css';
import Common from './Common';

const Home =()=>{
    return(
        <>
         <Common
             name='grow your business with'
                imgsrc={img}
                visit='/service'
                btname='go to service'
         />
        </>
    )
}
export default Home