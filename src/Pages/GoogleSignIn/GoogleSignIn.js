import React from 'react';
import auth from '../../firebase.Init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogo from '../../Assets/google.png'

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location?.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    let errorElement;
    if (error)
        errorElement = <p className='text-danger'>Error:{error?.message}</p>



    return (
        <div className='h-screen'>
            {errorElement}
            <div className="google-logo">
                <button onClick={() => signInWithGoogle()} className='d-flex align-items-center justify-content-between google-button'>
                    <img style={{}} src={GoogleLogo} alt="" />
                    <span className='google-text fw-bold'>Sign In with google</span>
                </button>
            </div>
        </div>

    );
};

export default GoogleSignIn;