import React, { useState } from 'react';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
    onRatingSubmit(productId, value);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          onClick={() => handleRatingClick(value)}
          onMouseEnter={() => setHoveredRating(value)}
          onMouseLeave={() => setHoveredRating(0)}
          style={{ cursor: 'pointer', color: value <= (hoveredRating || rating) ? 'gold' : 'gray' }}
        >
          ★
        </span>
      ))}
      <button onClick={() => onRatingSubmit(productId, rating)}>Submit Rating</button>
    </div>
  );
};

export default RatingWidget;
