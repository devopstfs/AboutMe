import React from 'react';
import { ChevronsDown } from 'lucide-react';
import { AnimateOnScroll, StaggeredText } from './Animation';
import headshot from '../assets/images/headshot.jpg';

const Hero = ({ isVisible }) => {
    return (
        <section id="home" className="min-h-screen flex items-center relative px-6 md:px-12 overflow-hidden">
            <div className="absolute inset-0 bg-grid-gold-900/[0.1] [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full max-w-7xl mx-auto">
                <div>
                    <StaggeredText text="Arun K Gangula" className="font-heading text-5xl md:text-7xl font-extrabold text-theme-text leading-tight tracking-tight" />
                    <h2 className="text-3xl md:text-5xl font-semibold text-theme-primary mt-2 font-heading">Programming Manager | Software Architect | Legacy System Modernization Expert </h2>
                    <AnimateOnScroll delay={600}>
                        <p className="mt-6 text-lg max-w-2xl text-theme-text-secondary">
                            I design and build resilient, high-performance digital infrastructures that empower enterprise-level organizations.
                            </p>
                        </AnimateOnScroll>
                    <AnimateOnScroll delay={800}>
                        <div className="mt-10 flex gap-4">
                            <a href="#contact" className="bg-theme-primary text-black font-semibold px-8 py-3 rounded-lg hover:bg-opacity-80 transition-all transform hover:scale-105 shadow-lg shadow-theme-primary/20 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-theme-background focus-visible:ring-black">Connect With Me</a>
                        </div>
                    </AnimateOnScroll>
                </div>
                <div className={`flex justify-center items-center transition-all duration-700 ease-out ${!isVisible ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
                    <div className="relative">
                        <div className="absolute inset-0 orbiting-lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <img src={headshot} alt="A professional headshot of Arun K Gangula" className="relative z-10 rounded-full w-80 h-80 lg:w-96 lg:h-96 object-cover shadow-2xl shadow-theme-primary/20" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <AnimateOnScroll delay={1200} className="animate-bounce">
                    <ChevronsDown className="text-theme-text-secondary" size={24} />
                </AnimateOnScroll>
            </div>
        </section>
    );
};

export default Hero;