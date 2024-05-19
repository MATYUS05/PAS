import React from 'react';
import './PopUpCard.css';

function PopUpCard({ content, description, imgUrl, onClose }) {
    return (
        <div className="popup">
            <div className="popup__content">
                <img src={imgUrl} alt="Sample" className="popup__img" />
                <h2 className="text-10">{content}</h2>
                <p>{description}</p>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default PopUpCard;
