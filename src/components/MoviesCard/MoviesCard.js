import React from 'react';
import "./MoviesCard.css";
import movie_image from '../../images/pic1.png';

function MoviesCard(props) {

    // <button className="movie__icon link-button"></button>

    return (
        <article className="movie">
            <div className="movie__container">
                <div className="movie__info">
                    <h2 className="movie__title">33 слова о дизайне</h2>
                    <p className="movie__duration">1ч 47м</p>
                </div>
                {props.icon}
            </div>
            <img className="movie__image" src={movie_image} alt="Постер фильма" />
        </article>

    )
}


export default MoviesCard;