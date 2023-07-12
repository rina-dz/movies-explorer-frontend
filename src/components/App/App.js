import './App.css';
import React, { useState } from 'react';
import { Route, Navigate, Routes, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NavTabMenu from '../NavTabMenu/NavTabMenu';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function App() {

  // const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState({});
  const [isNavTabMenuOpen, setNavTabMenuOpen] = React.useState(false);

  function closeNavTabMenu() {
    setNavTabMenuOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies openNavTabMenu={() => {
              setNavTabMenuOpen(!isNavTabMenuOpen);
            }} />} />
          <Route path="/saved-movies" element={<SavedMovies openNavTabMenu={() => {
              setNavTabMenuOpen(!isNavTabMenuOpen);
            }} />} />
          <Route path="/profile" element={<Profile openNavTabMenu={() => {
              setNavTabMenuOpen(!isNavTabMenuOpen);
            }} />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<NotFound />} />
       </Routes>
       <NavTabMenu isOpen={isNavTabMenuOpen} closeMenu={closeNavTabMenu} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
