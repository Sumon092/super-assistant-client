import React from 'react';
import auth from '../../firebase.Init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogo from '../../Assets/google.png'
import LoginImage from '../../Assets/Mobile-login-Cristina.jpg'

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
        <>
            <div className='h-screen flex justify-center items-center'>


                <div>
                    <img style={{ width: '300px' }} src={LoginImage} alt="" />
                </div>
                <div >
                    <button onClick={() => signInWithGoogle()} className='btn btn-info ml-5 flex items-center justify-center google-button'>
                        <img style={{ width: '30px' }} src={GoogleLogo} alt="" />
                        <span className='font-bold text-xl ml-3 p-3'>Sign In with google</span>
                    </button>
                </div>

            </div>
            {errorElement}
        </>

    );
};

export default GoogleSignIn;