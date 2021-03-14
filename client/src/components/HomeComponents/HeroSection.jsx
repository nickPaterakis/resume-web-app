import React from 'react';
import ProfileImage from '../../images/profile-img.jpg';
import BackgroundImage from '../../images/bg-img.jpg';

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-section__background">
      <img className="hero-section__background-image" src={BackgroundImage} alt="background" />
    </div>
    <div className="hero-section__personal-informations">
      <h1 className="hero-section__name">Nicholas Paterakis</h1>
      <img className="hero-section__profile-image" src={ProfileImage} alt="profile" />
      <p className="hero-section__characteristics">
        Programming Enthusiast, Student
      </p>
    </div>
  </section>
);

export default HeroSection;
