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
        { name: 'hero', label: 'Главная', component: HeroSection },
        { name: 'news', label: 'Новости', component: NewsSection },
        { name: 'history', label: 'История', component: HistorySection },
        { name: 'partners', label: 'Партнеры', component: PartnersSection },
        { name: 'contact', label: 'Контакты', component: ContactSection },
        { name: 'map', label: 'Карта', component: MapSection },
    ];

    const sectionRefs = useRef(sections.map(() => React.createRef())); // Массив рефов для каждой секции
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(false);

    const scrollToSection = (index) => {
        const targetSection = sectionRefs.current[index]?.current;
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const viewportHeight = window.innerHeight;

            // Определяем текущую видимую секцию
            let mostVisibleIndex = currentSectionIndex;

            if (window.scrollY > 0 && !navbarVisible) {
                setNavbarVisible(true); // Показываем Navbar, когда начинается прокрутка
            }

            sectionRefs.current.forEach((ref, index) => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const visibleHeight =
                        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

                    if (visibleHeight > viewportHeight * 0.5) {
                        mostVisibleIndex = index;
                    }
                }
            });

            if (mostVisibleIndex !== currentSectionIndex) {
                const isScrollingDown = mostVisibleIndex > currentSectionIndex;

                // Убираем старые классы у текущей секции
                const currentRef = sectionRefs.current[currentSectionIndex]?.current;
                if (currentRef) {
                    currentRef.classList.remove('visible');
                    currentRef.classList.add(isScrollingDown ? 'hidden-up' : 'hidden-down'); // Сначала удаляем "visible"
                }

                const nextRef = sectionRefs.current[mostVisibleIndex]?.current;
                if (nextRef) {
                    nextRef.classList.remove('hidden-up', 'hidden-down'); // Убираем "скрытые" классы
                    nextRef.classList.add('visible'); // Добавляем "visible" последним
                }


                setCurrentSectionIndex(mostVisibleIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentSectionIndex]);

    return (
        <div className="App">
            <Navbar className={`navbar ${navbarVisible ? 'visible' : 'visible'}`} />
            <SideNavigation
                sections={sections}
                currentSectionIndex={currentSectionIndex}
                onSectionClick={scrollToSection}
            />
            {sections.map((section, index) => (
                <div
                    key={section.name}
                    ref={sectionRefs.current[index]}
                    className={`section ${
                        currentSectionIndex === index
                            ? 'visible'
                            : index > currentSectionIndex
                                ? 'hidden-down'
                                : 'hidden-up'
                    }`}
                >
                    {React.createElement(section.component)}
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
