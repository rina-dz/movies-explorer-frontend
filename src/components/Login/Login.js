import React from 'react';
import { Link } from 'react-router-dom';
import useFormWithValidation from '../../hooks/useFormValidator';
import "./Login.css";

function Login(props) {

    const { values, handleChange, handleSubmit, errors, isValid } = useFormWithValidation(props.handleSubmit);


    return (
        <section className="login">
            <div className="login__container">
                <Link className="login__icon link-button" to="/" />
                <h2 className="login__title">Рады видеть!</h2>
                <form className="login__form" onSubmit={handleSubmit}>
                    <label className="login__label">E-mail</label>
                    <input className="login__input" placeholder="E-mail" type='email' name="email" value={values?.email}
                        onChange={handleChange} minLength={2} required
                        pattern='^[a-z0-9A-Z._%+-]+@[a-z0-9A-Z.-]+\.[a-zA-Z]{2,}$'
                    />
                    <span className="login__input-error">{errors?.email}</span>
                    <label className="login__label">Пароль</label>
                    <input className="login__input" placeholder="Пароль" type="password" name="password" value={values?.password}
                        onChange={handleChange} required />
                    <span className="login__input-error">{errors?.password}</span>
                    <button className={isValid ? `login__button login__button-enable link-button` : 'login__button login__button-disable'} type='submit'>Войти</button>
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