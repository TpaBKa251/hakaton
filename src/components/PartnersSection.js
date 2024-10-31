import React from 'react';
import './PartnersSection.css';
import partnersBackground from '../assets/images/partners.jpg'; // Путь к изображению

const partnersData = [
    {
        name: 'Компания А',
        logo: 'https://sun1-13.userapi.com/s/v1/if1/KOV7FBj6tkFkMkFiuEAJuNrQSK2HzWxKPDxkIQsE38vMXekp9IfzF_8kz2LlCfZwRpiXJMve.jpg?size=842x842&quality=96&crop=0,0,842,842&ava=1'
    },
    {
        name: 'Компания Б',
        logo: 'https://avatars.mds.yandex.net/i?id=10e2fbc7e6cc94a788f5e8579f8a812880add050-5656190-images-thumbs&n=13'
    },
    {
        name: 'Компания В',
        logo: 'https://i.ytimg.com/vi/pZFZItMj3AY/maxresdefault.jpg'
    }
];

const PartnersSection = () => {
    return (
        <section className="partners-section" style={{ backgroundImage: `url(${partnersBackground})` }}>
            <div className="partners-content">
                <h2>Наши партнёры</h2>
                <div className="partners-list">
                    {partnersData.map((partner, index) => (
                        <div key={index} className="partner-item">
                            <img src={partner.logo} alt={`${partner.name} Логотип`} className="partner-logo" />
                            <p>{partner.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
