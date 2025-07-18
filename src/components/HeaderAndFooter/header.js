import React, { useState, useEffect } from 'react';
import Logo from "../../assets/Logo.PNG";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 650);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { label: 'Oferta', path: '/', ariaLabel: 'Przejdź na stronę oferty' },
        { label: 'O Nas', path: '/o-nas', ariaLabel: 'Przejdź na stronę o nas' },
        { label: 'Kadra', path: '/kadra', ariaLabel: 'Przejdź na stronę kadry' },
        { label: 'Kontakt', path: '/kontakt', ariaLabel: 'Przejdź na stronę kontaktu' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 650);
            if (window.innerWidth >= 650) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (path) => {
        window.location.href = path;
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        handleNavigation('/');
    };

    const handleMenuItemClick = (e, path) => {
        e.preventDefault();
        handleNavigation(path);
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    const handleKeyDown = (e, path) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleNavigation(path);
            if (isMobile) {
                setIsMenuOpen(false);
            }
        }
    };

    const handleHamburgerKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    };

    return (
        <header role="banner">
            <div 
                id="header-frame" 
                className={`header-frame ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
            >
                <div className="leftBox">
                    <a 
                        href="/" 
                        onClick={handleLogoClick}
                        aria-label="P.I. Team - przejdź na stronę główną"
                        title="Strona główna P.I. Team"
                    >
                        <img 
                            src={Logo} 
                            alt="P.I. Team - logo firmy"
                            loading="eager"
                            width="60"
                            height="auto"
                        />
                    </a>
                </div>
                <div className="rightBox">
                    {isMobile ? (
                        <button 
                            className="hamburger-menu" 
                            onClick={toggleMenu}
                            onKeyDown={handleHamburgerKeyDown}
                            aria-label={isMenuOpen ? "Zamknij menu nawigacyjne" : "Otwórz menu nawigacyjne"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            type="button"
                        >
                            <span aria-hidden="true">&#x2630;</span>
                        </button>
                    ) : (
                        <nav role="navigation" aria-label="Menu główne">
                            <div className="menuButton">
                                {menuItems.map((item) => (
                                    <a
                                        key={item.path}
                                        href={item.path}
                                        className="menuText"
                                        onClick={(e) => handleMenuItemClick(e, item.path)}
                                        onKeyDown={(e) => handleKeyDown(e, item.path)}
                                        aria-label={item.ariaLabel}
                                        tabIndex="0"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </nav>
                    )}
                </div>
                {isMobile && isMenuOpen && (
                    <nav 
                        className="mobile-menu"
                        id="mobile-menu"
                        role="navigation" 
                        aria-label="Menu mobilne"
                    >
                        {menuItems.map((item) => (
                            <a
                                key={item.path}
                                href={item.path}
                                className="menuText"
                                onClick={(e) => handleMenuItemClick(e, item.path)}
                                onKeyDown={(e) => handleKeyDown(e, item.path)}
                                aria-label={item.ariaLabel}
                                tabIndex="0"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}