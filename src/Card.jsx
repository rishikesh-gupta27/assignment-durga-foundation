import React from 'react';
import './Card.css';

const Card = ({ imageSrc, title, position, contact }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p>{position}</p>
        <p>{contact}</p>
        <button type="button" className="btn btn-danger red">Block</button>
        <button type="button" className="btn btn-primary blue">Details</button>
      </div>
    </div>
  );
};

export default Card;
