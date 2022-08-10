import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import googleIcon from '../../images/google-icon.svg';
import './Login.css';

const Login = () => {

    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location?.state?.from || "/";

    // handle google sign in
    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(() =>{
            navigate(redirect_uri);
        })
    };

    return (
        <div className="login">
            <h1>Login With</h1>
            <button className="google-login-btn" onClick={handleGoogleLogin}>
                <img className="google-icon" src={googleIcon} alt="" />
                <span>Continue With Google</span>
            </button>
        </div>
    );
};

export default Login;