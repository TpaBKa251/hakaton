import React from 'react';
import './PartnersSection.css';
import partnersBackground from '../assets/images/partners.jpg'; // Путь к изображению

const partnersData = [
    {
        name: 'Компания А',
        logo: 'https://cache3.youla.io/files/images/780_780/5b/29/5b29166df2b23360a605dbac.jpg'
    },
    {
        name: 'Компания Б',
        logo: 'https://avatars.mds.yandex.net/i?id=4464c552332e75bf4b667aa3b417d9c6_l-5232852-images-thumbs&n=13'
    },
    {
        name: 'Компания В',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_the_Group_of_77.svg/2560px-Flag_of_the_Group_of_77.svg.png'
    }
];

const PartnersSection = () => {
    return (
        <section className="partners-section">
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
