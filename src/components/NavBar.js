import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import kot from '../assets/images/kot (1) (1).png'; // Путь к вашему изображению

function NavBar({ className }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        // Функция для закрытия меню при клике или касании вне navbar
        const handleOutsideInteraction = (event) => {
            const navbar = document.querySelector('.navbar');
            if (navbar && !navbar.contains(event.target)) {
                closeMenu(); // Закрываем меню
            }
        };

        // Добавляем слушатели событий
        document.addEventListener('click', handleOutsideInteraction);
        document.addEventListener('touchstart', handleOutsideInteraction); // Для обработки касаний

        // Убираем слушатели при размонтировании
        return () => {
            document.removeEventListener('click', handleOutsideInteraction);
            document.removeEventListener('touchstart', handleOutsideInteraction);
        };
    }, []);

    // useEffect(() => {
    //     const navbar = document.querySelector('.navbar');
    //     if (navbar) {
    //         const navbarHeight = navbar.offsetHeight; // Получаем высоту
    //         navbar.style.borderRadius = `${navbarHeight / 2}px`; // Устанавливаем радиус
    //     }
    // }, []);

    return (
        <nav className={`navbar ${className} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="navbar-left">
                <img src={kot} alt="кот" className="navbar-logo"/>
                <div className="navbar-center">Бизнес-кот</div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰ {/* Иконка меню */}
                </button>
            </div>
            <div className={`navbar-right ${!menuOpen ? 'inactive' : ''}`}>
                {/*<Link to="/news" onClick={toggleMenu}>Важная информация</Link>*/}
                <Link to="/history" onClick={toggleMenu}>О хакатоне</Link>
                <Link to="/partners" onClick={toggleMenu}>Партнеры</Link>
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
