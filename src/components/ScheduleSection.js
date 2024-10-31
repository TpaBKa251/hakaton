import React from 'react';
import './ScheduleSection.css';
import scheduleImage from '../assets/images/schedule.jpg'; // Путь к вашему изображению

const ScheduleSection = () => {
    return (
        <section className="schedule" style={{ backgroundImage: `url(${scheduleImage})` }}>
            <div className="schedule-content">
                <h2>Программа</h2>
                <ul>
                    <li><strong>День 1:</strong> Вступительные речи и регистрация</li>
                    <li><strong>День 2:</strong> Основной этап Хакатона</li>
                    <li><strong>День 3:</strong> Презентация и награждение</li>
                </ul>
            </div>
        </section>
    );
};

export default ScheduleSection;
