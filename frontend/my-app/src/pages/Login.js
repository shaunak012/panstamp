import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="auth-form">
            <h2>Login</h2>
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
}

export default Login;
