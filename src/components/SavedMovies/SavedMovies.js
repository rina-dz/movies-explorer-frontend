import React from 'react';
import "./SavedMovies.css";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
    
    const movies = props.movies;
    const [visibleMovies, addMorevisibleMovies] = React.useState([]);

    React.useEffect(() => {
        checkAndResize();
    }, [props.deviceWidth]);

    function checkAndResize() {
        if (props.deviceWidth >= 1280) {
            addMorevisibleMovies(movies.slice(0, 12));
        }
        if (props.deviceWidth < 1280 && props.deviceWidth > 480) {
            addMorevisibleMovies(movies.slice(0, 8));
        }
        if (props.deviceWidth <= 480 && props.deviceWidth > 319) {
            addMorevisibleMovies(movies.slice(0, 5));
        }
    };

    function addMoreMovies() {
        if (props.deviceWidth >= 1280) {
            addMorevisibleMovies(movies.slice(0, visibleMovies.length + 3));
        }
        if (props.deviceWidth < 1280 && props.deviceWidth > 480) {
            addMorevisibleMovies(movies.slice(0, visibleMovies.length + 2));
        }
        if (props.deviceWidth <= 480 && props.deviceWidth > 319) {
            addMorevisibleMovies(movies.slice(0, visibleMovies.length + 2));
        }
    }

    return (
        <>
            <Header openNavTabMenu={props.openNavTabMenu} mainHeader={false} />
            <main>
                <SearchForm movieSearch={props.movieSearch} keyWords={props.keyWords} checkboxState={props.checkboxState} />
                {props.movies.length > 0 ? (
                    <MoviesCardList anyMoreMovies={movies.length === visibleMovies.length ? false : true}>
                        {props.movies.map((el) => (
                            <MoviesCard movie={el} key={el._id} image={el.image.url} nameRU={el.nameRU} duration={el.duration} isSaved={'saved-movies'}
                                trailerLink={el.trailerLink} handleMovieDelete={props.handleMovieDelete} handleMovieSave={props.handleMovieSave} />
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



