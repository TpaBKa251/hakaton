import React from 'react';
import './ContactSection.css';
import contactBackground from '../assets/images/contacts.jpg';
import Logo from "../assets/images/max-messenger-sign-logo.svg"; // Путь к изображению

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="contact-content">
                <h2>Контакты</h2>
                <div className="contact-info">
                    <p><strong>Председатель организационного комитета</strong></p>
                    <div className="contact-image-wrapper">
                        <img
                            src={contactBackground}
                            alt="Татьяна Владимировна Калашникова"
                            className="contact-image"
                        />
                    </div>
                    <p><strong>к.т.н. доцент Бизнес–школы</strong></p>
                    <p><strong>Татьяна Владимировна Калашникова</strong></p>
                    <p><strong>Телефон:</strong> +7 (903) 951-51-73</p>
                    <p><strong>Email: </strong>tvkalash@tpu.ru</p>
                    <div className="social-media">
                        <a
                            href="https://vk.com/id303047664"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#0077FF"

                            >
                                <path
                                    d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12C24 5.37 18.63 0 12 0zm5.92 16.5h-1.4c-.53 0-.69-.42-1.64-1.33-.83-.79-1.2-.9-1.4-.9-.27 0-.35.08-.35.46v1.2c0 .33-.1.52-.96.52-1.43 0-3.02-.87-4.13-2.49-1.66-2.35-2.11-4.12-2.11-4.48 0-.2.07-.38.46-.38h1.4c.35 0 .48.15.62.52.69 2.01 1.85 3.77 2.33 3.77.18 0 .26-.08.26-.5v-1.96c-.05-.9-.53-.98-.53-1.3 0-.16.13-.32.35-.32h2.2c.3 0 .41.16.41.52v2.64c0 .28.12.38.2.38.18 0 .33-.1.66-.43 1.04-1.16 1.78-2.94 1.78-2.94.1-.2.28-.38.63-.38h1.4c.42 0 .52.22.42.52-.18.86-1.92 3.29-1.92 3.29-.15.24-.2.35 0 .6.15.2.66.65 1 1.05.62.72 1.1 1.33 1.23 1.75.12.42-.09.63-.49.63z"/>
                            </svg>
                        </a>
                        <a
                            href="https://t.me/Tatiana_V_Kalashnikova"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#229ED9"
                            >
                                <path
                                    d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.47 8.16l-1.97 9.29c-.15.66-.55.82-1.12.51l-3.1-2.29-1.5 1.45c-.17.17-.31.31-.63.31l.22-3.14 5.72-5.17c.25-.22-.05-.35-.38-.13l-7.07 4.45-3.04-.95c-.66-.21-.67-.66.14-.98l11.88-4.58c.55-.2 1.03.13.85.98z"/>
                            </svg>
                        </a>
                        <a
                            href="https://max.ru/u/f9LHodD0cOKeHiTuFAR2f4ohNnjN7JKohIumiAKYl7eYjYLwJmJWbMxNL4Q"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={Logo}
                                alt="MAX"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
