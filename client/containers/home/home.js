import React from 'react';
import NavBar from '../navbar/navbar';
import InfoCard from '../../components/infoCard/infoCard';
import './home.scss';
import { primaryColor, secondaryColor } from '../../services/cssVariables';

const Home = () => (
  <div className="home">
    <NavBar />
    <div className="home-cta">
      <h1 className="home-cta-header">Keep Track of everything for your job search</h1>
      <h3 className="home-cta-sub">Plan, Map, and execute your way to success.</h3>
      <div className="home-cta-overlay" />
    </div>
    <div className="home-info">
      <InfoCard
        logo="fa-chrome"
        color={primaryColor}
        header="what in the fuck are you doing ?"
        message="stay strong" />
      <InfoCard
        logo="fa-chrome"
        color={secondaryColor}
        header="what in the fuck are you doing ?"
        message="stay strong" />
    </div>
  </div>
);

export default Home;

