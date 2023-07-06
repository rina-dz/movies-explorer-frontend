import React from 'react';
import { Link } from 'react-router-dom';
import "./Portfolio.css";

function Portfolio() {

    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <Link className="portfolio__link link-button">
                <h3 className="portfolio__link-name">Статичный сайт</h3>
                <p className="portfolio__link-icon">↗</p>
            </Link>
            <Link className="portfolio__link link-button">
                <h3 className="portfolio__link-name">Адаптивный сайт</h3>
                <p className="portfolio__link-icon">↗</p>
            </Link>
            <Link className="portfolio__link link-button">
                <h3 className="portfolio__link-name">Одностраничное приложение</h3>
                <p className="portfolio__link-icon">↗</p>
            </Link>
        </section>
    )
}


export default Portfolio;