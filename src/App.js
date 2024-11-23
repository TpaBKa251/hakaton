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
import Partners from './components/Partners';
import History from './components/History';

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
    const [scrollTimeout, setScrollTimeout] = useState(null);
    const [navbarVisible, setNavbarVisible] = useState(false); // состояние для видимости Navbar

    const scrollToSection = (index) => {
        const targetSection = sectionsRefs[sections[index].name].current;
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth',
            });
            setCurrentSectionIndex(index); // Обновляем состояние
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            // Проверяем начало прокрутки
            if (window.scrollY > 0 && !navbarVisible) {
                setNavbarVisible(true); // Показываем Navbar, когда начинается прокрутка
            }

            const scrollPosition = window.scrollY;
            const sectionOffsets = sections.map((section) => {
                const ref = sectionsRefs[section.name].current;
                return {
                    top: ref.offsetTop,
                    bottom: ref.offsetTop + ref.offsetHeight,
                };
            });

            // Определяем текущую ближайшую секцию
            const closestIndex = sectionOffsets.reduce(
                (closest, { top }, index) => {
                    const distance = Math.abs(top - scrollPosition);
                    return distance < closest.distance
                        ? { index, distance }
                        : closest;
                },
                { index: 0, distance: Infinity }
            ).index;

            // Обновляем состояние на ближайшую секцию
            if (closestIndex !== currentSectionIndex) {
                setCurrentSectionIndex(closestIndex);
            }

            // Притягивание после остановки
            const timeout = setTimeout(() => {
                scrollToSection(closestIndex);
            }, 300); // Таймаут для притягивания

            setScrollTimeout(timeout);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, [scrollTimeout, currentSectionIndex, navbarVisible]);

    return (
        <div className="App">
            {/* Navbar будет всегда отображаться после начала прокрутки */}
            <Navbar className={`navbar ${navbarVisible ? 'visible' : ''}`} />
            <SideNavigation
                sections={sections}
                currentSectionIndex={currentSectionIndex}
                onSectionClick={scrollToSection}
            />
            {sections.map((section) => (
                <div
                    key={section.name}
                    ref={sectionsRefs[section.name]}
                    className="section"
                >
                    {React.createElement(
                        {
                            hero: HeroSection,
                            schedule: ScheduleSection,
                            news: NewsSection,
                            history: HistorySection,
                            partners: PartnersSection,
                            contact: ContactSection,
                            map: MapSection,
                        }[section.name]
                    )}
                </div>
            ))}
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
