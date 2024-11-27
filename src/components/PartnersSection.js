import React from 'react';
import './PartnersSection.css';
import partnersBackground1 from '../assets/images/Рисунок1.png';
import partnersBackground2 from '../assets/images/Рисунок2.png';
import partnersBackground3 from '../assets/images/Рисунок3.png';
import partnersBackground4 from '../assets/images/Рисунок4.png';
import partnersBackground5 from '../assets/images/Рисунок5.png';
import partnersBackground6 from '../assets/images/Рисунок6.png';
import partnersBackground7 from '../assets/images/Рисунок7.png';
import partnersBackground8 from '../assets/images/Рисунок8.png';
import partnersBackground9 from '../assets/images/Рисунок12.png';

const partnersData = [
    {
        name: 'Росатом',
        logo: partnersBackground1,
        href: 'https://www.rosatom.ru/index.html'
    },
    {
        name: 'Сбер',
        logo: partnersBackground2,
        href: 'https://www.sberbank.ru'
    },
    {
        name: 'Администрация Томской области',
        logo: partnersBackground3,
        href: 'https://tomsk.gov.ru/'
    },
    {
        name: 'Ням-Ням',
        logo: partnersBackground4,
        href: 'https://nyam-nyam.me/'
    },
    {
        name: 'Sava',
        logo: partnersBackground5,
        href: 'https://tpksava.ru/'
    },
    {
        name: 'Роснефть',
        logo: partnersBackground6,
        href: 'https://www.rosneft.ru/'
    },
    {
        name: 'Томское пиво',
        logo: partnersBackground7,
        href: 'https://tomskbeer.ru/'
    },
    {
        name: 'Академия управления WINFbd',
        logo: partnersBackground8,
        href: 'https://winbd.ru/'
    },
    {
        name: 'Level Up',
        logo: partnersBackground9,
        href: 'https://club-level-up.ru/'
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
                            <p><a href={partner.href} className='partner-a'>{partner.name}</a> </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
