import React, { useState, useEffect } from 'react';
import Logo from "../../assets/Logo.PNG";

/**
 * @function Header
 * @returns {JSX.Element} - The header component for the website, displaying the logo and navigation.
 * The navigation adapts for mobile and desktop views.
 */
export function Header() {
    /**
     * @constant {boolean} isScrolled - State variable to track if the page has been scrolled.
     * Updated based on the window's scroll position.
     */
    const [isScrolled, setIsScrolled] = useState(false);

    /**
     * @constant {boolean} isMobile - State variable to determine if the screen width is below a certain threshold (650px).
     * Updated on window resize.
     */
    const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

    /**
     * @constant {boolean} isMenuOpen - State variable to control the visibility of the mobile menu.
     * Toggled by the hamburger menu icon.
     */
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
    { label: 'Oferta', path: '/' },
    { label: 'O Nas', path: '/o-nas' },
    { label: 'Kadra', path: '/kadra' },
    { label: 'Kontakt', path: '/kontakt' },
    { label: 'Galeria', path: '/galeria' },
];

    /**
     * @useEffect
     * Listens for scroll events on the window to update the `isScrolled` state.
     * This can be used to change the header's appearance on scroll.
     * @returns {Function} - Cleanup function to remove the event listener on component unmount.
     */
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /**
     * @useEffect
     * Listens for resize events on the window to update the `isMobile` state.
     * Also closes the mobile menu if the screen width becomes large enough.
     * @returns {Function} - Cleanup function to remove the event listener on component unmount.
     */
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

    /**
     * @function toggleMenu
     * Toggles the `isMenuOpen` state, controlling the visibility of the mobile navigation menu.
     */
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
                {/* Conditional rendering for mobile and desktop navigation. */}
                {isMobile ? ( // Hamburger menu for mobile view.
                    <div className="hamburger-menu" onClick={toggleMenu}>
                        &#x2630;
                    </div>
                ) : (// Regular menu display for desktop view.
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
                {/* Conditional rendering of the mobile menu when it's open and the view is mobile. */}
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