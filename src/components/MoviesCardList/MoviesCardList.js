import React from 'react';
import "./MoviesCardList.css";
//import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

    return (
        <section className="movies">
            <div className="movies__container">
                {props.children}
            </div>
            <div className="movies__more">
                <button className="movies__more-button link-button">Ещё</button>
            </div>
        </section>
    )
}


export default MoviesCardList;



