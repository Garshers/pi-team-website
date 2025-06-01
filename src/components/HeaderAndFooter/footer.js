import React from 'react';

import Logo from "../../assets/Logo.PNG";
import ig from "../../assets/ig.png";
import fb from "../../assets/fb.png";
import yt from "../../assets/yt.png";
import mail from "../../assets/mail.png";

function Footer() {
    return (
        <footer>
            <div className="footer-frame">
                <div className="box1-3">
                    <div className="footerText">+48 795 502 007</div>
                    <div className="footerText">
                        Infolinia jest dostępna od poniedziałku do piątku, w godzinach od 9:00 do 21:00.
                    </div>
                </div>
                <div className="box1-3">
                    <img src={Logo} alt="Icon Logo" style={{ width: `60px`}} />
                    <div className="footer-mainText">Biuro Obsługi klienta</div>
                </div>
                <div className="box1-3">
                    <div className='box1-3-row'>
                        <img className="logo" src={mail} alt="Icon mail" />
                        <div className="footerText">kontakt@piteam.pl</div>
                    </div>
                    <div className='box1-3-row'>
                        <a href="https://www.instagram.com/p.i.team" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={ig} alt="Icon IG" />
                        </a>

                        <a href="https://www.facebook.com/iza.pawik" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={fb} alt="Icon FB" />
                        </a>

                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                        <img className="logo" src={yt} alt="Icon YT" style={{width: `40px`}}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;