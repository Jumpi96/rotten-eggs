import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Home from './components/Home/component';
import CreateRating from './components/CreateRating/component';
import MoviesList from './components/MoviesList/component';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a className="navbar-brand" href=".">Rotten Eggs</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies-list">Movies</Link>
              </li>
            </ul>
          </div>

        </nav>
        {
          <main role="main" className="container">
            <Route exact path="/" component={Home} />
            <Route path="/new-rating/:movie" component={CreateRating} />
            <Route path="/movies-list" component={MoviesList} />
          </main>
        }
      </div>
    </Router>
  );
}

export default App;
