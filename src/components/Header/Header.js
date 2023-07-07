import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import profile_icon from '../../images/profile_icon.svg';
import Navigation from '../Navigation/Navigation';

function Header(props) {

    return (
        <header className="header">
            <Link className="header__logo link-button" to="/" />
            <Navigation />
            <Link className="header__profile link-button" to="/profile"> 
                <p className="header__profile-title">Аккаунт</p>
                <div className="header__profile-container">
                    <img className="header__profile-icon" src={profile_icon} alt="Иконка профиля" />
                </div>
            </Link>
            <div className='header__hiden-icon link-button' onClick={props.openNavTabMenu}></div>
        </header>
    )
}


export default Header;