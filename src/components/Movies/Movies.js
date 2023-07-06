import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies() {

    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList>
                <>
                <MoviesCard icon={<button className="movie__icon-add link-button"></button>} />
                <MoviesCard icon={<button className="movie__icon-added link-button"></button>} />
                <MoviesCard icon={<button className="movie__icon-add link-button"></button>} />
                <MoviesCard icon={<button className="movie__icon-add link-button"></button>} />
                <MoviesCard icon={<button className="movie__icon-added link-button"></button>} />
                <MoviesCard icon={<button className="movie__icon-add link-button"></button>} />
                <MoviesCard icon={<button className="movie__icon-add link-button"></button>} />
                </>
            </MoviesCardList>
            <Footer />
        </>
    )
}


export default Movies;



