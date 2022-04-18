import './SocialLogin.css'
import google from '../../../images/google.png'
import {  useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import Loading from '../Loading/Loading';
import { useEffect } from 'react';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    
    useEffect(() => {
      
        if(error){
            toast(error)
        }
    }, [error])
    
   if(user){
navigate('/home')
   }
   if(loading){
       return <Loading/>
   }
   

    return (
        <div>
            <div className="d-flex align-items-center">
                <div className="line"></div>
                <p>or</p>
                <div className="line"></div>
            </div>
            <div className="buttons">
                <button className="btn border px-5 rounded-pill mx-auto mb-3" onClick={() => signInWithGoogle()}><img src={google} className="icon " alt=""  /> Google Sign in</button>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default SocialLogin;