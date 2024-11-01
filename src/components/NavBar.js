// components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({ className }) {
    return (
        <nav className={`navbar ${className}`}>
            <div className="navbar-left">Предпринимательский хакатон</div>
            <div className="navbar-right">
                <Link to="/news">Новости</Link>
                <Link to="/history">История</Link>
                <Link to="/partners">Партнеры</Link>
                <a
                    href="https://forms.gle/Zbbd6PLALrGmcF4k9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="register-button"
                >
                    Зарегистрироваться
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
