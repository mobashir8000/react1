import React from 'react';
import Common from './Common';
import img from '../src/logo/laptop.jpg';
const About = ()=>{
    return(
        <>
        <Common name='welcome to about page ....!'
                imgsrc={img}
                visit='/contact'
                btname='contact now'
        />

        </>
    )
}
export default About