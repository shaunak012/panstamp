import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
    const navigate = useNavigate();

    // Handlers to navigate to login and sign-up pages
    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to the Official Stamp Trading Platform</h1>
                    <p>Explore, Buy, and Trade Authentic Stamps</p>
                    <button>Explore Stamps</button>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <h2>About Us</h2>
                <p>This platform is managed by the Government of India to facilitate the buying and trading of stamps.</p>
            </section>

            {/* Services Section */}
            <section id="services" className="services">
                <h2>Our Services</h2>
                <ul>
                    <li>Stamp Selling</li>
                    <li>Stamp Trading</li>
                    <li>Authenticity Verification</li>
                </ul>
            </section>

            {/* Footer Section */}
            <footer className="footer" style={{width:"100vw",position:"absolute", bottom:0}}>
                <p>&copy; 2024 Government of India | All Rights Reserved</p>
                <ul>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Home;
