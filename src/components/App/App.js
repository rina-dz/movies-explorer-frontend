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
  const [loggedIn, changeState] = React.useState(false);
  const [isNavTabMenuOpen, setNavTabMenuOpen] = React.useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [isOperationSuccessful, setOperationSuccessful] = React.useState(false);
  const [movies, addMovies] = React.useState([]);
  const [savedMovies, addSavedMovies] = React.useState([]);
  const [deviceWidth, setNewdeviceWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    Promise.all([newMainApi.getUserInfo(), newMainApi.getSavedMovies()])
      .then(([resInfo, resSavedMovies]) => {
        addSavedMovies(resSavedMovies.data);
        const info = { name: resInfo.name, email: resInfo.email, _id: resInfo._id };
        changeState(true);
        setCurrentUser(info);
        navigate('/', { replace: true });
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
        setCurrentUser({ name: currentUser.name, email: currentUser.email, _id: currentUser._id });
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

  function handleSearchMovies(keyWords, checkboxState) {
    setLoading(true);
    newMoviesApi.getInitialMovies()
      .then((resMovies) => {
        let moviesData = resMovies.filter(film => film.nameRU.toLowerCase().includes(keyWords.toLowerCase()));
        if (checkboxState) {
          let shortCuts = moviesData.filter(film => film.duration <= 40);
          localStorage.setItem('searchedMovies', JSON.stringify(shortCuts));
          addMovies(shortCuts);
        } else {
          localStorage.setItem('searchedMovies', JSON.stringify(moviesData));
          addMovies(moviesData);
        }
        localStorage.setItem('keyWords', keyWords);
        localStorage.setItem('checkboxState', checkboxState);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  function handleSearchSavedMovies(keyWords, checkboxState) {
    setLoading(true);
    newMainApi.getSavedMovies()
      .then((resMovies) => {
        let moviesData = resMovies.filter(film => film.nameRu.includes(keyWords.toLowerCase()));
        if (checkboxState) {
          let shortCuts = moviesData.filter(film => film.duration <= 40);
          localStorage.setItem('searchedMovies', JSON.stringify(shortCuts));
          addSavedMovies(shortCuts);
        } else {
          localStorage.setItem('searchedMovies', JSON.stringify(moviesData));
          addSavedMovies(moviesData);
        }
        localStorage.setItem('keyWords', keyWords);
        localStorage.setItem('checkboxState', checkboxState);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  function handleMovieSave(movie) {
    newMainApi.saveMovie(movie)
      .then((savedMovie) => {
        addSavedMovies([...savedMovies, savedMovie]);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleMovieDelete(movie) {
    const deleteMovie = savedMovies.find(film => film.movieId === (movie.id) && film.owner === currentUser._id);
    if (!deleteMovie) {
      return newMainApi.removeMovie(movie._id)
        .then(() => {
          addSavedMovies(savedMovies.filter(film => film._id !== movie._id));
        })
        .catch((err) => {
          console.log(err);
        })
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
            movies={movies}
            deviceWidth={deviceWidth}
          />} />
          <Route path="/saved-movies" element={<ProtectedRoute
            loggedIn={loggedIn}
            element={SavedMovies}
            openNavTabMenu={() => { setNavTabMenuOpen(!isNavTabMenuOpen); }}
            handleMovieDelete={handleMovieDelete}
            movieSearch={handleSearchSavedMovies}
            movies={savedMovies}
            deviceWidth={deviceWidth}
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
