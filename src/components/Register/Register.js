import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";

function Register() {

    return (
        <section className="register">
            <div className="register__container">
                <Link className="register__icon link-button" to="/" />
                <h2 className="register__title">Добро пожаловать!</h2>
                <form className="register__form">
                    <label className="register__label">Имя</label>
                    <input className="register__input" placeholder="Имя" minLength={2} maxLength={40} required />
                    <span className="register__input-error" />
                    <label className="register__label">E-mail</label>
                    <input className="register__input" placeholder="E-mail" type='email' minLength={2} required />
                    <span className="register__input-error" />
                    <label className="register__label">Пароль</label>
                    <input className="register__input" placeholder="Пароль" type="password" minLength={5} required />
                    <span className="register__input-error">Что-то пошло не так...</span>
                    <button className="register__button link-button">Зарегистрироваться</button>
                </form>
                <div className="register__links">
                    <p className="register__text">Уже зарегистрированы?</p>
                    <Link className="register__link link-button" to="/signin">Войти</Link>
                </div>
            </div>
        </section>

    )
}


export default Register;