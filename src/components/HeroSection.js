import React from 'react';
import './HeroSection.css';
import kot from '../assets/images/kot (1) (1).png'; // Путь к вашему изображению
import tpu from '../assets/images/TPU.svg';
import bh from '../assets/images/BH2_copy.svg';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-images">
                <img src={tpu} alt="ТПУ" className="hero-image"/>
                <img src={kot} alt="Кот" className="hero-image"/>
                <img src={bh} alt="BH" className="hero-image"/>
            </div>
            <div className="hero-content">
                <h2>Всероссийский предпринимательский хакатон</h2>
                <h1>Бизнес-кот</h1>
                <p>18 - 20 марта 2025</p>
                <p>Прием заявок до 8 марта 2025</p>
            </div>
        </section>

    );
};

export default HeroSection;
