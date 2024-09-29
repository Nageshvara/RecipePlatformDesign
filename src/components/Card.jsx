import React from 'react';
import Rating from '@mui/material/Rating';
import './Card.css'; // Make sure to create or update this CSS file

function Card({ title, subtitle, backgroundImage, rating }) {
  return (
    <div className='card'>
      <div className='box'>
        <div
          className='content'
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className='text-overlay'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
          </div>
          {rating !== undefined && (
            <div className='rating'>
              <Rating name="card-rating" value={rating} readOnly />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;