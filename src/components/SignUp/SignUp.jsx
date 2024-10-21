import React, { useState } from "react";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
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

        if (!formData.name) {
            errors.name = "Name is required";
        }

        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email address is invalid";
        }

        if (!formData.password) {
            errors.password = "Password is required";
        } else if (formData.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
            setSubmitted(true);
            console.log("Form submitted successfully:", formData);
            // Proceed with form submission (e.g., API call)
            <></>
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className="signup-form">
            {submitted ? (
                <h2>Sign-up Successful!</h2>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Sign Up</h2>

                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {formErrors.name && <p className="error">{formErrors.name}</p>}
                    </div>

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

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        {formErrors.confirmPassword && (
                            <p className="error">{formErrors.confirmPassword}</p>
                        )}
                    </div>

                    <button type="submit">Sign Up</button>
                </form>
            )}
        </div>
    );
};

export default SignUp;
