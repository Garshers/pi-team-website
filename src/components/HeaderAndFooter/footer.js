import React from 'react';

import Logo from "../../assets/Logo.PNG";
import ig from "../../assets/ig.png";
import fb from "../../assets/fb.png";
import tel from "../../assets/tel.png";
import mail from "../../assets/mail.png";

function Footer() {
    return (
        <footer role="contentinfo" className="site-footer">
            <div className="footer-frame">
                <div className="box1-3" style={{alignItems: 'start', paddingLeft: '5svw'}}>
                    <div className="footerText">
                        Skontaktuj się z nami:
                    </div>
                    <div className='box1-3-row' itemScope itemType="https://schema.org/ContactPoint">
                        <img 
                            className="logo" 
                            src={mail} 
                            alt="Ikona email" 
                            loading="lazy"
                        />
                        <div className="footerText">
                            <a 
                                href="mailto:poczta@piteam.pl" 
                                itemProp="email"
                                aria-label="Wyślij email na adres poczta@piteam.pl"
                            >
                                poczta@piteam.pl
                            </a>
                        </div>
                    </div>
                    <div className='box1-3-row' itemScope itemType="https://schema.org/ContactPoint">
                        <img 
                            className="logo" 
                            src={tel} 
                            alt="Ikona telefonu" 
                            loading="lazy"
                        />
                        <div className="footerText">
                            <a href="tel:+48795502007" aria-label="Zadzwoń do nas: +48 795 502 007">
                                +48 795 502 007
                            </a>
                        </div>
                    </div>
                </div>
                <div className="box1-3" style={{alignItems: 'center'}}>
                    <img 
                        src={Logo} 
                        alt="PITEAM - logo firmy" 
                        loading="lazy"
                        width="100px"
                        height="auto"
                    />
                </div>
                <div className="box1-3" style={{alignItems: 'flex-end', paddingRight: '5svw'}}>
                    <div className="footerText" style={{textAlign: 'end'}}>
                        Odwiedź nas na mediach społecznościowych:
                    </div>
                    <div className='box1-3-row' style={{justifyContent: 'end'}} role="navigation" aria-label="Media społecznościowe">
                        <a 
                            href="https://www.instagram.com/p.i.team" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Odwiedź nasz profil na Instagramie (otwiera w nowej karcie)"
                            title="PITEAM na Instagramie"
                        >
                            <img 
                                className="logo" 
                                src={ig} 
                                alt="Instagram PITEAM" 
                                loading="lazy"
                            />
                        </a>
                        <a 
                            href="https://www.facebook.com/patryk.iwaszczyszyn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Odwiedź nasz profil na Facebooku (otwiera w nowej karcie)"
                            title="PITEAM na Facebooku"
                        >
                            <img 
                                className="logo" 
                                src={fb} 
                                alt="Facebook PITEAM" 
                                loading="lazy"
                                width="24"
                                height="24"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;