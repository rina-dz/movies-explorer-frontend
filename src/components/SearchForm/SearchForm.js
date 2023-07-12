import React from 'react';
import "./SearchForm.css";
import search_icon from '../../images/search_icon.svg';

function SearchForm() {

    return (
        <section className="search">
            <form className="search__form">
                <div className="search__line">
                    <img
                        className="search__line-icon"
                        src={search_icon}
                        alt="Иконка поиска"
                    />
                    <input className="search__line-input" placeholder="Фильм" />
                    <button className="search__line-button link-button">Найти</button>
                </div>
                <div className="search__checkbox-container">
                    <input className="search__checkbox-input" type="checkbox" name="shortcut__checkbox" />
                    <label className="search__checkbox-label" for="shortcut__checkbox">
                        Короткометражки</label>
                </div>
            </form>
        </section>

    )
}


export default SearchForm;