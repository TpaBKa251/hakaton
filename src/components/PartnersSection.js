import React from 'react';
import './PartnersSection.css';
import partnersBackground1 from '../assets/images/partners/Rrosatom.png';
import partnersBackground3 from '../assets/images/partners/Администрация Томска.png';
import partnersBackground4 from '../assets/images/partners/Оранжевое лого.png';
import partnersBackground8 from '../assets/images/partners/Risunok8.png';
import partnersBackground10 from '../assets/images/partners/Stolovka.png';
import partnersBackground13 from '../assets/images/partners/Sibur_logo.png';
import partnersBackground15 from '../assets/images/partners/logo mlp.png';
import partnersBackground16 from '../assets/images/partners/Надпись 2.png';
import partnersBackground17 from '../assets/images/partners/alfa-bank-logo-red.png';
import rgd from '../assets/images/partners/ржд.png';
 


const partnersData = [
    {
        name: 'Администрация города Томска',
        logo: partnersBackground3,
        href: 'https://admin.tomsk.ru/'
    },
    {
        name: 'Альфа банк',
        logo: partnersBackground17,
        href: 'https://alfabank.ru/?ysclid=mnigvd4c1d80575011'
    },
    {
        name: 'Ням-Ням',
        logo: partnersBackground4,
        href: 'https://nyam-nyam.me/'
    },
    {
        name: 'СИБУР',
        logo: partnersBackground13,
        href: 'https://www.sibur.ru/TomskNeftehim/'
    },
    {
        name: 'MakeLove',
        logo: partnersBackground15,
        href: 'https://makelovepizza.ru/tomsk'
    },
    {
        name: 'Бочкари',
        logo: partnersBackground16,
        href: 'https://www.google.com/url?q=https://bochkari.ru/?ysclid%3Dmnigmyt5rd296068200&sa=D&source=editors&ust=1775729069362679&usg=AOvVaw0x3X9JPds6crxJsGCn2BU9'
    },
    {
        name: 'ВИН БИЗНЕС РЕШЕНИЯ',
        logo: partnersBackground8,
        href: 'https://winbd.ru/'
    },
    {
        name: 'В главном',
        logo: partnersBackground10,
        href: 'https://yandex.ru/maps/org/stolovaya/1141781494/?ll=84.950164%2C56.465391&z=17'
    },
    {
        name: 'РЖД',
        logo: rgd,
        href: 'https://zszd.rzd.ru/#'
    },
    {
        name: 'Росатом',
        logo: partnersBackground1,
        href: 'https://www.rosatom.ru/index.html'
    },
    // {
    //     name: 'Сбер',
    //     logo: partnersBackground2,
    //     href: 'https://www.sberbank.ru'
    // },
    // {
    //     name: 'Sava',
    //     logo: partnersBackground5,
    //     href: 'https://tpksava.ru/'
    // },
    // {
    //     name: 'Томский инструментальный завод',
    //     logo: partnersBackground14,
    //     href: 'http://tiz.ru/'
    // },
    // {
    //     name: 'Роснефть',
    //     logo: partnersBackground6,
    //     href: 'https://www.rosneft.ru/'
    // },
    // {
    //     name: 'Черноголовка',
    //     logo: chernogolovka,
    //     href: 'https://chernogolovka.com/'
    // },

    // {
    //     name: 'Любятово',
    //     logo: lubatovo,
    //     href: 'https://chernogolovka.com/'
    // },
    // {
    //     name: 'Союз машиностроителей России',
    //     logo: partnersBackground11,
    //     href: 'https://soyuzmash.ru/regional-offices/tomskoe-regionalnoe-otdelenie/'
    // },
    // {
    //     name: 'Микран',
    //     logo: partnersBackground12,
    //     href: 'https://www.micran.ru/'
    // },
    // {
    //     name: 'Томскэнергосбыт',
    //     logo: tomskEnergoSbit,
    //     href: 'https://tomskenergosbyt.ru/'
    // },
    // {
    //     name: 'Томская генерация',
    //     logo: interrao,
    //     href: 'https://energo.tom.ru/'
    // }
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
