import React from 'react';
import {animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksWrapper, 
    FooterLink,
    FooterLinkTitle,
    WebsiteRights,
} from './FouterElements';

const Fouter = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksWrapper>
                    <FooterLinkTitle>Site Map</FooterLinkTitle>
                    <FooterLink to='/' onClick={toggleHome}>Home</FooterLink>
                    <FooterLink to="about"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        offset={-60}
                    >
                        About</FooterLink>
                    <FooterLink to="expiriences"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        offset={-60}
                    >
                        Expiriences</FooterLink>
                    <FooterLink to="abilities"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        offset={-60}
                    >
                        Abilities</FooterLink>
                    <FooterLink to="contact"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        offset={-60}
                    >
                        Contact</FooterLink>
                </FooterLinksWrapper>
                <WebsiteRights> © {new Date().getFullYear()} Nicholas Paterakis</WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Fouter;
