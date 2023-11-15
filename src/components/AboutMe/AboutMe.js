import React from 'react';
import "./AboutMe.css";
import aboutme_png from '../../images/aboutme_png.png';

function AboutMe() {

    return (
        <section className="aboutme" id='aboutme'>
            <div className="aboutme__title-container">
                <h2 className="aboutme__title">Студент</h2>
            </div>
            <article className="aboutme__article">
                <div className="aboutme__text-container">
                    <img className="aboutme__article-hidden-img" src={aboutme_png} alt="фото студента" />
                    <h3 className="aboutme__article-title">Арина</h3>
                    <h4 className="aboutme__article-description">
                        Фронтенд-разработчик, 20 лет
                    </h4>
                    <p className="aboutme__article-text">
                        Я родилась и живу в Москве. Чуть более года назад меня заинтересовала веб-разработка, а затем,
                        когда по прошествии времени интерес не прошёл, я решила основательно заняться изучением 
                        этой сферы - именно так я попала на курс веб-разработки от Яндекс.Практикума. Сейчас, когда 
                        уверенности в собственных знаниях стало больше, я занимаюсь активным поиском работы.
                    </p>
                    <a className="aboutme__article-link link-button" href='https://github.com/rina-dz' target="_blank" rel="noreferrer" >Github</a>
                </div>
                <img className="aboutme__article-img" src={aboutme_png} alt="фото студента" />
            </article>
        </section>

    )
}


export default AboutMe;