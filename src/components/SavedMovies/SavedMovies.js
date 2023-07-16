import React from 'react';
import "./SavedMovies.css";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
    const [visibleMovies, addMorevisibleMovies] = React.useState([]);

    React.useEffect(() => {
        checkAndResize();
        window.addEventListener('resize', checkAndResize);
        return () => {
            window.removeEventListener('resize', checkAndResize);
        }
    }, []);

    function checkAndResize() {
        let movies = JSON.parse(localStorage.savedMovies);
        if (window.innerWidth >= 1280) {
            addMorevisibleMovies(movies.slice(0, 12));
        }
        if (window.innerWidth < 1280 && window.innerWidth > 480) {
            addMorevisibleMovies(movies.slice(0, 8));
        }
        if (window.innerWidth <= 480 && window.innerWidth > 319) {
            addMorevisibleMovies(movies.slice(0, 5));
        }
    };

    function addMoreMovies() {
        let movies = JSON.parse(localStorage.savedMovies);
        if (window.innerWidth >= 1280) {
            addMorevisibleMovies(movies.slice(0, visibleMovies.length + 3));
        }
        if (window.innerWidth < 1280 && window.innerWidth > 480) {
            addMorevisibleMovies(movies.slice(0, visibleMovies.length + 2));
        }
        if (window.innerWidth <= 480 && window.innerWidth > 319) {
            addMorevisibleMovies(movies.slice(0, visibleMovies.length + 2));
        }
    }

    function moviesSearching(name, checkbox) {
        props.movieSearch(name, checkbox, checkAndResize);
    }

    function movieDelete(movie) {
        props.handleMovieDelete(movie, checkAndResize);
    }

    return (
        <>
            <Header openNavTabMenu={props.openNavTabMenu} mainHeader={false} />
            <main>
                <SearchForm movieSearch={moviesSearching} checkbox={false} nameValue={''} />
                {JSON.parse(localStorage.savedMovies).length > 0 ? (
                    <MoviesCardList anyMoreMovies={JSON.parse(localStorage.savedMovies).length === visibleMovies.length ? false : true} moreMovies={addMoreMovies}>
                        {visibleMovies.map((el) => (
                            <MoviesCard movie={el} key={el.movieId} image={el.image.url} nameRU={el.nameRU} duration={el.duration} isSaved={'saved-movies'}
                                trailerLink={el.trailerLink} handleMovieDelete={movieDelete} handleMovieSave={props.handleMovieSave} />
                        ))}
                    </MoviesCardList>
                ) : (
                    <p className='saved-movies__text'>Ничего не найдено</p>
                )}
            </main >
            <Footer />
        </>
    )
}


export default SavedMovies;



