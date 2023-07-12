import React from 'react';
import { Link } from 'react-router-dom';
import "./NavTabMenu.css";
import profile_icon from '../../images/profile_icon.svg';
import close_icon from '../../images/close_icon.svg';

function NavTabMenu(props) {

    return (
        <div className={`navtab-menu ${props.isOpen ? 'navtab-menu_visible' : ''}`}>
            <div className="navtab-menu__container">
                <img className='navtab-menu__close-icon link-button' src={close_icon} alt="Х" onClick={props.closeMenu} />
                <div className="navtab-menu__links">
                    <Link className="navtab-menu__link link-button" to="/" onClick={props.closeMenu}>Главная</Link>
                    <Link className="navtab-menu__link link-button" to="/movies" onClick={props.closeMenu}>Фильмы</Link>
                    <Link className="navtab-menu__link link-button" to="/saved-movies" onClick={props.closeMenu}>Сохранённые фильмы</Link>
                    <Link className="navtab-menu__profile link-button" to="/profile" onClick={props.closeMenu}>
                        <p className="navtab-menu__profile-title">Аккаунт</p>
                        <div className="navtab-menu__profile-container">
                            <img className="navtab-menu__profile-icon" src={profile_icon} alt="Иконка профиля" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default NavTabMenu;