import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/images/main.jpg'; // Путь к вашему изображению

const HeroSection = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-content">
                <h1>Хакатон 2024</h1>
                <p>12 - 14 ноября 2024</p>
            </div>
        </section>
    );
};

export default HeroSection;
