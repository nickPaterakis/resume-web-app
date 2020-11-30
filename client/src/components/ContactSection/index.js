import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import Form from './Form'
import {
    ContactContainer,
    ContactWrapper,
    Column1,
    ContactElementsWrapper,
    ContactElement,
    Column2,
    Title,
    SocialIcons,
    SocialIconLink,
} from './ContactElements';

const ContactSection = () => {

    return (
        <ContactContainer id="contact">
            <Title>Contact</Title>
            <ContactWrapper>
                <Column1>
                    <ContactElementsWrapper>
                        <ContactElement>Email: info@mysite.com</ContactElement>
                        <ContactElement>Call: 123-423-4563</ContactElement>

                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </ContactElementsWrapper>
                </Column1>

                <Column2>
                   <Form />
                </Column2>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default ContactSection;
