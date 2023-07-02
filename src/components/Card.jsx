import React from 'react';

const Card = (props) => {

    return (
        <div className="card">
            <div className={props.selected && 'selected'}>
                {/* Image behind the card */} 
                <img alt="" src={props.image} className="card-face" />

                {/* Front image of the card */} 
                <img
                    alt=""
                    className="card-back"
                    src={'/assets/hint.jpg'}
                    onClick={props.onClick}
                />
            </div>
        </div>
    );
};

export default Card;