import React from 'react';
import "./Profile.css";
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function Profile(props) {

    return (
        <>
            <Header openNavTabMenu={props.openNavTabMenu} mainHeader={false} />
            <section className="profile">
                <p className="profile__title">Привет, {props.userName}!</p>
                <div className="profile__container">
                    <div className="profile__text-container">
                        <p className="profile__label">Имя</p>
                        <p className="profile__value">{props.userName}</p>
                    </div>
                    <div className="profile__text-container">
                        <p className="profile__label">E-mail</p>
                        <p className="profile__value">{props.userEmail}</p>
                    </div>
                </div>
                <div className="profile__links">
                    <Link className="profile__change-link link-button" to="/profile-change">Редактировать</Link>
                    <Link className="profile__exit-link link-button" onClick={props.signOut}>Выйти из аккаунта</Link>
                </div>
            </section>
        </>
    )
}


export default Profile;



