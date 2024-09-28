import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    // Function to validate email format
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Handler to check both email and password validity
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }

        // Reset the tooltip on input change
        setShowTooltip(false);
        // Check if email is valid and password has at least 8 characters
        setIsValid(validateEmail(email) && password.length >= 8);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            // Redirect to /home1 on successful login
            navigate('/home1');
        } else {
            // Show tooltip when form is invalid
            setShowTooltip(true);
        }
    };

    return (
        <div className="auth-form" style={{ position: 'relative' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Password (min 8 characters):</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        required
                        minLength="8" // HTML5 validation
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {showTooltip && (
                <div className="tooltip" style={tooltipStyle}>
                    Please enter a valid email and a password with at least 8 characters.
                </div>
            )}
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
}

// Inline style for tooltip
const tooltipStyle = {
    position: 'absolute',
    top: '100px', // Adjust the position according to your layout
    left: '0',
    right: '0',
    margin: 'auto',
    padding: '10px',
    backgroundColor: '#ffcccc',
    color: '#cc0000',
    textAlign: 'center',
    borderRadius: '4px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    width: '80%',
};

export default Login;
