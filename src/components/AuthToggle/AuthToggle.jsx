import React, { useState } from 'react';
import Login from './../Login/Login';
import SignUp from './../SignUp/SignUp';
import "./AuthToggle.css"

const AuthToggle = ({ onLoginSuccess }) => {
    const [isLogin, setIsLogin] = useState(true); // `true` for login view, `false` for sign-up view

    const handleToggle = () => {
        setIsLogin(!isLogin); // Toggle between login and sign-up
    };

    return (
        <div className="auth-toggle">
            <div className="auth-box">
                <div className="auth-toggle-buttons">
                    <button
                        className={isLogin ? "active" : ""}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={!isLogin ? "active" : ""}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Render Login or SignUp component based on the `isLogin` state */}
                <div className="auth-form">
                    {isLogin ? (
                        <Login onLoginSuccess={onLoginSuccess} />
                    ) : (
                        <SignUp />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthToggle;
