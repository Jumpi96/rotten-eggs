import React from 'react';
import { Link } from "react-router-dom";
import Rating from 'react-rating';

const MoviesListItem = (props) => {

  function getRatingName() {
    return props.movie.num_ratings === 1 ? "rating" : "ratings";
  }

  return (
    <tr key={props.movie.id}>
      <td>{props.movie.title}</td>
      <td>
        <Rating
          readonly={true}
          initialRating={props.movie.avg_ratings.toFixed(2)}
        /> ({props.movie.num_ratings} {getRatingName()})</td>
      <td>
        <Link className="btn btn-danger" to={`/new-rating/${props.movie.id}`}>Rate it!</Link>
      </td>
    </tr>
  );
}

export default MoviesListItem;