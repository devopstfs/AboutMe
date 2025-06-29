import React from 'react';
import { Sun, Moon } from 'lucide-react';

const VerticalNav = ({ currentSection, scrollProgress, theme, toggleTheme }) => {
    const navLinks = [
        { id: "home", title: "Home" },
        { id: "about", title: "About" },
        { id: "implementations", title: "Projects" },
        { id: "contributions", title: "Contributions" },
        { id: "technologies", title: "Skills" },
        { id: "contact", title: "Contact" },
    ];

    return (
        <nav className="hidden md:flex flex-col items-start justify-center w-36 fixed top-0 left-0 h-full z-50 p-8">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-theme-primary/20">
                <div
                    className="absolute left-0 top-0 w-full bg-theme-primary transition-all duration-200 ease-linear"
                    style={{ height: `${scrollProgress * 100}%` }}
                ></div>
            </div>
            <div className="flex flex-col gap-4 relative pl-6">
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        aria-label={link.title}
                        className={`font-nav uppercase tracking-widest text-sm transition-all duration-300 ${currentSection === link.id ? 'text-theme-primary font-semibold' : 'text-theme-text-secondary hover:text-theme-primary'}`}
                    >
                        {link.title}
                    </a>
                ))}
            </div>
            <div className="mt-auto pl-4">
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    className="p-2 rounded-full text-theme-text-secondary hover:text-theme-primary hover:bg-theme-primary/10 transition-all outline-none focus-visible:ring-2 focus-visible:ring-theme-primary"
                >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>
        </nav>
    );
};

export default VerticalNav;