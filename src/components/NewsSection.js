import React from 'react';
import {Link} from 'react-router-dom';
import './NewsSection.css';

const newsData = [
    {
        title: 'Информационное письмо',
        description: 'Ознакомьтесь с информационным письмом о хакатоне Бизнес-кот. Участие бесплатно!',
        link: '/doc', // Ссылка на страницу новостей
        file: '/Inf_pismo_biznes-kot.docx'
    },
    {
        title: 'Предлагаем размещение',
        description: 'Санаторий-профилакторий ТПУ, ул. Усова д. 13\nСтоимость размещения: 700 руб./сутки на человека'
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
                            <p>{formatTextWithNewLines(news.description)}</p>
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
                                        href={`//hakaton-zeta.vercel.app/Inf_pismo_biznes-kot.docx`}
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
