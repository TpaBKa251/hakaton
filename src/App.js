import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import NewsSection from './components/NewsSection';
import HistorySection from './components/HistorySection';
import CommentsSection from "./components/CommentsSection";
import PartnersSection from './components/PartnersSection';
import ContactSection from './components/ContactSection';
import MapSection from './components/MapSection';
import Navbar from './components/NavBar';
import SideNavigation from './components/SideNavigation';
import News from './components/News';
import Partners from './components/Partners';
import History from './components/History';
import Document from './components/HackathonPage';
import ProgramPage from "./components/ProgramPage";

function MainPage() {
    const sections = [
        { name: 'hero',     label: 'Главная',       component: HeroSection },
        { name: 'news',     label: 'Новости',        component: NewsSection },
        { name: 'history',  label: 'История',        component: HistorySection },
        { name: 'comments', label: 'Комментарии',    component: CommentsSection },
        { name: 'partners', label: 'Партнеры',       component: PartnersSection },
        { name: 'contact',  label: 'Контакты',       component: ContactSection },
        { name: 'map',      label: 'Карта',          component: MapSection },
    ];

    const sectionRefs = useRef(sections.map(() => React.createRef()));
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [navbarVisible, setNavbarVisible] = useState(true);

    // Храним текущий индекс в ref — чтобы читать в scroll-хендлере без зависимостей
    const currentIndexRef = useRef(0);

    const scrollToSection = (index) => {
        const target = sectionRefs.current[index]?.current;
        if (target) {
            window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // Показываем навбар сразу
        setNavbarVisible(true);

        const handleScroll = () => {
            const viewportHeight = window.innerHeight;
            let mostVisibleIndex = currentIndexRef.current;

            sectionRefs.current.forEach((ref, index) => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const visible = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
                    if (visible > viewportHeight * 0.5) {
                        mostVisibleIndex = index;
                    }
                }
            });

            if (mostVisibleIndex !== currentIndexRef.current) {
                const isDown = mostVisibleIndex > currentIndexRef.current;

                const prevRef = sectionRefs.current[currentIndexRef.current]?.current;
                if (prevRef) {
                    prevRef.classList.remove('visible');
                    prevRef.classList.add(isDown ? 'hidden-up' : 'hidden-down');
                }

                const nextRef = sectionRefs.current[mostVisibleIndex]?.current;
                if (nextRef) {
                    nextRef.classList.remove('hidden-up', 'hidden-down');
                    nextRef.classList.add('visible');
                }

                currentIndexRef.current = mostVisibleIndex;
                setCurrentSectionIndex(mostVisibleIndex);
            }
        };

        // ВАЖНО: passive: true — не блокирует нативный скролл браузера
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);

        // Пустой массив зависимостей — listener вешается один раз и не пересоздаётся
    }, []);

    return (
        <div className="App">
            <Navbar className={`navbar ${navbarVisible ? 'visible' : ''}`} />
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
                        index === 0
                            ? 'visible'
                            : 'hidden-down'
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
                <Route path="/"         element={<MainPage />} />
                <Route path="/news"     element={<News />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/history"  element={<History />} />
                <Route path="/doc"      element={<Document />} />
                <Route path="/program"  element={<ProgramPage />} />
                <Route path="*"         element={<h1>404 - Страница не найдена</h1>} />
            </Routes>
        </Router>
    );
}

export default App;