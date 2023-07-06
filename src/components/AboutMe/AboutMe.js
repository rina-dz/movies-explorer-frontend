import React from 'react';
import { Link } from 'react-router-dom';
import "./AboutMe.css";
import aboutme_png from '../../images/aboutme_png.png';

function AboutMe() {

    return (
        <section className="aboutme">
            <div className="aboutme__title-container">
                <h2 className="aboutme__title">Студент</h2>
            </div>
            <article className="aboutme__article">
                <div className="aboutme__text-container">
                    <img className="aboutme__article-hidden-img" src={aboutme_png} alt="фото студента" />
                    <h3 className="aboutme__article-title">Виталий</h3>
                    <h4 className="aboutme__article-description">
                        Фронтенд-разработчик, 30 лет
                    </h4>
                    <p className="aboutme__article-text">
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
                        есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно
                        начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
                        как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и
                        ушёл с постоянной работы.
                    </p>
                    <Link className="aboutme__article-link link-button">Github</Link>
                </div>
                <img className="aboutme__article-img" src={aboutme_png} alt="фото студента" />
            </article>
        </section>

    )
}


export default AboutMe;