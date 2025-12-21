import React from 'react';
import './HackathonPage.css'; // Подключение CSS
import Navbar from "./NavBar"; // Подключаем Navbar

const HackathonPage = () => {
    return (
        <div className="hackathon-container" lang="ru">
            <Navbar className={`navbar visible`}/> {/* Добавляем навбар */}
            <h1 className="hackathon-title">II Всероссийский предпринимательский хакатон «Бизнес-кот»-2025 с
                международным участием</h1>

            <section className="hackathon-section">
                <p>
                    Бизнес-школа Национального исследовательского Томского политехнического университета приглашает
                    студентов принять участие в
                    II Всероссийском предпринимательском хакатоне с международным участием «Бизнес-кот»-2025.
                </p>
                <p><strong>Дата проведения:</strong> 21-23 мая 2026 г.</p>
                <p><strong>Формат:</strong> Очный</p>
                <p><strong>Прием заявок:</strong> до 12 мая 2026 г.</p>
            </section>

            <section className="hackathon-section">
                <h2>Условия участия</h2>
                <ul>
                    <li>
                        Для участия необходимо заполнить заявку:{" "}
                        <a href="https://vk.cc/cv84WM" target="_blank" rel="noopener noreferrer">
                            Перейти по ссылке
                        </a>
                    </li>
                    <li>Участие <strong>бесплатное</strong></li>
                    <li>Всем участникам выдаются сертификаты</li>
                    <li>Победителям – дипломы и призы</li>
                    <li><strong>Язык проведения:</strong> Русский</li>
                </ul>
            </section>

            <section className="hackathon-section">
                <h2>Контакты</h2>
                <p><strong>Калашникова Татьяна Владимировна</strong></p>
                <p>📞 <a href="tel:+79039515173">+7 (903) 951-51-73</a></p>
                <p>✉️ <a href="mailto:tvkalash@tpu.ru">tvkalash@tpu.ru</a></p>
            </section>

            <section className="hackathon-section">
                <h2>Сайт хакатона</h2>
                <p>
                    🌐 <a href="https://hakaton-zeta.vercel.app/" target="_blank" rel="noopener noreferrer">
                    hakaton-zeta.vercel.app
                </a>
                </p>
            </section>
            <section className="hackathon-section">
                <h2>Документ</h2>
                <p>
                    📄 <a href="//hakaton-zeta.vercel.app/Inf_pismo_biznes-kot.docx" target="_blank" rel="noopener noreferrer">
                    Открыть/скачать документ
                </a>
                </p>
            </section>
        </div>
    );
};

export default HackathonPage;
