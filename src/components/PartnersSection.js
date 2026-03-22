import React from 'react';
import './PartnersSection.css';
import partnersBackground1 from '../assets/images/partners/Rrosatom.png';
import partnersBackground2 from '../assets/images/partners/Sber.png';
import partnersBackground3 from '../assets/images/partners/Администрация Томска.png';
import partnersBackground4 from '../assets/images/partners/Оранжевое лого.png';
import partnersBackground5 from '../assets/images/partners/ca2d361a7d63d66c3ff0fb96420e6569.png';
import partnersBackground6 from '../assets/images/partners/НИПИнефть.png';
import partnersBackground7 from '../assets/images/Рисунок7.png';
import partnersBackground8 from '../assets/images/partners/Risunok8.png';
import partnersBackground9 from '../assets/images/Рисунок12.png';
import partnersBackground10 from '../assets/images/partners/Stolovka.png';
import partnersBackground11 from '../assets/images/partners/soyuz_mashinostroiteley.png';
import partnersBackground12 from '../assets/images/partners/mikran.png';
import partnersBackground13 from '../assets/images/sibur.png';
import partnersBackground14 from '../assets/images/partners/TIZ.png';
import tomskEnergoSbit from '../assets/images/partners/512x512bb.png';
import lubatovo from '../assets/images/partners/Любятово.png';
import rgd from '../assets/images/partners/ржд.png';
import chernogolovka from '../assets/images/partners/черноголовка.png';
import interrao from '../assets/images/partners/img.png'


const partnersData = [
    {
        name: 'Администрация города Томска',
        logo: partnersBackground3,
        href: 'https://admin.tomsk.ru/'
    },
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
        name: 'СИБУР',
        logo: partnersBackground13,
        href: 'https://www.sibur.ru/TomskNeftehim/'
    },
    {
        name: 'Томский инструментальный завод',
        logo: partnersBackground14,
        href: 'http://tiz.ru/'
    },
    {
        name: 'Роснефть',
        logo: partnersBackground6,
        href: 'https://www.rosneft.ru/'
    },
    {
        name: 'Академия управления WINFbd',
        logo: partnersBackground8,
        href: 'https://winbd.ru/'
    },
    {
        name: 'В главном',
        logo: partnersBackground10,
        href: 'https://yandex.ru/maps/org/stolovaya/1141781494/?ll=84.950164%2C56.465391&z=17'
    },
    {
        name: 'Западно-Сибирская железная дорога',
        logo: rgd,
        href: 'https://zszd.rzd.ru/#'
    },
    {
        name: 'Черноголовка',
        logo: chernogolovka,
        href: 'https://chernogolovka.com/'
    },

    {
        name: 'Любятово',
        logo: lubatovo,
        href: 'https://chernogolovka.com/'
    },
    {
        name: 'Союз машиностроителей России',
        logo: partnersBackground11,
        href: 'https://soyuzmash.ru/regional-offices/tomskoe-regionalnoe-otdelenie/'
    },
    // {
    //     name: 'Микран',
    //     logo: partnersBackground12,
    //     href: 'https://www.micran.ru/'
    // },
    {
        name: 'Томскэнергосбыт',
        logo: tomskEnergoSbit,
        href: 'https://tomskenergosbyt.ru/'
    },
    {
        name: 'Томская генерация',
        logo: interrao,
        href: 'https://energo.tom.ru/'
    }
];

const PartnersSection = () => {
    return (
        <section className="partners-section">
            <div className="partners-content">
                <h2>Партнёры мероприятия</h2>
                <div className="partners-list">
                    {partnersData.map((partner, index) => (
                        <div key={index} className="partner-item">
                            <img src={partner.logo} alt={`${partner.name} Логотип`} className="partner-logo" />
                            <p><a href={partner.href} className='partner-a' target="_blank" rel="noopener noreferrer">{partner.name}</a> </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
