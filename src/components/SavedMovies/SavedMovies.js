import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {

    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList>
                <>
                <MoviesCard icon={<button className="movie__icon-delete link-button"></button>} />
                <MoviesCard icon={<button className="movie__icon-delete link-button"></button>} />
                <MoviesCard icon={<button className="movie__icon-delete link-button"></button>} />
                <MoviesCard icon={<button className="movie__icon-delete link-button"></button>} />
                <MoviesCard icon={<button className="movie__icon-delete link-button"></button>} />
                </>
            </MoviesCardList>
            <Footer />
        </>
    )
}


export default SavedMovies;



