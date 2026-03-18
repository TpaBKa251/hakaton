import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import kot from '../assets/images/kot (1) (1).png';

function NavBar({ className }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuOpenRef = useRef(false);

    const toggleMenu = () => {
        const next = !menuOpenRef.current;
        menuOpenRef.current = next;
        setMenuOpen(next);
    };

    const closeMenu = () => {
        menuOpenRef.current = false;
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleOutside = (e) => {
            const navbar = document.querySelector('.navbar');
            const drawer = document.querySelector('.navbar-drawer');
            if (
                navbar && !navbar.contains(e.target) &&
                drawer && !drawer.contains(e.target)
            ) {
                closeMenu();
            }
        };

        const handleScroll = () => {
            if (menuOpenRef.current) closeMenu();
        };

        // passive: true — ключевое исправление, больше не блокирует тач-скролл
        document.addEventListener('click', handleOutside, { passive: true });
        document.addEventListener('touchstart', handleOutside, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            document.removeEventListener('click', handleOutside);
            document.removeEventListener('touchstart', handleOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // один раз — не пересоздаём

    return (
        <>
            <nav className={`navbar ${className} ${menuOpen ? 'menu-open' : ''}`}>
                <div className="navbar-left">
                    <Link to="/" onClick={closeMenu}>
                        <img src={kot} alt="кот" className="navbar-logo" />
                    </Link>
                    <span className="navbar-center" onClick={closeMenu}>Бизнес-кот</span>
                </div>

                <div className="navbar-right">
                    <Link to="/history" target="_blank" onClick={closeMenu}>О хакатоне</Link>
                    <Link to="/partners" target="_blank" onClick={closeMenu}>Партнеры</Link>
                    <Link to="/doc" target="_blank" onClick={closeMenu}>Информационное письмо</Link>
                    <Link to="/program" target="_blank" onClick={closeMenu}>Программа</Link>
                    <a
                        href="https://forms.gle/fE2cNBDmo8Yty8pJ9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="register-button"
                        onClick={closeMenu}
                    >
                        Зарегистрироваться
                    </a>
                </div>

                <div className="navbar-mobile-right">
                    <a
                        href="https://forms.gle/fE2cNBDmo8Yty8pJ9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="register-button"
                        onClick={closeMenu}
                    >
                        Зарегистрироваться
                    </a>
                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Меню">
                        {menuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </nav>

            <div className={`navbar-drawer ${menuOpen ? 'open' : ''}`}>
                <div className="navbar-drawer-links">
                    <Link to="/history" target="_blank" onClick={closeMenu}>О хакатоне</Link>
                    <Link to="/partners" target="_blank" onClick={closeMenu}>Партнеры</Link>
                    <Link to="/doc" target="_blank" onClick={closeMenu}>Информационное письмо</Link>
                    <Link to="/program" target="_blank" onClick={closeMenu}>Программа</Link>
                </div>
            </div>
        </>
    );
}

export default NavBar;