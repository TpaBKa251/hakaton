// import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
// import './NavBar.css';
// import kot from '../assets/images/kot (1) (1).png'; // Путь к вашему изображению
//
// function NavBar({className}) {
//     const [menuOpen, setMenuOpen] = useState(false);
//
//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };
//
//     const closeMenu = () => {
//         setMenuOpen(false);
//     };
//
//     useEffect(() => {
//         const handleOutsideInteraction = (event) => {
//             const navbar = document.querySelector('.navbar');
//             if (navbar && !navbar.contains(event.target)) {
//                 closeMenu();
//             }
//         };
//
//         document.addEventListener('click', handleOutsideInteraction);
//         document.addEventListener('touchstart', handleOutsideInteraction);
//
//         return () => {
//             document.removeEventListener('click', handleOutsideInteraction);
//             document.removeEventListener('touchstart', handleOutsideInteraction);
//         };
//     }, []);
//
//     return (
//         <nav className={`navbar ${className} ${menuOpen ? 'menu-open' : ''}`}>
//             <div className="navbar-left">
//                 <Link to="/" onClick={closeMenu}>
//                     <img src={kot} alt="кот" className="navbar-logo"/>
//                 </Link>
//                 <span onClick={closeMenu} className="navbar-center">
//     Бизнес-кот
// </span>
//
//                 <button className="menu-toggle" onClick={toggleMenu}>
//                     ☰ {/* Иконка меню */}
//                 </button>
//             </div>
//             <div className={`navbar-right ${!menuOpen ? 'inactive' : ''}`}>
//                 <Link to="/history" target="_blank" onClick={toggleMenu}>О хакатоне</Link>
//                 <Link to="/partners" target="_blank" onClick={toggleMenu}>Партнеры</Link>
//                 <Link to="/doc" target="_blank" onClick={toggleMenu}>Информационное письмо</Link>
//                 <Link to="/program" target="_blank" onClick={toggleMenu}>Программа</Link>
//                 <a
//                     href="https://forms.gle/fE2cNBDmo8Yty8pJ9"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="register-button"
//                     onClick={toggleMenu}
//                 >
//                     Зарегистрироваться
//                 </a>
//             </div>
//         </nav>
//     );
// }
//
// export default NavBar;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import kot from '../assets/images/kot (1) (1).png';

function NavBar({ className }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    // Закрываем при клике вне навбара / drawer
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
        document.addEventListener('click', handleOutside);
        document.addEventListener('touchstart', handleOutside);
        return () => {
            document.removeEventListener('click', handleOutside);
            document.removeEventListener('touchstart', handleOutside);
        };
    }, []);

    // Закрываем при скролле
    useEffect(() => {
        const handleScroll = () => { if (menuOpen) closeMenu(); };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuOpen]);

    return (
        <>
            {/* ── Основной навбар ── */}
            <nav className={`navbar ${className} ${menuOpen ? 'menu-open' : ''}`}>
                {/* Левая часть: лого + название */}
                <div className="navbar-left">
                    <Link to="/" onClick={closeMenu}>
                        <img src={kot} alt="кот" className="navbar-logo" />
                    </Link>
                    <span className="navbar-center" onClick={closeMenu}>Бизнес-кот</span>
                </div>

                {/* Правая часть (десктоп): все ссылки + кнопка */}
                <div className={`navbar-right ${!menuOpen ? 'inactive' : ''}`}>
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

                {/* Мобильная правая часть: кнопка регистрации + бургер */}
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

            {/* ── Выезжающий drawer на мобиле ── */}
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