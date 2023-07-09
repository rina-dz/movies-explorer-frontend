import React from 'react';
import "./Profile.css";
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile(props) {

    return (
        <>
        <Header openNavTabMenu={props.openNavTabMenu} mainHeader={false} />
        <section className="profile">
            <p className="profile__title">Привет, Арина!</p>
            <form className="profile__form">
                <div className="profile__input-container">
                    <label className="profile__label">Имя</label>
                    <input className="profile__input" placeholder="Арина" minLength={2} />
                </div>
                <div className="profile__input-container">
                    <label className="profile__label">E-mail</label>
                    <input className="profile__input" placeholder="pochta@yandex.ru" type='email' minLength={2} />
                </div>
            </form>
            <div className="profile__links">
                <Link className="profile__change-link link-button" to="/">Редактировать</Link>
                <Link className="profile__exit-link link-button" to="/">Выйти из аккаунта</Link>
            </div>
        </section>
        </>
    )
}


export default Profile;



