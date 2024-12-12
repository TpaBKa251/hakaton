import React from 'react';
import './MapSection.css';
import mapBackground from '../assets/images/map.png';
import mapQRcode from '../assets/images/qrCodeMap.png';

const MapSection = () => {
    return (
        <section className="map-section">
            <div className="map-header">
                <h2>Место проведения</h2>
            </div>
            <div className="map-container">
                <img src={mapBackground} alt="Карта места проведения" className="map-image" />
                <div className="map-content">
                    <div className="map-details">
                        <ul className="map-locations">
                            <li>1. Главный корпус ТПУ, пр. Ленина, 30;</li>
                            <li>2. Коворкинг «Нейтрино», ул. Усова, 4а;</li>
                            <li>3. Коворкинг «Кварк», ул. Белинского, 51;</li>
                            <li>4. Санаторий-профилакторий ТПУ, ул. Усова, 13;</li>
                            <li>5. МКЦ ТПУ, ул. Усова, 13в;</li>
                        </ul>
                    </div>
                    <div className="map-qr">
                        <img src={mapQRcode} alt="QR-код для карты" className="qr-code" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
