import React from 'react';
import "./Promo.css";
import promo_img from '../../images/promo_img.png';

function Promo() {

    return (
        <section className="promo">
            <div className='promo__container'>
                <div className="promo__main">
                    <h1 className="promo__title">
                        Учебный проект студентки факультета Веб-разработки.
                    </h1>
                    <img className="promo__img" src={promo_img} alt="фон промо" />
                </div>
            </div>
        </section>
    )
}


export default Promo;