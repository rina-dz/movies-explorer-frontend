import React from 'react';
import "./MoviesCardList.css";
//import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

    return (
        <>
            <section className="movies">
                {props.children}
            </section>
            <section className="movies__container">
                <button className="movies__button link-button">Ещё</button>
            </section>
        </>
    )
}


export default MoviesCardList;



