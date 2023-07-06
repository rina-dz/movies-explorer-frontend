import React from 'react';
import "./AboutProject.css";

function AboutProject() {

    return (
        <section className="project">
            <div className="project__title-container">
                <h2 className="project__title">О проекте</h2>
            </div>
            <div className="project__article-container">
                <article className="project__article">
                    <h3 className="project__article-title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="project__article-text">
                        Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.
                    </p>
                </article>
                <article className="project__article">
                    <h3 className="project__article-title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="project__article-text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                        соблюдать, чтобы успешно защититься.
                    </p>
                </article>
            </div>
            <div className="project__container">
                <div className="project__frontend">
                    <button className="project__frontend-button">1 неделя</button>
                    <p className="project__frontend-text">Back-end</p>
                </div>
                <div className="project__backend">
                    <button className="project__backend-button">4 недели</button>
                    <p className="project__backend-text">Front-end</p>
                </div>
            </div>
        </section>

    )
}


export default AboutProject;