import React from 'react';
import "./NavTab.css";

function NavTab() {

    return (
        <section className="navtab">
            <div className='navtab__container'>
                <div className="navtab__links">
                    <a className="navtab__link link-button" href="#aboutProject">О проекте</a>
                    <a className="navtab__link link-button" href="#techs">Технологии</a>
                    <a className="navtab__link link-button" href="#aboutme">Студент</a>
                </div>
            </div>
        </section>

    )
}


export default NavTab;