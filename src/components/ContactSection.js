// src/components/ContactSection.js
import React from 'react';
import './ContactSection.css';
import contactBackground from '../assets/images/contacts.jpg'; // Путь к изображению

const ContactSection = () => {
    return (
        <section className="contact-section" style={{ backgroundImage: `url(${contactBackground})` }}>
            <div className="contact-content">
                <h2>Контакты</h2>
                <div className="contact-info">
                    <p><strong>Телефон:</strong> +7 (123) 456-78-90</p>
                    <p><strong>Email:</strong> <a href="mailto:info@hackathon.ru">info@hackathon.ru</a></p>
                    <p><strong>Адрес:</strong> Москва, ул. Примерная, 12</p>
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
