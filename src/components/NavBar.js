import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import kot from '../assets/images/kot (1) (1).png'; // Путь к вашему изображению

function NavBar({className}) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleOutsideInteraction = (event) => {
            const navbar = document.querySelector('.navbar');
            if (navbar && !navbar.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('click', handleOutsideInteraction);
        document.addEventListener('touchstart', handleOutsideInteraction);

        return () => {
            document.removeEventListener('click', handleOutsideInteraction);
            document.removeEventListener('touchstart', handleOutsideInteraction);
        };
    }, []);

    return (
        <nav className={`navbar ${className} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="navbar-left">
                <Link to="/" onClick={closeMenu}>
                    <img src={kot} alt="кот" className="navbar-logo"/>
                </Link>
                <span onClick={closeMenu} className="navbar-center">
    Бизнес-кот
</span>

                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰ {/* Иконка меню */}
                </button>
            </div>
            <div className={`navbar-right ${!menuOpen ? 'inactive' : ''}`}>
                <Link to="/history" target="_blank" onClick={toggleMenu}>О хакатоне</Link>
                <Link to="/partners" target="_blank" onClick={toggleMenu}>Партнеры</Link>
                <Link to="/doc" target="_blank" onClick={toggleMenu}>Информационное письмо</Link>
                <a
                    href="https://forms.gle/fE2cNBDmo8Yty8pJ9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="register-button"
                    onClick={toggleMenu}
                >
                    Зарегистрироваться
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
