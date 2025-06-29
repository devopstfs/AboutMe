import React from 'react';
import Section from './Section';
import { AnimateOnScroll } from './Animation';
import { technologiesData } from '../data/portfolioData';

const Technologies = () => (
    <Section id="technologies" title="Technical Expertise">
        <div className="flex flex-wrap justify-center gap-3">
            {technologiesData.map((tech, index) => (
                <AnimateOnScroll key={index} delay={index * 25}>
                    <div className="bg-theme-surface border border-transparent hover:border-theme-primary text-theme-text-secondary hover:text-theme-primary px-4 py-2 rounded-lg transition-all cursor-default shadow-md">
                        {tech}
                    </div>
                </AnimateOnScroll>
            ))}
        </div>
    </Section>
);

export default Technologies;