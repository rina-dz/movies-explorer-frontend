import React from 'react';
import "./Footer.css";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__copyright">© {year}. Арина Дзядзина</p>
                <ul className="footer__links">
                    <li>
                        <a className="footer__link link-button" href='https://practicum.yandex.ru/' target="_blank" rel="noreferrer" >
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li>
                        <a className="footer__link link-button" href='https://github.com/' target="_blank" rel="noreferrer" >
                            Github
                        </a>
                    </li>
                </ul>
                <p className="footer__hiden-copyright">© {year}</p>
            </div>
        </footer>
    )
}


export default Footer;