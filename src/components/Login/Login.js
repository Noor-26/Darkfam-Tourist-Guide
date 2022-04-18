import React from 'react';
import  { useRef } from 'react';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      let errorElement;
      
      const emailRef = useRef()
      const passwordRef = useRef()

      const handleSubmit = event =>{
          event.preventDefault()
          const email = emailRef.current.value
          const password = passwordRef.current.value
          signInWithEmailAndPassword(email, password)
          console.log("user sent")
      }
      const navigate = useNavigate()

    const location = useLocation()
    let from = location.state?.from?.pathname || '/'

      if(error){
        errorElement = <p className="text-danger error-text">Error : {error?.message}</p>
    }

    if(user){
        navigate(from,{replace:true})
      }
    return (
        <div  className="form-container" >
            <div className="border p-5">
            <form  onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div className="d-flex form-field">
                   
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="mb-3 py-1 ps-1  input-field"    ref={emailRef} required/>
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="mb-3 py-1 ps-1 pe-5 input-field" ref={passwordRef} required/>
                   

                    <div className="text-center">
                        <button className="py-1 mb-3  form-btn">Login</button>
                    </div> 
                    {errorElement}
                    <p>Need an account ? <Link to='/register' className="form-link">Sign up</Link> </p>
                    
                </div>
            </form>
                <SocialLogin/> 
                </div>
        </div>
    );
};

export default Login;