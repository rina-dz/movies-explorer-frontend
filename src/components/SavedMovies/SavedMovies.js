import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {

    return (
        <>
            <Header openNavTabMenu={props.openNavTabMenu} mainHeader={false} />
            <main>
                <SearchForm />
                <MoviesCardList>
                    <MoviesCard icon={<button className="movie__icon-delete link-button"></button>} />
                    <MoviesCard icon={<button className="movie__icon-delete link-button"></button>} />
                    <MoviesCard icon={<button className="movie__icon-delete link-button"></button>} />
                    <MoviesCard icon={<button className="movie__icon-delete link-button"></button>} />
                    <MoviesCard icon={<button className="movie__icon-delete link-button"></button>} />
                </MoviesCardList>
            </main>
            <Footer />
        </>
    )
}


export default SavedMovies;



