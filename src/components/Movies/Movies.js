import React from 'react';
import "./Movies.css";
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies(props) {

    const [anyMoreMovies, setMoreMovies] = React.useState(true);

    //props.movies.length === visibleMovies ? setMoreMovies(false) : setMoreMovies(true)


    return (
        <>
            <Header openNavTabMenu={props.openNavTabMenu} mainHeader={false} />
            <main>
                <SearchForm movieSearch={props.movieSearch} />
                {props.movies.length > 0 ? (
                    <MoviesCardList anyMoreMovies={anyMoreMovies}>
                        {props.movies.map((el) => (
                            <MoviesCard movie={el} key={el._id} image={el.image.url} nameRU={el.nameRU} duration={el.duration} isSaved={props.isSaved}
                                trailerLink={el.trailerLink} handleMovieDelete={props.handleMovieDelete} handleMovieSave={props.handleMovieSave} />
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



