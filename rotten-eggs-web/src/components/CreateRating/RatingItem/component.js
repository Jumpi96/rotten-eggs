import React from 'react';
import Rating from 'react-rating';

const RatingItem = (props) => {
  return (
    <div>
      <Rating
        readonly={true}
        initialRating={props.rating.stars}
      />
      <p>{props.rating.comment}</p>
    </div>
  );
}

export default RatingItem;