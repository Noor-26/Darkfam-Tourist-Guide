import React from 'react';
import  { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      
      const emailRef = useRef()
      const passwordRef = useRef()

      const handleSubmit = event =>{
          event.preventDefault()
          const email = emailRef.current.value
          const password = passwordRef.current.value
          createUserWithEmailAndPassword(email, password)
          console.log("user sent")
      }

    return (
        <div  className="form-container" >
            <form className="border p-5" onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div className="d-flex form-field">
                   
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="mb-3 py-1 ps-1  input-field"    ref={emailRef} />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="mb-3 py-1 ps-1 pe-5 input-field  " ref={passwordRef} />
                   

                    <div className="text-center">
                        <button className="py-1 mb-3  form-btn">Login</button>
                    </div> 

                    <p>Need an account ? <Link to='/register' className="form-link">Sign up</Link> </p>
                    
                </div>
            </form>
                <SocialLogin/> 
        </div>
    );
};

export default Login;