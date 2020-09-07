import React from 'react';
import { Link } from "react-router-dom";

import logo from '../../eggs.svg';
import './component.css';


function Home() {
  return (
    <div>
      <h2>Welcome to Rotten Eggs</h2>
      <img src={logo} className="eggs-img" alt="Some broken eggs." />
      <h3>Click <Link to="/movies-list">here</Link> to see our ratings!</h3>
    </div>
  );
}

export default Home;