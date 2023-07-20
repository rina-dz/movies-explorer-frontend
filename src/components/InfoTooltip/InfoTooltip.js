import React from 'react';
import "./InfoTooltip.css";
import { usePopupClose } from "../../hooks/usePopupClose.js";

function InfoTooltip(props) {

    usePopupClose(props.isOpen, props.onClose);

    const imageClassName = props.isOperationSuccessful ? 'info-tooltip__icon-successful' : 'info-tooltip__icon-unsuccessful';

    return (
        <div className={`info-tooltip ${props.isOpen ? 'info-tooltip_opened' : ''}`}>
            <div className="info-tooltip__container">
                <div className={imageClassName}></div>
                <h2 className="info-tooltip__title">{props.isOperationSuccessful ? 'У нас всё получилось!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
                <button type="button" className="info-tooltip__close-icon link-button" onClick={props.onClose} />
            </div>
        </div>
    )
}

export default InfoTooltip;
