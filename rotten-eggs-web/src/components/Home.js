import React from 'react';
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
      <h2>Welcome to Rotten Eggs</h2>
      <h3>Click <Link to="/movies-list">here</Link> to see our ratings!</h3>
    </div>
  );
}

export default Home;