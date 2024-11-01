import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import ScheduleSection from './components/ScheduleSection';
import NewsSection from './components/NewsSection';
import HistorySection from './components/HistorySection';
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';
import MapSection from './components/MapSection';
import Navbar from './components/NavBar';
import SideNavigation from './components/SideNavigation';
import News from './components/News';
import Partners from "./components/Partners";
import History from "./components/History";

function MainPage() {
    const sections = [
        { name: 'hero', label: 'Главная' },
        { name: 'schedule', label: 'Расписание' },
        { name: 'news', label: 'Новости' },
        { name: 'history', label: 'История' },
        { name: 'partners', label: 'Партнеры' },
        { name: 'contact', label: 'Контакты' },
        { name: 'map', label: 'Карта' },
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
    const [showNavbar, setShowNavbar] = useState(false);

    const handleSectionClick = (index) => {
        setCurrentSectionIndex(index);
    };

    useEffect(() => {
        if (currentSectionIndex >= 1) {
            setTimeout(() => setShowNavbar(true), 10);
        }
    }, [currentSectionIndex]);

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
                setFadeOutSectionIndex(currentSectionIndex);
                setCurrentSectionIndex(newIndex);
            }
        };

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentSectionIndex, isScrolling, sections.length]);

    useEffect(() => {
        const currentSectionRef = sectionsRefs[sections[currentSectionIndex].name].current;
        if (currentSectionRef) {
            const topPosition = currentSectionRef.offsetTop;
            window.scrollTo({
                top: topPosition,
                behavior: 'smooth',
                block: 'start',
            });

            const timer = setTimeout(() => {
                setIsScrolling(false);
                setFadeOutSectionIndex(null);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [currentSectionIndex]);

    useEffect(() => {
        if (fadeOutSectionIndex !== null) {
            const restoreTimer = setTimeout(() => {
                setFadeOutSectionIndex(null);
            }, 500);

            return () => clearTimeout(restoreTimer);
        }
    }, [fadeOutSectionIndex]);

    return (
        <div>
            {<Navbar className={`navbar ${showNavbar ? "visible" : ""}`} />}
            <SideNavigation
                sections={sections}
                currentSectionIndex={currentSectionIndex}
                onSectionClick={handleSectionClick}
            />
            <div
                ref={sectionsRefs.hero}
                className={`section ${currentSectionIndex === 0 ? 'visible' : ''} ${fadeOutSectionIndex === 0 ? 'fade-out' : ''} ${fadeOutSectionIndex === null && currentSectionIndex !== 0 ? 'restore' : ''}`}
            >
                <HeroSection/>
            </div>
            <div
                ref={sectionsRefs.schedule}
                className={`section ${currentSectionIndex === 1 ? 'visible' : ''} ${fadeOutSectionIndex === 1 ? 'fade-out' : ''} ${fadeOutSectionIndex === null && currentSectionIndex !== 1 ? 'restore' : ''}`}
            >
                <ScheduleSection/>
            </div>
            <div
                ref={sectionsRefs.news}
                className={`section ${currentSectionIndex === 2 ? 'visible' : ''} ${fadeOutSectionIndex === 2 ? 'fade-out' : ''} ${fadeOutSectionIndex === null && currentSectionIndex !== 2 ? 'restore' : ''}`}
            >
                <NewsSection/>
            </div>
            <div
                ref={sectionsRefs.history}
                className={`section ${currentSectionIndex === 3 ? 'visible' : ''} ${fadeOutSectionIndex === 3 ? 'fade-out' : ''} ${fadeOutSectionIndex === null && currentSectionIndex !== 3 ? 'restore' : ''}`}
            >
                <HistorySection/>
            </div>
            <div
                ref={sectionsRefs.partners}
                className={`section ${currentSectionIndex === 4 ? 'visible' : ''} ${fadeOutSectionIndex === 4 ? 'fade-out' : ''} ${fadeOutSectionIndex === null && currentSectionIndex !== 4 ? 'restore' : ''}`}
            >
                <PartnersSection/>
            </div>
            <div
                ref={sectionsRefs.contact}
                className={`section ${currentSectionIndex === 5 ? 'visible' : ''} ${fadeOutSectionIndex === 5 ? 'fade-out' : ''} ${fadeOutSectionIndex === null && currentSectionIndex !== 5 ? 'restore' : ''}`}
            >
                <ContactSection/>
            </div>
            <div
                ref={sectionsRefs.map}
                className={`section ${currentSectionIndex === 6 ? 'visible' : ''} ${fadeOutSectionIndex === 6 ? 'fade-out' : ''} ${fadeOutSectionIndex === null && currentSectionIndex !== 6 ? 'restore' : ''}`}
            >
                <MapSection/>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/news" element={<News />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </Router>
    );
}

export default App;
