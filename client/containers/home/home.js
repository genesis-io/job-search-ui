import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import InfoCard from '../../components/infoCard/infoCard';
import './home.scss';
import { primaryColor, secondaryColor } from '../../services/cssVariables';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <NavBar />
        <div className="home-cta">
          <div className="home-cta-header-wrapper">
            <h1 className="home-cta-header">Keep Track of everything for your job search</h1>
            <h3 className="home-cta-sub">Plan, Map, and execute your way to success.</h3>
          </div>
          <Link to="/login" className="home-cta-start cta-button">Get Started</Link>
          <div className="home-cta-overlay" />
        </div>
        <div className="home-type">
          <div className="home-type-description">
            Our app allows _____ Developers like you to log,
            store and keep up with your personal contributions to a project seamlessly
          </div>
        </div>
        <div className="home-info">
          <InfoCard
            logo="fa-github"
            color={primaryColor}
            header="Easy Maintenance"
            message="Use a platform that can help keep track of your growth and change over time.
             Sign up or login with your github account to ease maintaining your tracked work."
            buttonText="Signup!"
            location="/signup"
          />
          <InfoCard
            logo="fa-smile-o"
            color={secondaryColor}
            header="Simple for you."
            message="We make it simple for you. we've made a one stop shop for you
             to keep logs of work, track jobs and companies you're interested in
              and save projects to show employers."
            buttonText="Learn More"
            location="/signup"
          />
        </div>
      </div>
    );
  }
}

export default Home;

