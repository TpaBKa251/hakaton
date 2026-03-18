// import React, { useState } from 'react';
// import './SideNavigation.css';
//
// function SideNavigation({ sections, currentSectionIndex, onSectionClick }) {
//     const [hovered, setHovered] = useState(false);
//
//     // Функция для проверки, является ли устройство мобильным
//     const isMobile = window.innerWidth <= 768;
//
//     return (
//         <div
//             className="side-navigation"
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//         >
//             {sections.map((section, index) => (
//                 <div
//                     key={section.name}
//                     className={`nav-dot ${currentSectionIndex === index ? 'active' : ''} ${hovered ? 'hover' : ''}`}
//                     onClick={() => onSectionClick(index)}
//                 >
//                     {isMobile ? '' : (hovered ? section.label : '')}
//                 </div>
//             ))}
//         </div>
//     );
// }
//
// export default SideNavigation;
import React, { useState, useEffect } from 'react';
import './SideNavigation.css';

function SideNavigation({ sections, currentSectionIndex, onSectionClick }) {
    const [hovered, setHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <div
            className="side-navigation"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {sections.map((section, index) => (
                <div
                    key={section.name}
                    className={`nav-dot${currentSectionIndex === index ? ' active' : ''}${hovered && !isMobile ? ' hover' : ''}`}
                    onClick={() => onSectionClick(index)}
                    title={section.label}
                >
                    {!isMobile && hovered ? section.label : ''}
                </div>
            ))}
        </div>
    );
}

export default SideNavigation;