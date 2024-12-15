import React from 'react';
import './Partners.css';
import partnersBackground1 from '../assets/images/Рисунок1.png';
import partnersBackground2 from '../assets/images/Рисунок2.png';
import partnersBackground3 from '../assets/images/томск.png';
import partnersBackground4 from '../assets/images/Рисунок4.png';
import partnersBackground5 from '../assets/images/Рисунок5.png';
import partnersBackground6 from '../assets/images/роснефть.png';
import partnersBackground7 from '../assets/images/Рисунок7.png';
import partnersBackground8 from '../assets/images/Рисунок8.png';
import partnersBackground9 from '../assets/images/Рисунок12.png';
import partnersBackground10 from '../assets/images/TPU-logo.png';
import partnersBackground11 from '../assets/images/союз машиностроителей.png';
import partnersBackground12 from '../assets/images/микран.png';
import Navbar from "./NavBar";

const partnersData = [
    {
        name: 'ГОСКОРПОРАЦИЯ "РОСАТОМ"',
        logo: partnersBackground1,
        href: 'https://www.rosatom.ru/index.html',
        description: 'Росатом — российская государственная корпорация по атомной энергии, лидер в области ядерных технологий'
    },
    {
        name: 'ПАО "Сбербанк России"',
        logo: partnersBackground2,
        href: 'https://www.sberbank.ru',
        description: 'Сбер — крупнейший банк России, предоставляющий широкий спектр финансовых услуг'
    },
    {
        name: 'Администрация города Томска',
        logo: partnersBackground3,
        href: 'https://admin.tomsk.ru/',
        description: 'Администрация города Томска — орган исполнительной власти, реализующий государственные программы региона'
    },
    {
        name: 'ООО "НЯМ-НЯМ"',
        logo: partnersBackground4,
        href: 'https://nyam-nyam.me/',
        description: 'Ням-Ням — кафе вкусной и качественной еды в Томске'
    },
    {
        name: 'ООО ТПК "САВА"',
        logo: partnersBackground5,
        href: 'https://tpksava.ru/',
        description: 'Sava — крупная торгово-промышленная компания, известная своим производством продуктов питания'
    },
    {
        name: 'ПАО "НК "РОСНЕФТЬ"',
        logo: partnersBackground6,
        href: 'https://www.rosneft.ru/',
        description: 'Роснефть — одна из крупнейших нефтегазовых компаний мира'
    },
    {
        name: 'ОАО "Томское пиво"',
        logo: partnersBackground7,
        href: 'https://tomskbeer.ru/',
        description: 'Томское пиво — известный производитель высококачественного пива и напитков'
    },
    {
        name: 'ООО "ВИН БИЗНЕС РЕШЕНИЯ"',
        logo: partnersBackground8,
        href: 'https://winbd.ru/',
        description: 'WINFbd — академия управления, предоставляющая обучение и тренинги для профессионалов'
    },
    {
        name: 'Столовая "В главном" ООО "Энерго-тракт"',
        logo: partnersBackground10,
        href: 'https://yandex.ru/maps/org/stolovaya/1141781494/?ll=84.950164%2C56.465391&z=17',
        description: 'В главном — столовая с доступными ценами и домашней кухней в главном корпусе Томского Политехнического Университета'
    },
    {
        name: 'ОООР "СоюзМаш России"',
        logo: partnersBackground11,
        href: 'https://soyuzmash.ru/regional-offices/tomskoe-regionalnoe-otdelenie/',
        description: 'Союз машиностроителей России — организация, поддерживающая машиностроительные предприятия'
    },
    {
        name: 'АО "НПФ "МИКРАН"',
        logo: partnersBackground12,
        href: 'https://www.micran.ru/',
        description: 'Микран — ведущий разработчик и производитель радиоэлектронного оборудования'
    },
    {
        name: 'Level Up',
        logo: partnersBackground9,
        href: 'https://club-level-up.ru/',
        description: 'Level Up — мужской клуб предпринимателей'
    }
];

const PartnersSection = () => {
    return (
        <section className="partners-wrapper">
            <Navbar className={`navbar visible`} />
            <div className="partners-content-new">
                <h2 className="partners-header">Наши партнёры</h2>
                {partnersData.map((partner, index) => (
                    <div key={index} className="partner-item-new">
                        <img
                            src={partner.logo}
                            alt={`${partner.name} Логотип`}
                            className="partner-logo-new"
                        />
                        <div className="partner-details">
                            <h3 className="partner-name">{partner.name}</h3>
                            <p className="partner-description">{partner.description}</p>
                            <a
                                href={partner.href}
                                className="partner-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Узнать больше
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PartnersSection;
