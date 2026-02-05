import React, { useState } from 'react';
import './jumpbar.css';

export default function Jumpbar() {
    const [isVisible, setIsVisible] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`jumpbar ${isVisible ? 'visible' : ''}`}>
            <button onClick={() => scrollToSection('top')}>Top</button>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
            <button onClick={() => scrollToSection('aboutme')}>About Me</button>
        </nav>
    );
}