import './App.css';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { newMainApi } from '../../utils/MainApi.js';
import { newAuthApi } from '../../utils/AuthApi.js';
import { newMoviesApi } from '../../utils/MoviesApi.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProfileForm from '../ProfileForm/ProfileForm';
import NavTabMenu from '../NavTabMenu/NavTabMenu';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Preloader from '../Preloader/Preloader';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';


function App() {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, changeState] = React.useState(localStorage.token ? true : false);
  const [isNavTabMenuOpen, setNavTabMenuOpen] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [isOperationSuccessful, setOperationSuccessful] = React.useState(false);
  const [movies, addMovies] = React.useState([]);
  const [savedMovies, addSavedMovies] = React.useState([]);

  React.useEffect(() => {
    Promise.all([newMainApi.getUserInfo(), newMainApi.getSavedMovies()])
      .then(([resInfo, resSavedMovies]) => {
        localStorage.setItem('savedMovies', JSON.stringify(resSavedMovies.data));
        addSavedMovies(resSavedMovies.data);
        const info = { name: resInfo.name, email: resInfo.email, _id: resInfo._id };
        changeState(true);
        setCurrentUser(info);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [loggedIn]);

  React.useEffect(() => {
    newMoviesApi.getInitialMovies()
      .then((resMovies) => {
        addMovies(resMovies);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  function signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('searchedMovies');
    localStorage.removeItem('checkboxState');
    localStorage.removeItem('keyWords');
    addSavedMovies([]);
    changeState(false);
    navigate('/signin', { replace: true });
  }

  function closeAllPopups() {
    setNavTabMenuOpen(false);
    setInfoTooltipOpen(false);
  }

  function handleRegister(info) {
    setLoading(true);
    newAuthApi.registration(info)
      .then(() => {
        handleLogin(info);
      })
      .catch((err) => {
        setOperationSuccessful(false);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        setInfoTooltipOpen(true);
      })
  }

  function handleLogin(info) {
    setLoading(true);
    newAuthApi.authorization(info.password, info.email)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
        newMoviesApi.getInitialMovies()
          .then((resMovies) => {
            addMovies(resMovies);
          })
          .catch((err) => {
            console.log(err);
          })
        localStorage.setItem('searchedMovies', JSON.stringify(movies));
        localStorage.setItem('checkboxState', false);
        localStorage.setItem('keyWords', '');
        changeState(true);
        setOperationSuccessful(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        setOperationSuccessful(false);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        setInfoTooltipOpen(true);
      })
  }

  function handleUpdateUserInfo(info) {
    setLoading(true);
    newMainApi.changeUserInfo(info)
      .then(() => {
        setOperationSuccessful(true);
        setCurrentUser({ name: info.name, email: info.email, _id: currentUser._id });
        navigate('/profile', { replace: true });
      })
      .catch((err) => {
        setOperationSuccessful(false);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        setInfoTooltipOpen(true);
      })
  }

  function handleSearchMovies(keyWords, checkboxState, reloadMovies) {
    setLoading(true);
    let moviesData = movies.filter(film => film.nameRU.toLowerCase().includes(keyWords.toLowerCase()));
    if (checkboxState) {
      let shortCuts = moviesData.filter(film => film.duration <= 40);
      localStorage.setItem('searchedMovies', JSON.stringify(shortCuts));
    } else {
      localStorage.setItem('searchedMovies', JSON.stringify(moviesData));
    }
    localStorage.setItem('keyWords', keyWords);
    localStorage.setItem('checkboxState', checkboxState);
    reloadMovies();
    setLoading(false);
  }

  function handleSearchSavedMovies(keyWords, checkboxState, reloadMovies) {
    setLoading(true);
    let moviesData = savedMovies.filter(film => film.nameRU.includes(keyWords.toLowerCase()));
    if (checkboxState) {
      let shortCuts = moviesData.filter(film => film.duration <= 40);
      localStorage.setItem('savedMovies', JSON.stringify(shortCuts));
    } else {
      localStorage.setItem('savedMovies', JSON.stringify(moviesData));
    }
    reloadMovies();
    setLoading(false);
  }

  function handleMovieSave(movie) {
    newMainApi.saveMovie(movie)
      .then((savedMovie) => {
        const movies = [...savedMovies, savedMovie]
        addSavedMovies(movies);
        localStorage.setItem('savedMovies', JSON.stringify(movies));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleMovieDelete(movie, reloadMovies) {
    setLoading(true);
    if (movie._id) {
      return newMainApi.removeMovie(movie._id)
        .then(() => {
          const movies = savedMovies.filter(film => film._id !== movie._id)
          addSavedMovies(movies);
          localStorage.setItem('savedMovies', JSON.stringify(movies));
          reloadMovies();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        })
    } else {
      const deleteMovie = savedMovies.find(film => film.movieId === (movie.id) && film.owner === currentUser._id);
      if (deleteMovie) {
        return newMainApi.removeMovie(deleteMovie._id)
          .then(() => {
            const movies = savedMovies.filter(film => film._id !== deleteMovie._id)
            addSavedMovies(movies);
            localStorage.setItem('savedMovies', JSON.stringify(movies));
            reloadMovies();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          })
      }
    }
  }

  function isMovieSaved(movie) {
    return savedMovies.some(film => film.movieId === (movie.id) && film.owner === currentUser._id);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main
            openNavTabMenu={() => { setNavTabMenuOpen(!isNavTabMenuOpen); }}
            isLoggedIn={loggedIn}
          />} />
          <Route path="/movies" element={<ProtectedRoute
            loggedIn={loggedIn}
            element={Movies}
            openNavTabMenu={() => { setNavTabMenuOpen(!isNavTabMenuOpen); }}
            handleMovieDelete={handleMovieDelete}
            handleMovieSave={handleMovieSave}
            isSaved={isMovieSaved}
            movieSearch={handleSearchMovies}
          />} />
          <Route path="/saved-movies" element={<ProtectedRoute
            loggedIn={loggedIn}
            element={SavedMovies}
            openNavTabMenu={() => { setNavTabMenuOpen(!isNavTabMenuOpen); }}
            handleMovieDelete={handleMovieDelete}
            movieSearch={handleSearchSavedMovies}
            movies={savedMovies}
          />} />
          <Route path="/profile" element={<ProtectedRoute
            loggedIn={loggedIn}
            element={Profile}
            openNavTabMenu={() => { setNavTabMenuOpen(!isNavTabMenuOpen); }}
            signOut={signOut}
            userName={currentUser.name}
            userEmail={currentUser.email}
          />} />
          <Route path="/profile-change" element={<ProtectedRoute
            loggedIn={loggedIn}
            element={ProfileForm}
            openNavTabMenu={() => { setNavTabMenuOpen(!isNavTabMenuOpen); }}
            userName={currentUser.name}
            userEmail={currentUser.email}
            handleSubmit={handleUpdateUserInfo}
          />} />
          <Route path="/signup" element={<Register
            handleSubmit={handleRegister}
          />} />
          <Route path="/signin" element={<Login
            handleSubmit={handleLogin}
          />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NavTabMenu isOpen={isNavTabMenuOpen} closeMenu={closeAllPopups} />
        <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeAllPopups} isOperationSuccessful={isOperationSuccessful} />
        <Preloader isOpen={isLoading} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
