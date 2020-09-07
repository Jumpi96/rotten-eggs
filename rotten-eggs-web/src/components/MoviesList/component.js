import React, { useEffect, useState } from "react";

import { fetchMovies } from './hooks';
import MoviesListItem from './MoviesListItem/component';

const MoviesList = () => {
  const [hasError, setErrors] = useState(false);
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchMovies(setMovies, setErrors)
  }, []);

  return (
    <div>
      <div className="form-group row">
        <div className="col-md-6">
          <h1>Movies</h1>
        </div>
        <div className="col-md-6">
          <label for="filter">Search your movie:</label>
          <input
            className="form-control"
            value={filter} id="filter"
            onChange={(e) => setFilter(e.target.value)} />
        </div>
      </div>
      <span style={{ color: "red" }}>{hasError}</span>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Released on</th>
            <th scope="col">Rating</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {movies.filter(m => m.title.includes(filter)).map(m => <MoviesListItem movie={m} />)}
        </tbody>
      </table>
    </div >
  );
};

export default MoviesList;