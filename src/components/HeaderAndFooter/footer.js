import React from 'react';

import Logo from "../../assets/Logo.PNG";
import ig from "../../assets/ig.png";
import fb from "../../assets/fb.png";
import yt from "../../assets/yt.png";
import mail from "../../assets/mail.png";

function Footer() {
    return (
        <footer role="contentinfo" className="site-footer">
            <div className="gymCheckAlsoContainer">
                <a href="/treningi-plywackie" className="gymCheckAlsoBox">Treningi Pływackie</a>
                <a href="/kurs-trenera-personalnego" className="gymCheckAlsoBox">Kursy Trenera Personalnego</a>
                <a href="/obozy-sportowe" className="gymCheckAlsoBox">Obozy Sportowe</a>
                <a href="/masaze" className="gymCheckAlsoBox">Masaże</a>
            </div>
            <div className="footer-frame">
                <div className="box1-3">
                    <div className="footerText">
                        <a href="tel:+48795502007" aria-label="Zadzwoń do nas: +48 795 502 007">
                            +48 795 502 007
                        </a>
                    </div>
                    <div className="footerText">
                        Infolinia jest dostępna od poniedziałku do piątku, w godzinach od 9:00 do 21:00.
                    </div>
                </div>
                <div className="box1-3">
                    <img 
                        src={Logo} 
                        alt="P.I. Team - logo firmy" 
                        loading="lazy"
                        width="60"
                        height="auto"
                    />
                    <h3 className="footer-mainText">Biuro Obsługi Klienta</h3>
                </div>
                <div className="box1-3">
                    <div className='box1-3-row' itemScope itemType="https://schema.org/ContactPoint">
                        <img 
                            className="logo" 
                            src={mail} 
                            alt="Ikona email" 
                            loading="lazy"
                            width="24"
                            height="24"
                        />
                        <div className="footerText">
                            <a 
                                href="mailto:kontakt@piteam.pl" 
                                itemProp="email"
                                aria-label="Wyślij email na adres kontakt@piteam.pl"
                            >
                                kontakt@piteam.pl
                            </a>
                        </div>
                    </div>
                    <div className='box1-3-row' role="navigation" aria-label="Media społecznościowe">
                        <a 
                            href="https://www.instagram.com/p.i.team" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Odwiedź nasz profil na Instagramie (otwiera w nowej karcie)"
                            title="P.I. Team na Instagramie"
                        >
                            <img 
                                className="logo" 
                                src={ig} 
                                alt="Instagram P.I. Team" 
                                loading="lazy"
                                width="24"
                                height="24"
                            />
                        </a>
                       { /*
                        <a 
                            href="https://www.facebook.com/iza.pawik" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Odwiedź nasz profil na Facebooku (otwiera w nowej karcie)"
                            title="P.I. Team na Facebooku"
                        >
                            <img 
                                className="logo" 
                                src={fb} 
                                alt="Facebook P.I. Team" 
                                loading="lazy"
                                width="24"
                                height="24"
                            />
                        </a>

                        <a 
                            href="https://www.youtube.com/channel/YOUR_CHANNEL_ID" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Odwiedź nasz kanał YouTube (otwiera w nowej karcie)"
                            title="P.I. Team na YouTube"
                        >
                            <img 
                                className="logo" 
                                src={yt} 
                                alt="YouTube P.I. Team" 
                                style={{width: `40px`}}
                                loading="lazy"
                                width="40"
                                height="30"
                            />
                        </a>*/}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;