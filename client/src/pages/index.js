import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExpirienceSection from '../components/ExpirienceSection';
import AbilitySection from '../components/AbilitySection';
import ContactSection from '../components/ContactSection';
import Fouter from '../components/Footer';
import Aux from '../hoc/Auxiliary'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Aux>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <AboutSection />
            <ExpirienceSection />
            <AbilitySection />
            <ContactSection />
            <Fouter/>
        </Aux>
    )
}

export default Home;