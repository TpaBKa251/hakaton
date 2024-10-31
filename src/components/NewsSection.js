import React from 'react';
import './NewsSection.css';
import newsImage from '../assets/images/news.jpg'; // Путь к вашему изображению

const newsData = [
    {
        title: 'Новость 1: Открытие Хакатона',
        description: 'Хакатон начинается с торжественного открытия и вступительных речей.'
    },
    {
        title: 'Новость 2: Подведение итогов первого дня',
        description: 'Участники поделились своими проектами, и уже можно увидеть первые результаты.'
    },
    {
        title: 'Новость 3: Заключительная церемония и награждение',
        description: 'Победители будут объявлены на заключительной церемонии.'
    }
];

const NewsSection = () => {
    return (
        <section className="news-section" style={{ backgroundImage: `url(${newsImage})` }}>
            <div className="news-content">
                <h2>Последние новости</h2>
                <div className="news-list">
                    {newsData.map((news, index) => (
                        <div key={index} className="news-item">
                            <h3>{news.title}</h3>
                            <p>{news.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
