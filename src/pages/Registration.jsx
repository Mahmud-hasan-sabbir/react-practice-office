import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import UseEffect from './UseEffect';


const Registration = () => {


    return (
        <>
         <Header />
        <div className='container'>
            <h1 style={{textAlign:"center",marginBottom:"-37px",marginTop:"30px"}}>Registration Form</h1>
        

            <form className="container" style={{ width: "50%" ,backgroundColor: "skyblue", height: "350px", padding: "50px",borderRadius: "10px"}}>
    
                <div className="mb-3">
                    <label for="exampleInputname" className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder='Enter your name' id="exampleInputname" aria-describedby="emailHelp" />
                   
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>

        <UseEffect />

       
        </>
    );
};

export default Registration;