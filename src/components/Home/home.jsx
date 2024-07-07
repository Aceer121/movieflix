import React from 'react';
import './Home.styles.scss';

const Home = () => {
  return (
    <div className="background">
      <div className="header">
        <h2 className="title">MovieFlix</h2>
        <input className="search-box" type="search" placeholder="type your movie here" />
      </div>
      <p>Welcome to MovieFlix!</p>
    </div>
  );
};

export default Home;
