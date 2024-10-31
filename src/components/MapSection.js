import React from 'react';
import './MapSection.css';
import mapBackground from '../assets/images/map.jpg';

const MapSection = () => {
    return (
        <section className="map-section" style={{ backgroundImage: `url(${mapBackground})` }}>
            <div className="map-header">
                <h2>Место проведения</h2>
            </div>
            <div className="map-container">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=84.966316%2C56.460562&mode=search&oid=43680984809&ol=biz&sctx=ZAAAAAgBEAAaKAoSCcGNlC2SPVVAETwTmiSWOkxAEhIJfm%2FTn%2F1IgT8RwCK%2FfogNZj8iBgABAgMEBSgKOABAo6UNSAFqAnJ1nQHNzMw9oAEAqAEAvQHcUgZywgEG6d3b3KIBggIG0L3Rj9C8igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=84.966316%2C56.460562&sspn=0.019661%2C0.006271&text=%D0%BD%D1%8F%D0%BC&z=17.18"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    style={{ position: 'relative' }}
                ></iframe>
            </div>
        </section>
    );
};

export default MapSection;
