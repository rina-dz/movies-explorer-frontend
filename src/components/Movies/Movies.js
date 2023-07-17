import React from 'react';
import "./Movies.css";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies(props) {
    const [visibleMovies, addMorevisibleMovies] = React.useState([]);

    React.useEffect(() => {
        checkAndResize();
        window.addEventListener('resize', checkAndResize);
        return () => {
            window.removeEventListener('resize', checkAndResize);
        }
    }, []);

    function checkAndResize() {
        let movies = JSON.parse(localStorage.searchedMovies);
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
        let movies = JSON.parse(localStorage.searchedMovies);
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
                <SearchForm movieSearch={moviesSearching} checkbox={JSON.parse(localStorage.checkboxState)} nameValue={localStorage.keyWords} />
                {JSON.parse(localStorage.searchedMovies).length > 0 ? (
                    <MoviesCardList anyMoreMovies={JSON.parse(localStorage.searchedMovies).length === visibleMovies.length ? false : true} moreMovies={addMoreMovies}>
                        {visibleMovies.map((el) => (
                            <MoviesCard movie={el} key={el.id} image={el.image.url} nameRU={el.nameRU} duration={el.duration}
                                isSaved={props.isSaved} trailerLink={el.trailerLink} handleMovieDelete={movieDelete}
                                handleMovieSave={props.handleMovieSave} />
                        ))}
                    </MoviesCardList>
                ) : (
                    <p className='movies__text'>Ничего не найдено</p>
                )}
            </main>
            <Footer />
        </>
    )
}


export default Movies;



