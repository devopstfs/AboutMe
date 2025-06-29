import React from 'react';
import headshot from '../assets/images/headshot.jpg';

const StickyImage = ({ isHeroVisible }) => (
    <div className={`fixed top-6 right-6 z-50 transition-all duration-500 ease-in-out ${!isHeroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} pointer-events-none`}>
        <img src={headshot} alt="Arun K Gangula" className="rounded-full w-20 h-20 object-cover shadow-2xl shadow-theme-primary/20 border-2 border-theme-primary/50" />
    </div>
);

export default StickyImage;