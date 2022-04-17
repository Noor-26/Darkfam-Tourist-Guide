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

      
    return (
        <div  className="form-container" >
            <form className="border p-5">
                <h3>Login</h3>
                <div className="d-flex form-field">
                   
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="mb-3 py-1 px-5" />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="mb-3 py-1 px-5" />
                   

                    <div className="text-center">
                        <button className="py-1 mb-3  form-btn">Login</button>
                    </div> 

                    <p>Need an account ? <Link to='/register' className="form-link">Sign up</Link> </p>
                    
                </div>
                <SocialLogin/> 
            </form>
        </div>
    );
};

export default Login;