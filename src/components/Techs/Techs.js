import React from 'react';
import "./Techs.css";

function Techs() {

    return (
        <section className="techs" id='techs'>
            <div className="techs__title-container">
                <h2 className="techs__title">Технологии</h2>
            </div>
            <article className="techs__article">
                <h3 className="techs__article-title">7 технологий</h3>
                <p className="techs__article-text">
                    На курсе веб-разработки мы освоили технологии, которые применили в
                    дипломном проекте.
                </p>
            </article>
            <ul className="techs__technologies">
                <li>
                    <button className="techs__technology">HTML</button>
                </li>
                <li>
                    <button className="techs__technology">CSS</button>
                </li>
                <li>
                    <button className="techs__technology">JS</button>
                </li>
                <li>
                    <button className="techs__technology">React</button>
                </li>
                <li>
                    <button className="techs__technology">Git</button>
                </li>
                <li>
                    <button className="techs__technology">Express.js</button>
                </li>
                <li>
                    <button className="techs__technology">mongoDB</button>
                </li>
            </ul>
        </section>

    )
}


export default Techs;