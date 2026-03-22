import React from 'react';
import './HeroSection.css';

import kot_big from '../assets/images/Dlya_polozhenia_1 (1) (1).webp'

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-images">
                {/*<img src={tpu} alt="ТПУ" className="hero-image"/>*/}
                {/*<img src={kot} alt="Кот" className="hero-image"/>*/}
                {/*<img src={bh} alt="BH" className="hero-image"/>*/}
                <img src={kot_big} alt="Кот" className="hero-image" />
            </div>
            <div className="hero-content">
                <h2>Всероссийский предпринимательский хакатон</h2>
                <h1>Бизнес–кот</h1>
                <p className="data">14 – 16 апреля 2026</p>
                <p className="request">Прием заявок до 6 апреля 2026</p>
                <a href="https://forms.gle/fE2cNBDmo8Yty8pJ9" className="register-button2" target="_blank"
                   rel="noopener noreferrer">Зарегистрироваться</a>
            </div>
        </section>

    );
};

export default HeroSection;
