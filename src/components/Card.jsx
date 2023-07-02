import React from 'react';

const Card = (props) => {

    return (
      <div className="card">
        <div className={props.selected && 'selected'}>
          <img alt="" src={props.image} className="card-face" />
  
          <img
            alt=""
            className="card-back"
            src={'/assets/fireship.png'}
            onClick={props.onClick}
          />
        </div>
      </div>
    );
  };
  
  export default Card;