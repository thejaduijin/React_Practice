import React, { useState } from "react";
import ComponentHandler from "../ComponentHandler";
import './Login.css';  // Import the CSS file for styling
import { useEffect } from "react";

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [formErrors, setFormErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");  // To handle error messages


    // way to unmount
    
    // useEffect(() => {
    //     return () => {
    //         console.log("cleaned up");
    //     };
    // }, [submitted]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let errors = {};

        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }

        if (!formData.password) {
            errors.password = "Password is required";
        }

        return errors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            // Send login data to the server
            fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message === 'Login successful!') {
                        setSubmitted(true);
                        console.log("Login success:", data);
                    } else {
                        setErrorMessage(data.message);  // Show error message if login fails
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else {
            setFormErrors(errors);
        }
    };


    return (
        <div>
            {submitted ? (
                <ComponentHandler></ComponentHandler>
            ) : (
                <div className="login-container">
                    <div className="login-box">
                        <form onSubmit={handleSubmit}>
                            <h2>LOGIN</h2>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={formErrors.email ? 'error-input' : ''}
                                />
                                {formErrors.email && <p className="error">{formErrors.email}</p>}
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={formErrors.password ? 'error-input' : ''}
                                />
                                {formErrors.password && <p className="error">{formErrors.password}</p>}
                            </div>

                            <button type="submit" className="login-btn">Login</button>

                            {/* Display error message for invalid login */}
                            {errorMessage && <p className="error">{errorMessage}</p>}
                        </form>

                        {/* <p>New Here Go to SignUp</p> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
