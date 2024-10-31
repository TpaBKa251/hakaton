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
    const [fadeOutSectionIndex, setFadeOutSectionIndex] = useState(null);

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
            if (isScrolling) return;

            const { deltaY } = e;
            let newIndex = currentSectionIndex;

            if (deltaY > 0 && currentSectionIndex < sections.length - 1) {
                newIndex = currentSectionIndex + 1;
            } else if (deltaY < 0 && currentSectionIndex > 0) {
                newIndex = currentSectionIndex - 1;
            }

            if (newIndex !== currentSectionIndex) {
                setIsScrolling(true);
                setFadeOutSectionIndex(currentSectionIndex); // Устанавливаем текущий индекс как "скрывающийся"
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
            const topPosition = currentSectionRef.offsetTop;
            window.scrollTo({
                top: topPosition,
                behavior: 'smooth',
                block: 'start',
            });

            const timer = setTimeout(() => {
                setIsScrolling(false);
                setFadeOutSectionIndex(null); // Сбрасываем "скрывающийся" индекс
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [currentSectionIndex]);

    useEffect(() => {
        if (fadeOutSectionIndex !== null) {
            const restoreTimer = setTimeout(() => {
                setFadeOutSectionIndex(null); // Снимаем эффект полного исчезновения
            }, 500);

            return () => clearTimeout(restoreTimer);
        }
    }, [fadeOutSectionIndex]);

    return (
        <div className="App">
            <div
                ref={sectionsRefs.hero}
                className={`section ${currentSectionIndex === 0 ? 'visible' : ''} ${fadeOutSectionIndex === 0 ? 'fade-out' : ''} ${fadeOutSectionIndex === null && currentSectionIndex !== 0 ? 'restore' : ''}`}
            >
                <HeroSection />
            </div>
            <div
                ref={sectionsRefs.schedule}
                className={`section ${currentSectionIndex === 1 ? 'visible' : ''} ${fadeOutSectionIndex === 1 ? 'fade-out' : ''} ${fadeOutSectionIndex === null && currentSectionIndex !== 1 ? 'restore' : ''}`}
            >
                <ScheduleSection />
            </div>
            <div
                ref={sectionsRefs.news}
                className={`section ${currentSectionIndex === 2 ? 'visible' : ''} ${fadeOutSectionIndex === 2 ? 'fade-out' : ''} ${fadeOutSectionIndex === null && currentSectionIndex !== 2 ? 'restore' : ''}`}
            >
                <NewsSection />
            </div>
            <div
                ref={sectionsRefs.history}
                className={`section ${currentSectionIndex === 3 ? 'visible' : ''} ${fadeOutSectionIndex === 3 ? 'fade-out' : ''} ${fadeOutSectionIndex === null && currentSectionIndex !== 3 ? 'restore' : ''}`}
            >
                <HistorySection />
            </div>
            <div
                ref={sectionsRefs.partners}
                className={`section ${currentSectionIndex === 4 ? 'visible' : ''} ${fadeOutSectionIndex === 4 ? 'fade-out' : ''} ${fadeOutSectionIndex === null && currentSectionIndex !== 4 ? 'restore' : ''}`}
            >
                <PartnersSection />
            </div>
            <div
                ref={sectionsRefs.contact}
                className={`section ${currentSectionIndex === 5 ? 'visible' : ''} ${fadeOutSectionIndex === 5 ? 'fade-out' : ''} ${fadeOutSectionIndex === null && currentSectionIndex !== 5 ? 'restore' : ''}`}
            >
                <ContactSection />
            </div>
            <div
                ref={sectionsRefs.map}
                className={`section ${currentSectionIndex === 6 ? 'visible' : ''} ${fadeOutSectionIndex === 6 ? 'fade-out' : ''} ${fadeOutSectionIndex === null && currentSectionIndex !== 6 ? 'restore' : ''}`}
            >
                <MapSection />
            </div>
        </div>
    );
}

export default App;
