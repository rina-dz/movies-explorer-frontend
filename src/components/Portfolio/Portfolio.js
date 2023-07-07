import React from 'react';
import "./Portfolio.css";

function Portfolio() {

    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <a className="portfolio__link link-button" href='https://rina-dz.github.io/how-to-learn/' target="_blank" rel="noreferrer" >
                <h3 className="portfolio__link-name">Статичный сайт</h3>
                <p className="portfolio__link-icon">↗</p>
            </a>
            <a className="portfolio__link link-button" href='https://rina-dz.github.io/russian-travel/' target="_blank" rel="noreferrer" >
                <h3 className="portfolio__link-name">Адаптивный сайт</h3>
                <p className="portfolio__link-icon">↗</p>
            </a>
            <a className="portfolio__link link-button" href='https://rina-dz.github.io/mesto-react/' target="_blank" rel="noreferrer" >
                <h3 className="portfolio__link-name">Одностраничное приложение</h3>
                <p className="portfolio__link-icon">↗</p>
            </a>
        </section>
    )
}


export default Portfolio;