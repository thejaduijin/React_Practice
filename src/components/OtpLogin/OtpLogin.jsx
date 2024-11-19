import React, { useState } from 'react';

const OtpLogin = ({ onLoginSuccess }) => {
    const [phoneOrEmail, setPhoneOrEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1); // Step 1: Request OTP, Step 2: Verify OTP
    const [error, setError] = useState('');

    const handleRequestOtp = async () => {
        try {
            // Call your API to send OTP
            const response = await fetch('https://my-app-server-mu.vercel.app/api/request-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneOrEmail }),
            });
            const data = await response.json();
            console.log(data)
            if (response.ok) {
                setStep(2); // Move to OTP verification step
            } else {
                setError(data.message || 'Failed to send OTP. Try again.');
            }
        } catch (err) {
            setError('An error occurred while requesting OTP.');
        }
    };

    const handleVerifyOtp = async () => {
        try {
            // Call your API to verify OTP
            const response = await fetch('https://my-app-server-mu.vercel.app/api/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneOrEmail, otp }),
            });
            const data = await response.json();


            if (response.ok) {
                onLoginSuccess(); // Log the user in
            } else {
                setError(data.message || 'Invalid OTP. Try again.');
            }
        } catch (err) {
            setError('An error occurred while verifying OTP.');
        }
    };

    return (
        <div className="otp-login">
            {step === 1 ? (
                <div>
                    <h2>Login with OTP</h2>
                    <input
                        type="text"
                        placeholder="Enter phone/email"
                        value={phoneOrEmail}
                        onChange={(e) => setPhoneOrEmail(e.target.value)}
                    />
                    <button onClick={handleRequestOtp}>Request OTP</button>
                </div>
            ) : (
                <div>
                    <h2>Enter OTP</h2>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button onClick={handleVerifyOtp}>Verify OTP</button>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default OtpLogin;
