import React from 'react';
import {Link} from 'react-router-dom';
import './NewsSection.css';

const newsData = [
    {
        title: 'Информационное письмо',
        description: 'Ознакомьтесь с информационным письмом о хакатоне Бизнес–кот. Участие бесплатно!',
        link: '/doc', // Ссылка на страницу новостей
        file: '//hakaton-zeta.vercel.app/informatsionnoe_pismo_2026.pdf'
    },
    {
        title: 'Программа хакатона',
        description: 'Ознакомьтесь с программой хакатона Бизнес–кот. Вы узнаете, что Вас ждет в каждый из дней проведения, а также Вы сможете ознакомиться с правилами, критериями и составом жюри',
        link: '/program', // Ссылка на страницу новостей
        file: '//hakaton-zeta.vercel.app/Programma_K_kopp.pdf'
    },
    {
        title: 'Предлагаем размещение',
        isAccommodation: true,
        price: '700 руб./сутки на человека'
    }
];

const formatTextWithNewLines = (text) => {
    return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br/>
        </React.Fragment>
    ));
};

const NewsSection = () => {
    return (
        <section className="news-section">
            <div className="news-content">
                <h2>Важная информация</h2>
                <div className="news-list">
                    {newsData.map((news, index) => (
                        <div key={index} className="news-item">
                            <h3>{news.title}</h3>

                            {news.isAccommodation ? (
                                <p>
                                    <a
                                        href="https://kurort.minzdrav.gov.ru/search/2397"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="news-link"
                                    >
                                        Санаторий-профилакторий ТПУ
                                    </a>
                                    , ул. Усова д. 13
                                    <br />
                                    Стоимость размещения: {news.price}
                                </p>
                            ) : (
                                <p>{news.description && formatTextWithNewLines(news.description)}</p>
                            )}

                            <p className="news-text">
                                {news.link && (
                                    <Link to={news.link} target="_blank" className="news-link">
                                        Читать подробнее →
                                    </Link>
                                )}
                            </p>

                            <p className="news-text">
                                {news.file && (
                                    <a
                                        href={news.file}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="news-link"
                                    >
                                        📄 Открыть/скачать документ
                                    </a>
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
