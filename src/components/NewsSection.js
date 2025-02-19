import React from 'react';
import './NewsSection.css';
import newsImage from '../assets/images/news.jpg'; // Путь к вашему изображению

const newsData = [
    {
        title: 'Предлагаем размещение',
        description: 'Санаторий-профилакторий ТПУ, ул. Усова д. 13\nСтоимость размещения: 700 руб./сутки на человека'
    }
];

const formatTextWithNewLines = (text) => {
    return text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;

