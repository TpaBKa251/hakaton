import React from 'react';
import './ContactSection.css';
import contactBackground from '../assets/images/contacts.jpg'; // Путь к изображению

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
                    <p><strong>к.т.н. доцент Бизнес-школы</strong></p>
                    <p><strong>Татьяна Владимировна Калашникова</strong></p>
                    <p><strong>Телефон:</strong> +7 (903) 951-51-73</p>
                    <p><strong>Email: </strong>tvkalash@tpu.ru</p>
                    <div className="social-media">
                        <a href="https://vk.com/id303047664" target="_blank" rel="noopener noreferrer">ВКонтакте</a>
                    </div>
                    <div className="social-media">
                        <a href="https://t.me/Tatiana_V_Kalashnikova" target="_blank" rel="noopener noreferrer">Telegram</a>
                    </div>
                    <div className="social-media">
                        <a href="https://max.ru/u/f9LHodD0cOKeHiTuFAR2f4ohNnjN7JKohIumiAKYl7eYjYLwJmJWbMxNL4Q" target="_blank" rel="noopener noreferrer">MAX</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
