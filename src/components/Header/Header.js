import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import profile_icon from '../../images/profile_icon.svg';
import Navigation from '../Navigation/Navigation';

function Header(props) {

    function currentHeader() {
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

    function mainHeader() {
        return (
            <header className="header header-main">
                <Link className="header__logo link-button" to="/" />
                <ul className="header__main-nav">
                    <li>
                        <Link className="header__reg-link link-button" to="/signup">
                            Регистрация
                        </Link>
                    </li>
                    <li>
                        <div className="header__log-container">
                            <Link className="header__log-link link-button" to="/signin">
                                Войти
                            </Link>
                        </div>
                    </li>
                </ul>
            </header>
        )
    }

    return (
        props.mainHeader ? mainHeader() : currentHeader()
    )
}


export default Header;