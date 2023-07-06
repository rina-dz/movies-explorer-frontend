import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link className="footer__link link-button" to="#">
                            Яндекс.Практикум
                        </Link>
                    </li>
                    <li>
                        <Link className="footer__link link-button" to="#">
                            Github
                        </Link>
                    </li>
                </ul>
                <p className="footer__hiden-copyright">© {year}</p>
            </div>
        </footer>
    )
}


export default Footer;