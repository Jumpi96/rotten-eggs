import React, { useEffect, useState } from "react";

import { fetchMovies } from './hooks';
import MoviesListItem from './MoviesListItem/component';

const MoviesList = () => {
  const [hasError, setErrors] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(setMovies, setErrors)
  }, []);
  
  return (
    <div>
      <div className="row">
        <div className="col-md">
          <h1>Movies</h1>
        </div>
      </div>
      <span style={{ color: "red" }}>{hasError}</span>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Rating</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {movies.map(m => <MoviesListItem movie={m}/>)}
        </tbody>
      </table>
    </div >
  );
};

export default MoviesList;