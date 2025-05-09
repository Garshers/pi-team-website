import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from "../../assets/Logo.png";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 650);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Treningi personalne', path: '/training' },
        { label: 'Rozpiski żywieniowe i treningowe', path: '/schedules' },
        { label: 'Prowadzenie online', path: '/online' },
        { label: 'Kompleksowe podejście', path: '/approach' },
        { label: 'Osiągnięcie wymarzonej sylwetki', path: '/figure' },
        { label: 'Interpretacja wyników badań krwi', path: '/blood' },
        { label: 'Stały monitoring efektów', path: '/watch' },
        { label: 'Wykwalifikowana kadra', path: '/cadre' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 650);
            if (window.innerWidth >= 650) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            
            <div id="header-frame" className={`header-frame ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`} >
                <div className="leftBox">
                    <img className="responsive-image" src={Logo} alt="PITeam logo" onClick={() => window.location.href = '/'}/>
                </div>
                <div className="rightBox">
                {isMobile ? (
                    <div className="hamburger-menu" onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </div>
                ) : (
                    <div className="menuButton">
                        <div className="menuButton">
                        {menuItems.map((item) => (
                            <div key={item.path} className="menuText" onClick={() => window.location.href = item.path}>
                            {item.label}
                            </div>
                        ))}
                        </div>
                    </div>
                )}
                </div>
                {isMobile && isMenuOpen && (
                    <div className="mobile-menu">
                        {menuItems.map((item) => (
                            <div key={item.path} className="menuText" onClick={() => { window.location.href = item.path; setIsMenuOpen(false); }}>
                            {item.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
}