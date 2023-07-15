import React from 'react';
import "./SearchForm.css";
import search_icon from '../../images/search_icon.svg';

function SearchForm(props) {
    const [isCheckboxChecked, setCheckboxChecked] = React.useState(JSON.parse(localStorage.checkboxState));
    const [nameValue, setNameValue] = React.useState(localStorage.keyWords);

    function handleNameChange(e) {
        setNameValue(e.target.value);
    }

    function handleCheckboxChange(e) {
        setCheckboxChecked(e.target.checked);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        props.movieSearch(nameValue, isCheckboxChecked);
    }

    return (
        <section className="search">
            <form className="search__form" onSubmit={handleFormSubmit}>
                <div className="search__line">
                    <img
                        className="search__line-icon"
                        src={search_icon}
                        alt="Иконка поиска"
                    />
                    <input className="search__line-input" placeholder="Фильм" onChange={handleNameChange} value={nameValue} />
                    <button className="search__line-button link-button">Найти</button>
                </div>
                <div className="search__checkbox-container">
                    <input className="search__checkbox-input" type="checkbox" name="shortcut__checkbox" id='shortcut__checkbox' onChange={handleCheckboxChange} checked={isCheckboxChecked}/>
                    <label className="search__checkbox-label" htmlFor="shortcut__checkbox">
                        Короткометражки</label>
                </div>
            </form>
        </section>

    )
}


export default SearchForm;