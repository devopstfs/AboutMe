import React, { useState, useEffect, useRef } from 'react';
import VerticalNav from './components/VerticalNav';
import StickyImage from './components/StickyImage';
import Hero from './components/Hero';
import About from './components/About';
import Implementations from './components/Implementations';
import Contributions from './components/Contributions';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

const themeColors = {
    dark: {
        background: '#121212',
        surface: '#1E1E1E',
        primary: '#D4AF37',
        text: '#E0E0E0',
        textSecondary: '#A0A0A0',
    },
    light: {
        background: '#F5F5F5',
        surface: '#FFFFFF',
        primary: '#B8860B',
        text: '#212121',
        textSecondary: '#5f6368',
    },
};

export default function App() {
    const [theme, setTheme] = useState('dark');
    const [currentSection, setCurrentSection] = useState('home');
    const [isHeroVisible, setIsHeroVisible] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [visibleSections, setVisibleSections] = useState({});
    const heroRef = useRef(null);

    const navLinksOrder = ["home", "about", "implementations", "contributions", "technologies", "contact"];

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        const colors = themeColors[theme];
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');
        root.classList.add(theme);
        Object.keys(colors).forEach(key => root.style.setProperty(`--color-${key}`, colors[key]));
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = window.scrollY / totalHeight;
            setScrollProgress(progress);
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setVisibleSections(prev => ({ ...prev, [entry.target.id]: entry.isIntersecting }));
            });
        }, { rootMargin: "-40% 0px -60% 0px" });

        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => observer.observe(section));

        const heroObserver = new IntersectionObserver(([entry]) => {
            setIsHeroVisible(entry.isIntersecting);
        }, { threshold: 0.1 });
        if (heroRef.current) heroObserver.observe(heroRef.current);

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            sections.forEach(section => observer.unobserve(section));
            if (heroRef.current) heroObserver.unobserve(heroRef.current);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        let activeSection = '';
        navLinksOrder.forEach(sectionId => {
            if (visibleSections[sectionId]) {
                activeSection = sectionId;
            }
        });

        if (activeSection) {
            setCurrentSection(activeSection);
        } else if (Object.values(visibleSections).every(v => !v)) {
            const lastVisible = Object.keys(visibleSections).reverse().find(key => visibleSections[key]);
            if (lastVisible) setCurrentSection(lastVisible);
        }

    }, [visibleSections]);

    return (
        <>
            <div className={`transition-colors duration-500`}>
                <VerticalNav currentSection={currentSection} scrollProgress={scrollProgress} theme={theme} toggleTheme={toggleTheme} />
                <StickyImage isHeroVisible={isHeroVisible} />
                <div className="md:pl-36">
                    <main>
                        <div ref={heroRef}><Hero isVisible={isHeroVisible} /></div>
                        <About />
                        <Implementations />
                        <Contributions />
                        <Technologies />
                        <Contact />
                    </main>
                </div>
            </div>
        </>
    );
}