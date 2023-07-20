import React from 'react';
import "./MoviesCard.css";

function MoviesCard(props) {

   const image_src = props.isSaved === 'saved-movies' ? props.movie.image : `https://api.nomoreparties.co/${props.image}`;

    const duration = () => {
        if (props.duration < 60) {
            return props.duration + 'м';
        }
        if (props.duration === 60) {
            return '1ч';
        }
        if (props.duration > 60) {
            return (props.duration / 60 | 0) + "ч"
                + " " + props.duration % 60 + "м";
        }
    }

    function deleteMovie() {
        props.handleMovieDelete(props.movie);
    }

    function saveMovie() {
        props.handleMovieSave(props.movie);
    }

    function iconButton() {
        if (props.isSaved === 'saved-movies') {
            return (
                <button className='link-button movie__icon-delete' onClick={deleteMovie}></button>
            )
        }
        if (props.isSaved(props.movie)) {
            return (
                <button className='link-button movie__icon-added' onClick={deleteMovie}></button>
            )
        } else {
            return (
                <button className='link-button movie__icon-add' onClick={saveMovie}></button>
            )
        }
    }

    return (
        <article className="movie">
            <div className="movie__container">
                <div className="movie__info">
                    <h2 className="movie__title">{props.nameRU}</h2>
                    <p className="movie__duration">{duration()}</p>
                </div>
               {iconButton()}
            </div>
            <a className="movie__link" href={props.trailerLink} target="_blank" rel="noreferrer">
                <img className="movie__image" src={image_src} alt="Постер фильма" />
            </a>
        </article>

    )
}


export default MoviesCard;