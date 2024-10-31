import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import ScheduleSection from './components/ScheduleSection';
import NewsSection from './components/NewsSection';
import HistorySection from './components/HistorySection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';
import MapSection from './components/MapSection';

function App() {
    const sections = [
        'hero',
        'schedule',
        'news',
        'history',
        'partners',
        'contact',
        'map'
    ];

    const sectionsRefs = {
        hero: useRef(null),
        schedule: useRef(null),
        news: useRef(null),
        history: useRef(null),
        partners: useRef(null),
        contact: useRef(null),
        map: useRef(null),
    };

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            if (isScrolling) return; // Если происходит переключение, игнорируем прокрутку
            const { deltaY } = e;
            let newIndex = currentSectionIndex;

            if (deltaY > 0 && currentSectionIndex < sections.length - 1) {
                newIndex = currentSectionIndex + 1;
            } else if (deltaY < 0 && currentSectionIndex > 0) {
                newIndex = currentSectionIndex - 1;
            }

            if (newIndex !== currentSectionIndex) {
                setIsScrolling(true); // Устанавливаем флаг, чтобы игнорировать дальнейшую прокрутку
                setCurrentSectionIndex(newIndex);
            }
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentSectionIndex, isScrolling, sections.length]);

    useEffect(() => {
        const currentSectionRef = sectionsRefs[sections[currentSectionIndex]].current;
        if (currentSectionRef) {
            currentSectionRef.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            // После завершения прокрутки, снимаем флаг через 1 секунду
            const timer = setTimeout(() => {
                setIsScrolling(false);
            }, 1000); // Время ожидания (1 секунда) должно совпадать с временем анимации

            return () => clearTimeout(timer);
        }
    }, [currentSectionIndex]);

    return (
        <div className="App">
            <div ref={sectionsRefs.hero} className={`section ${currentSectionIndex === 0 ? 'visible' : ''}`}>
                <HeroSection />
            </div>
            <div ref={sectionsRefs.schedule} className={`section ${currentSectionIndex === 1 ? 'visible' : ''}`}>
                <ScheduleSection />
            </div>
            <div ref={sectionsRefs.news} className={`section ${currentSectionIndex === 2 ? 'visible' : ''}`}>
                <NewsSection />
            </div>
            <div ref={sectionsRefs.history} className={`section ${currentSectionIndex === 3 ? 'visible' : ''}`}>
                <HistorySection />
            </div>
            <div ref={sectionsRefs.partners} className={`section ${currentSectionIndex === 4 ? 'visible' : ''}`}>
                <PartnersSection />
            </div>
            <div ref={sectionsRefs.contact} className={`section ${currentSectionIndex === 5 ? 'visible' : ''}`}>
                <ContactSection />
            </div>
            <div ref={sectionsRefs.map} className={`section ${currentSectionIndex === 6 ? 'visible' : ''}`}>
                <MapSection />
            </div>
        </div>
    );
}

export default App;
