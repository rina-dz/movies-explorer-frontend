import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";

function Navigation() {

    return (
        <ul className="navigation">
            <li>
                <Link className="navigation__link link-button" to="/movies">
                    Фильмы
                </Link>
            </li>
            <li>
                <Link className="navigation__link link-button" to="/saved-movies">
                    Сохранённые фильмы
                </Link>
            </li>
        </ul>
    )
}


export default Navigation;