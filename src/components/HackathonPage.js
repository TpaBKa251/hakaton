import React from 'react';
import './HackathonPage.css'; // Подключение CSS
import Navbar from "./NavBar";
import maxLogo from "../assets/images/max-messenger-sign-logo.svg"; // Подключаем Navbar

const HackathonPage = () => {
    return (
        <div className="hackathon-container" lang="ru">
            <Navbar className={`navbar visible`}/> {/* Добавляем навбар */}
            <h1 className="hackathon-title">III Всероссийский предпринимательский хакатон «Бизнес-кот» – 2026 </h1>

            <section className="hackathon-section">
                <p>
                    Бизнес-школа Томского политехнического университета приглашает
                    студентов принять участие в III Всероссийском предпринимательском хакатоне «Бизнес-кот» – 2026.
                </p>
                <p><strong>Дата проведения:</strong> 14-16 апреля 2026 г.</p>
                <p><strong>Формат:</strong> Очный</p>
                <p><strong>Прием заявок:</strong> до 6 апреля 2026 г.</p>
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

                <p>
                    📞 <a href="tel:+79039515173"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="contact-link"
                >
                    +7 (903) 951-51-73
                </a>
                </p>

                <p>
                    ✉️ <a href="mailto:tvkalash@tpu.ru"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-link"
                >
                    tvkalash@tpu.ru
                </a>
                </p>

                <p>
                    <a
                        href="https://vk.com/id303047664"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#0077FF"
                        >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12C24 5.37 18.63 0 12 0zm5.92 16.5h-1.4c-.53 0-.69-.42-1.64-1.33-.83-.79-1.2-.9-1.4-.9-.27 0-.35.08-.35.46v1.2c0 .33-.1.52-.96.52-1.43 0-3.02-.87-4.13-2.49-1.66-2.35-2.11-4.12-2.11-4.48 0-.2.07-.38.46-.38h1.4c.35 0 .48.15.62.52.69 2.01 1.85 3.77 2.33 3.77.18 0 .26-.08.26-.5v-1.96c-.05-.9-.53-.98-.53-1.3 0-.16.13-.32.35-.32h2.2c.3 0 .41.16.41.52v2.64c0 .28.12.38.2.38.18 0 .33-.1.66-.43 1.04-1.16 1.78-2.94 1.78-2.94.1-.2.28-.38.63-.38h1.4c.42 0 .52.22.42.52-.18.86-1.92 3.29-1.92 3.29-.15.24-.2.35 0 .6.15.2.66.65 1 1.05.62.72 1.1 1.33 1.23 1.75.12.42-.09.63-.49.63z"/>
                        </svg>
                        VK
                    </a>
                </p>

                <p>
                    <a
                        href="https://t.me/Tatiana_V_Kalashnikova"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#229ED9"
                        >
                            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.47 8.16l-1.97 9.29c-.15.66-.55.82-1.12.51l-3.1-2.29-1.5 1.45c-.17.17-.31.31-.63.31l.22-3.14 5.72-5.17c.25-.22-.05-.35-.38-.13l-7.07 4.45-3.04-.95c-.66-.21-.67-.66.14-.98l11.88-4.58c.55-.2 1.03.13.85.98z"/>
                        </svg>
                        Telegram
                    </a>
                </p>

                <p>
                    <a
                        href="https://max.ru/u/f9LHodD0cOKeHiTuFAR2f4ohNnjN7JKohIumiAKYl7eYjYLwJmJWbMxNL4Q"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        <img
                            src={maxLogo}
                            alt="MAX"
                        />
                        MAX
                    </a>
                </p>
            </section>


            <section className="hackathon-section">
                <h2>Документ</h2>
                <p>
                    📄 <a href="//hakaton-zeta.vercel.app/informatsionnoe_pismo_2026.pdf" target="_blank" rel="noopener noreferrer">
                    Открыть/скачать документ
                </a>
                </p>
            </section>
        </div>
    );
};

export default HackathonPage;
