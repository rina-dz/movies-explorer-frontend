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
        localStorage.setItem('savedMovies', JSON.stringify(props.movies));
        checkAndResize();
        setTimeout(checkAndResize, 300);
        setTimeout(checkAndResize, 1000);
        window.addEventListener('resize', checkAndResize);
        return () => {
            window.removeEventListener('resize', checkAndResize);
        }
    }, []);

    function checkAndResize() {
        let movies = JSON.parse(localStorage.savedMovies);
        addMorevisibleMovies(movies);
    };

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
                    <MoviesCardList anyMoreMovies={false}>
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



