// components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ className }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${className} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="navbar-left">Предпринимательский хакатон</div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰ {/* Иконка меню */}
            </button>
            <div className="navbar-right">
                <Link to="/news" onClick={toggleMenu}>Новости</Link>
                <Link to="/history" onClick={toggleMenu}>История</Link>
                <Link to="/partners" onClick={toggleMenu}>Партнеры</Link>
                <a
                    href="https://forms.gle/Zbbd6PLALrGmcF4k9"
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
