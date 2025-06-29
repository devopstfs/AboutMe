import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Section from './Section';
import { AnimateOnScroll } from './Animation';
import { implementationsData } from '../data/portfolioData';

const ProjectCard = ({ project, delay }) => (
    <AnimateOnScroll delay={delay}>
        <div className="bg-theme-surface rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-theme-primary/10 transition-all duration-300 transform hover:-translate-y-2 group h-full flex flex-col">
            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1E1E1E/ff0000?text=Image+Error'; }} />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-xl font-bold text-theme-text mb-2">{project.title}</h3>
                <p className="text-theme-text-secondary mb-4 text-sm flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-theme-primary/10 text-theme-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
                    ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-theme-primary group-hover:underline mt-auto outline-none focus-visible:ring-2 focus-visible:ring-theme-primary rounded-sm p-1 -m-1">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </div>
    </AnimateOnScroll>
);

const Implementations = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const displayedProjects = isExpanded ? implementationsData : implementationsData.slice(0, 8);

    return (
        <Section id="implementations" title="Featured Implementations">
            <div className="grid md:grid-cols-2 gap-8">
                {displayedProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} delay={index * 100} />
                ))}
            </div>
        </Section>
    );
};

export default Implementations;