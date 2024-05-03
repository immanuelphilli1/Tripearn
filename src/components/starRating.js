import { Star } from '@phosphor-icons/react';
import React, { useState } from 'react';
import Rating from 'react-rating'; // Import the star rating library

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = newRating => {
    setRating(newRating);
    // You can perform additional actions here, like saving the rating to a database
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-6">
    <Rating
      initialRating={rating}
      emptySymbol={<Star weight="regular" color="gray" size={24} />}
        fullSymbol={<Star  weight="fill" color="yellow" size={24} />}
      onChange={handleRatingChange}
    />
    <p className="text-lg font-bold"> {rating} /5</p>
  </div>
  );
};

export default StarRating;