import React from 'react';
import NavBar from '../navbar/navbar';
import './home.scss';


const Home = () => (
  <div className="home">
    <NavBar />
    <div className="home-cta">
      <h1 className="home-cta-header">Keep Track of everything for your job search</h1>
      <h3 className="home-cta-sub">Plan, Map, and execute your way to success.</h3>
      <div className="home-cta-overlay" />
    </div>
  </div>
)

export default Home;

