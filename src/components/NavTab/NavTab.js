import React from 'react';
import { Link } from 'react-router-dom';
import "./NavTab.css";

function NavTab() {

    return (
        <div className="navtab">
            <div className="navtab__links">
                <Link className="navtab__link link-button">О проекте</Link>
                <Link className="navtab__link link-button">Технологии</Link>
                <Link className="navtab__link link-button">Студент</Link>
            </div>
        </div>

    )
}


export default NavTab;