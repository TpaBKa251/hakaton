import React, { useState, useEffect } from 'react';
import './HistorySection.css';
import historyImage1 from '../assets/images/хакатон 1.jpg';
import historyImage2 from '../assets/images/хакатон 2.jpg';
import historyImage3 from '../assets/images/хакатон 3.jpg';
import historyImage4 from '../assets/images/хакатон 4.jpg';
import historyImage5 from '../assets/images/хакатон 5.jpg';
import historyImage6 from '../assets/images/хакатон 6.jpg';
import historyImage7 from '../assets/images/хакатон 7.jpg';
import historyImage8 from '../assets/images/partners/Hacaton2025_1.jpg';
import historyImage9 from '../assets/images/partners/Hacaton2025_2.jpg';
import historyImage10 from '../assets/images/partners/Hacaton2025_3.jpg';
import historyImage11 from '../assets/images/partners/Hacaton2025_4.jpg';
import historyImage12 from '../assets/images/partners/Hacaton2025_5.jpg';
import historyImage13 from '../assets/images/partners/Hacaton2025_6.jpg';
import historyImage14 from '../assets/images/partners/IMG_6602.jpg';
import historyImage15 from '../assets/images/partners/IMG_6649.jpg';
import historyImage16 from '../assets/images/partners/IMG_6662.jpg';
import historyImage17 from '../assets/images/partners/IMG_6744.jpg';
import historyImage18 from '../assets/images/partners/IMG_6809.jpg';
import historyImage19 from '../assets/images/partners/IMG_6944.jpg';
import historyImage20 from '../assets/images/partners/IMG_7170.jpg';
import historyImage21 from '../assets/images/partners/IMG_7203.jpg';
import historyImage22 from '../assets/images/partners/IMG_7236.jpg';
import historyImage23 from '../assets/images/partners/IMG_7288.jpg';
import historyImage24 from '../assets/images/partners/IMG_7355.jpg';

const historyImages = [
    historyImage1, historyImage2, historyImage3, historyImage4,
    historyImage5, historyImage6, historyImage7, historyImage8,
    historyImage9, historyImage10, historyImage11, historyImage12, historyImage13, historyImage14, historyImage15, historyImage16, historyImage17,
    historyImage18, historyImage19,
    historyImage20, historyImage21, historyImage22, historyImage23, historyImage24,

];

const HistorySection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(i => (i + 1) % historyImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => setCurrentIndex(i => (i - 1 + historyImages.length) % historyImages.length);
    const handleNext = () => setCurrentIndex(i => (i + 1) % historyImages.length);

    return (
        <section className="history-section">
            <div className="history-content">
                <h2>О хакатоне</h2>

                {/* Текст слева — скрывается на мобиле */}
                <div className="history-text-col">
                    <p>С 2024 года Бизнес–школа Томского политехнического университета проводит Всероссийский предпринимательский хакатон в городе Томске. Это уникальное событие, где молодые и талантливые участники создают инновационную среду, отражающую будущее студенческого предпринимательства в студенческой столице России — Томске.</p>
                    <p>Хакатон не просто собирает молодых предпринимателей для разработки стартап-идей, но и становится местом, где наука и бизнес сольются воедино, создавая новые формы успешного взаимодействия.</p>
                    <p>Предпринимательский Хакатон в Томске стимулирует развитие стартап-сообщества и способствует формированию новых бизнес–идей, которые могут изменить облик города, делая его более привлекательным для жителей и гостей.</p>
                    <p>Присоединяйтесь к нам, чтобы совместно воплотить мечты в жизнь и создать новую, вдохновляющую среду для будущих поколений предпринимателей!</p>
                </div>

                {/* Карусель справа */}
                <div className="carousel">
                    <button className="carousel-control prev" onClick={handlePrev}>‹</button>
                    <img
                        src={historyImages[currentIndex]}
                        alt={`Момент ${currentIndex + 1}`}
                        className="carousel-image"
                    />
                    <button className="carousel-control next" onClick={handleNext}>›</button>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;