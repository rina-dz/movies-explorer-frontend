import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import useFormWithValidation from '../../hooks/useFormValidator';
import "./ProfileForm.css";

function ProfileForm(props) {

    const { values, handleChange, handleSubmit, errors, isValid } = useFormWithValidation(props.handleSubmit);

    return (
        <>
            <Header openNavTabMenu={props.openNavTabMenu} mainHeader={false} />
            <section className="profile-form">
                <div className="profile-form__container">
                    <h2 className="profile-form__title">Редактировать профиль</h2>
                    <form className="profile-form__form" onSubmit={handleSubmit}>
                        <label className="profile-form__label">Имя</label>
                        <input className="profile-form__input" placeholder={props.userName} name="name"
                            value={values?.name} onChange={handleChange} minLength={2} required />
                        <span className="profile-form__input-error">{errors?.name}</span>
                        <label className="profile-form__label">E-mail</label>
                        <input className="profile-form__input" placeholder={props.userEmail} type='email'
                            pattern='^[a-z0-9A-Z._%+-]+@[a-z0-9A-Z.-]+\.[a-zA-Z]{2,}$'
                            name="email" value={values?.email} onChange={handleChange} minLength={2} required />
                        <span className="profile-form__input-error">{errors?.email}</span>
                        <button className={isValid ? `profile-form__button profile-form__button-enable link-button` : 'profile-form__button profile-form__button-disable'} type='submit'>Редактировать</button>
                    </form>
                    <div className="profile-form__links">
                        <Link className="profile-form__link link-button" to="/profile">Вернуться к профилю</Link>
                    </div>
                </div>
            </section>
        </>
    )
}


export default ProfileForm;