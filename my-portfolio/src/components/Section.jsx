import React from 'react';
import { AnimateOnScroll } from './Animation';

const Section = ({ id, title, children }) => (
    <section id={id} className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
            <AnimateOnScroll className="group">
                <h2 className="font-heading text-4xl font-bold text-theme-text mb-4">{title}</h2>
                <div className="w-24 h-1 bg-theme-primary mb-12 origin-left transition-transform duration-700 ease-out scale-x-0 group-data-[visible=true]:scale-x-100"></div>
            </AnimateOnScroll>
            {children}
        </div>
    </section>
);

export default Section;