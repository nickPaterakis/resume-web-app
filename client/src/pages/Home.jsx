import React from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HomeComponents/HeroSection';
import AboutSection from '../components/HomeComponents/AboutSection';
import ExpirienceSection from '../components/HomeComponents/ExpirienceSection';
import AbilitySection from '../components/HomeComponents/AbilitySection';
import ContactSection from '../components/HomeComponents/ContactSection';
import Navbar from '../components/Header/Navbar';
import Sidebar from '../components/Header/Sidebar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <HeroSection />
      <AboutSection />
      <ExpirienceSection />
      <AbilitySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
