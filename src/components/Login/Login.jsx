import React, { useState } from "react";
import ComponentHandler from "../ComponentHandler";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [formErrors, setFormErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

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
            setSubmitted(true);
            console.log("Login successful:", formData);
            // Proceed with login process (e.g., API call)
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className="login-form">
            {submitted ? (
                // <h2>Login Successful!</h2>
                <ComponentHandler></ComponentHandler>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
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
                        />
                        {formErrors.password && <p className="error">{formErrors.password}</p>}
                    </div>

                    <button type="submit">Login</button>
                </form>
            )}
        </div>
    );
};

export default Login;
