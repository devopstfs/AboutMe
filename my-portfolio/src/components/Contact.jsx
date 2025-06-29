import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import Section from './Section';
import { AnimateOnScroll } from './Animation';

const Contact = () => (
    <Section id="contact" title="Connect">
        <AnimateOnScroll className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-theme-text-secondary mb-8">
                I am currently available for consulting engagements and advisory roles. If you have a challenge that requires strategic technological leadership, I would be delighted to hear from you.
            </p>
            <div className="flex justify-center gap-6">
                <a href="https://github.com/arunkgangula" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-4 bg-theme-surface rounded-full text-theme-text-secondary hover:text-theme-primary hover:scale-110 transition-all transform duration-300 shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 focus-visible:ring-offset-theme-background">
                    <Github className="h-8 w-8" />
                </a>
                <a href="https://www.linkedin.com/in/argangula/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-4 bg-theme-surface rounded-full text-theme-text-secondary hover:text-theme-primary hover:scale-110 transition-all transform duration-300 shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 focus-visible:ring-offset-theme-background">
                    <Linkedin className="h-8 w-8" />
                </a>
            </div>
        </AnimateOnScroll>
    </Section>
);

export default Contact;