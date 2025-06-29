import React from 'react';
import Section from './Section';
import { AnimateOnScroll } from './Animation';

const About = () => (
    <Section id="about" title="About">
        <AnimateOnScroll>
            <p className="max-w-4xl text-lg text-theme-text-secondary space-y-6">
                With over a decade of experience architecting mission-critical systems, my work is driven by a passion for solving complex puzzles at scale. I specialize in the convergence of cloud infrastructure, distributed systems, and robust security protocols to create technology ecosystems that are not only powerful but also elegant and maintainable.
                <br /><br />
                I believe in a first-principles approach, leading teams to build with clarity, purpose, and a forward-looking perspective. My goal is to translate ambitious business strategies into tangible, resilient technology assets. Outside of the digital realm, I enjoy delving into game theory and contributing to open-source cryptography projects.
            </p>
        </AnimateOnScroll>
    </Section>
);

export default About;