import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import '../Login/Login.css'
import Loading from '../Shared/Loading/Loading';

const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const confirmPassRef = useRef()
      const emailRef = useRef()
      const passwordRef = useRef()

      let errorElement;
      const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        createUserWithEmailAndPassword(email, password,{sendEmailVerification:true})

    }
    if(error){
        errorElement = <p className="text-danger error-text">Error : {error?.message}</p>
    }
    if(loading){
        return <Loading/>
    }
    if(user){
        navigate('/home')
    }

    return (
        <div className="form-container" >
             <form className="border p-5" onSubmit={handleSubmit}>
                <h3>Sign up</h3>
                <div className="d-flex form-field">
                   
                    <label htmlFor="email">Email</label>
                    <input type="email" required name="email" id="email" className="mb-3 py-1 ps-1  input-field"    ref={emailRef} />
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" required name="password" id="password" className="mb-3 py-1 ps-1 pe-5 input-field  " ref={passwordRef} />

                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" required name="password" id="password" className="mb-3 py-1 ps-1 pe-5 input-field  " ref={confirmPassRef} />
                   
                    <div className="text-center">
                        <button className="py-1 mb-3  form-btn">Sign up</button>
                    </div> 
                    {errorElement}

                    <p>Already a user? <Link to='/login' className="form-link">Login here</Link> </p>
                    
                </div>
            </form>
                <SocialLogin/> 
        </div>
    );
};

export default Register;