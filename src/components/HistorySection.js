import React from 'react';
import './HistorySection.css';
import historyImage from '../assets/images/history.jpg'; // Путь к изображению

const historyImages = [
    'https://avatars.mds.yandex.net/i?id=679720f2a94327342bb6a0e160ce7bb8_l-8497208-images-thumbs&n=13',
    'https://images.wallpaperscraft.com/image/single/cat_face_eyes_29447_1280x720.jpg',
    'https://avatars.mds.yandex.net/i?id=250f93637cfca7e405ec166ccfd2c562843d2211-5887755-images-thumbs&n=13',
    'https://cs.pikabu.ru/post_img/big/2013/08/22/5/1377152076_1639789449.jpg'
];

const HistorySection = () => {
    return (
        <section className="history-section" style={{ backgroundImage: `url(${historyImage})` }}>
            <div className="history-content">
                <h2>История хакатона</h2>
                <div className="history-gallery">
                    {historyImages.map((image, index) => (
                        <img key={index} src={image} alt={`Момент ${index + 1}`} className="history-image" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HistorySection;
