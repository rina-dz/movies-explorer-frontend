import React from 'react';
import "./Preloader.css";

function Preloader(props) {

    return (
            <section className={`preloader ${props.isOpen ? 'preloader_visible' : ''}`}>
                <div className='preloader__container'>
                    <div className='preloader__icon rotating'>
                    </div>
                </div>
            </section>
    )
}


export default Preloader;