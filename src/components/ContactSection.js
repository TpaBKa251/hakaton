// src/components/ContactSection.js
import React from 'react';
import './ContactSection.css';
import contactBackground from '../assets/images/contacts.jpg'; // Путь к изображению

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="contact-content">
                <h2>Контакты</h2>
                <div className="contact-info">
                    <p><strong>Телефон:</strong> +7 (903) 951-51-73</p>
                    <p><strong>Email: </strong>tvkalash@tpu.ru</p>
                    <div className="social-media">
                        <a href="https://vk.com/id303047664" target="_blank" rel="noopener noreferrer">ВКонтакте</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
