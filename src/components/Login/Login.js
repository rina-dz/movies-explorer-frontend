import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

function Login() {

    return (
        <section className="login">
            <div className="login__container">
                <Link className="login__icon link-button" to="/" />
                <h2 className="login__title">Рады видеть!</h2>
                <form className="login__form">
                    <label className="login__label">E-mail</label>
                    <input className="login__input" placeholder="" />
                    <span className="login__input-error" />
                    <label className="login__label">Пароль</label>
                    <input className="login__input" placeholder="" type="password" />
                    <span className="login__input-error" />
                    <button className="login__button link-button">Войти</button>
                </form>
                <div className="login__links">
                    <p className="login__text">Ещё не зарегистрированы?</p>
                    <Link className="login__link link-button" to="/signup">Регистрация</Link>
                </div>
            </div>
        </section>


    )
}


export default Login;