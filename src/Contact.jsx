
import React, { useState } from 'react';
import './App.css'
const Contact = () =>{
    const [data,setData]=useState({
        fullname:'',
        phone:'',
        email:'',
        msg:''
    })
    const inputEvent=(event)=>{
        const {name,value}=event.target
        setData((preval)=>{
            return{
                ...preval,
                [name]:value
            }
        })
    };
    const submitForm=(e)=>{
        e.preventDefault();
        alert(`my name is ${data.fullname} , my phone number is ${data.phone} ,and my email is ${data.email} 😃${data.msg} `)
    };
    return(
        
        <>
            <div className='my-5'>
                <h1 className='text-center'>contact us</h1>
            </div>
            <div className='container contact-div'>
                <div className='row'>
                    <div className='col-md-6 col-6 mx-auto'>
                        <form onSubmit={submitForm}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">enter your full name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={inputEvent} placeholder='enter your name'/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={inputEvent} placeholder="mobile number"/>
                            </div>
                             <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={inputEvent} placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name='msg' value={data.msg} onChange={inputEvent} rows="3"></textarea>
                            </div>
                            <div class="col-auto" >
                                <button type="submit" class="btn btn-primary mb-3"  >submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact