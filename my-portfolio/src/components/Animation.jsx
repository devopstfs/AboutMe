import React, { useState, useEffect, useRef } from 'react';

export const AnimateOnScroll = ({ children, className = '', delay = 0 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, []);

    return (
        <div
            ref={ref}
            data-visible={isVisible}
            className={`${className} transition-all ease-out duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export const StaggeredText = ({ text, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, []);

    return (
        <h1 className={className} aria-label={text}>
            {text.split(' ').map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-2">
                    <span className={`inline-block transition-transform duration-700 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                        {word}&nbsp;
                    </span>
                </span>
            ))}
        </h1>
    );
};