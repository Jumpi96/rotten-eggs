import React, { useState, useEffect } from "react";
import Rating from 'react-rating';

import { fetchMovie, submitRating } from './hooks';
import { Redirect } from "react-router-dom";

import RatingItem from './RatingItem/component';

import './component.css';

function CreateRating(props) {
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");
  const [movie, setMovie] = useState(undefined);
  const [error, setErrors] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetchMovie(props.match.params.movie, setMovie, setErrors)
  }, []);

  function handleSubmit() {
    const rating = {'movie': movie.id, 'stars': stars, 'comment': comment};
    submitRating(rating, setErrors, setSubmitted);
  }

  if (submitted) {
    return <Redirect to="/movies-list"/>
  } else {
    return (
      <div>
        <h2>Rate it! { movie ? movie.title : ""}</h2>
        <div className="form-group">
          <Rating
            initialRating={stars}
            onChange={setStars}
          />
        </div>
        <div className="form-group">
          <p>Enter your comment:</p>
          <input
            type='text'
            className='form-control'
            value={comment}
            placeholder="Complete the comment to save the rating!"
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <p className="error">{error}</p>
        <button 
          className="btn btn-danger"
          disabled={comment === ""}
          onClick={handleSubmit}>
          Save rating
        </button>
        <hr />
        {movie ? movie.ratings.map((r) => <RatingItem rating={r} />) : "" }
      </div>
    );
  }
  
}

export default CreateRating;