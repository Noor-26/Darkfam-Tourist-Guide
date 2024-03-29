import React, { useEffect } from 'react';
import  { useRef } from 'react';
import {  useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
      
      const emailRef = useRef()
      const passwordRef = useRef()

      const handleSubmit = event =>{
          event.preventDefault()
          const email = emailRef.current.value
          const password = passwordRef.current.value
          signInWithEmailAndPassword(email, password)
      }
      const navigate = useNavigate()

    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
      useEffect(() => {

          if(error ){
            toast(error?.message);
        }
       
      }, [error]) 
      
      if(loading ){
          return <Loading/>
      }

    if(user){
        navigate(from,{replace:true})
      }

      const  resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
          await sendPasswordResetEmail(email);
          toast('Check your email');
      }
      else{
        toast("Enter your email to reset password")
      }
    }

    return (
        <div  className="form-container mt-5" >
            <div className="border p-4  p-md-5">
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

                    <p>Need an account ? <Link to='/register'   className="form-link">Sign up</Link> </p>
                    <p>Forget your password ? <button onClick={resetPassword} className="btn " style={{color:"crimson"}}>Reset Password</button></p>
                    
                </div>
            </form>
                <SocialLogin/> 
                <ToastContainer/>
                </div>
        </div>
    );
};

export default Login;