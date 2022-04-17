import './SocialLogin.css'
import google from '../../../images/google.png'

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    return (
        <div>
            <div className="d-flex align-items-center">
                <div className="line"></div>
                <p>or</p>
                <div className="line"></div>
            </div>
            <div className="buttons">
                <button className="btn border px-5 rounded-pill mx-auto mb-3"><img src={google} className="icon " alt="" onClick={() => signInWithGoogle()} /> Google Sign in</button>
            </div>
        </div>
    );
};

export default SocialLogin;