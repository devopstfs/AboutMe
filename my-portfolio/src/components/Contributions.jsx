import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Section from './Section';
import { AnimateOnScroll } from './Animation';
import { contributionsData } from '../data/portfolioData';

const ResearchCard = ({ work, delay }) => (
    <AnimateOnScroll delay={delay} className="h-full">
        <div className="bg-theme-surface p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-theme-primary/10 transition-all duration-300 transform hover:-translate-y-1 group border-l-4 border-theme-primary/20 hover:border-theme-primary h-full flex flex-col">
            <h3 className="font-heading text-lg font-bold text-theme-text mb-2">{work.title}</h3>
            <p className="text-theme-text-secondary mb-4 text-sm flex-grow">{work.description}</p>
            <a href={work.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-theme-primary group-hover:underline mt-auto outline-none focus-visible:ring-2 focus-visible:ring-theme-primary rounded-sm p-1 -m-1">
                Read Publication <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
        </div>
    </AnimateOnScroll>
);

const Contributions = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const displayedResearch = contributionsData.slice(0, isExpanded ? contributionsData.length : 5);

    return (
        <Section id="contributions" title="Scholarly Contributions">
            <div className="grid md:grid-cols-2 gap-6">
                {displayedResearch.map((work, index) => (
                    <ResearchCard key={work.id} work={work} delay={index * 100} />
                ))}
            </div>
            <div className="text-center mt-12">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="bg-theme-surface text-theme-text font-semibold px-8 py-3 rounded-lg hover:bg-opacity-80 transition-all transform hover:scale-105 shadow-lg border border-theme-primary/20 hover:border-theme-primary outline-none focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 focus-visible:ring-offset-theme-background"
                >
                    {isExpanded ? 'Show Less' : 'View Full Archive'}
                </button>
            </div>
        </Section>
    );
};

export default Contributions;