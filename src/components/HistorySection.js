import React, { useState, useEffect } from 'react';
import './HistorySection.css';
import historyImage1 from '../assets/images/хакатон 1.jpg';
import historyImage2 from '../assets/images/хакатон 2.jpg';
import historyImage3 from '../assets/images/хакатон 3.jpg';
import historyImage4 from '../assets/images/хакатон 4.jpg';
import historyImage5 from '../assets/images/хакатон 5.jpg';
import historyImage6 from '../assets/images/хакатон 6.jpg';
import historyImage7 from '../assets/images/хакатон 7.jpg';

const historyImages = [
    historyImage1,
    historyImage2,
    historyImage3,
    historyImage4,
    historyImage5,
    historyImage6,
    historyImage7
];

const HistorySection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % historyImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + historyImages.length) % historyImages.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % historyImages.length);
    };

    return (
        <section className="history-section">
            <div className="history-content">
                <h2>О хакатоне</h2>
                <div className="carousel">
                    <button className="carousel-control prev" onClick={handlePrev}>
                        ‹
                    </button>
                    <img src={historyImages[currentIndex]} alt={`Момент ${currentIndex + 1}`} className="carousel-image" />
                    <button className="carousel-control next" onClick={handleNext}>
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;
