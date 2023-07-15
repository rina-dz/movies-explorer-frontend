import React from 'react';
import { Link } from 'react-router-dom';
import useFormWithValidation from '../../hooks/useFormValidator';
import "./Register.css";

function Register(props) {

    const { values, handleChange, handleSubmit, errors, isValid } = useFormWithValidation(props.handleSubmit);
    
    return (
        <section className="register">
            <div className="register__container">
                <Link className="register__icon link-button" to="/" />
                <h2 className="register__title">Добро пожаловать!</h2>
                <form className="register__form"  onSubmit={handleSubmit}>
                    <label className="register__label">Имя</label>
                    <input className="register__input" placeholder="Имя" name="name" value={values?.name} 
                    onChange={handleChange} minLength={2} maxLength={40} required />
                    <span className="register__input-error">{errors?.name}</span>
                    <label className="register__label">E-mail</label>
                    <input className="register__input" placeholder="E-mail" type='email' name="email" 
                    value={values?.email} onChange={handleChange} minLength={2} required />
                    <span className="register__input-error">{errors?.email}</span>
                    <label className="register__label">Пароль</label>
                    <input className="register__input" placeholder="Пароль" type="password" name="password" 
                    value={values?.password} onChange={handleChange} minLength={5} required />
                    <span className="register__input-error">{errors?.password}</span>
                    <button type='submit'
                    className={isValid ? `register__button register__button-enable link-button` : 'register__button register__button-disable'}>Зарегистрироваться</button>
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