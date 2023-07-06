import React from 'react';
import { Link } from 'react-router-dom';
import "./Promo.css";
import promo_img from '../../images/promo_img.png';

function Promo() {

    return (
        <div className="promo">
            <div className="promo__header">
                <Link className="promo__logo link-button" to="/" />
                <ul className="promo__nav">
                    <li>
                        <Link className="promo__reg-link link-button" to="/signup">
                            Регистрация
                        </Link>
                    </li>
                    <li>
                        <div className="promo__log-container">
                            <Link className="promo__log-link link-button" to="/signin">
                                Войти
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="promo__main">
                <h1 className="promo__title">
                    Учебный проект студентки факультета Веб-разработки.
                </h1>
                <img className="promo__img" src={promo_img} alt="фон промо" />
            </div>
        </div>
    )
}


export default Promo;