import React from 'react';
import { Formik } from 'formik';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import * as Yup from 'yup';
import EmailService from '../../api/EmailService';
import {
    ContactContainer,
    ContactWrapper,
    Column1,
    ContactElementsWrapper,
    ContactElement,
    Column2,
    Input,
    TextArea,
    Form,
    FormGroup,
    Label,
    Button,
    Title,
    SocialIcons,
    SocialIconLink,
    Error,
    ErrorMessage
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
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            message: ''
                        }}
                        validationSchema = {Yup.object({
                            name: Yup.string()
                                .required('What\'s your name?'),
                            email: Yup.string()
                                .email('Invalid email address')
                                .required('What\'s your email?'),
                        })}
                        validateOnChange={false}
                        validateOnBlur={false}
                        onSubmit={(values) => {
                            let email = { 
                                name: values.name, 
                                email: values.email,
                                message: values.message
                            };

                            EmailService.sendEmail(email).then(() => {
                                values.name = '';
                                values.email = '';
                                values.message = '';
                            });
                            
                                
                        }}
                    >
                        {({
                            touched,
                            handleChange,
                            errors,
                            values,
                            handleSubmit,
                            getFieldProps
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="name">Name*</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.name}
                                    />
                                    {touched.name && errors.name ? <Error><ErrorMessage>{errors.name}</ErrorMessage></Error> : null}
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="email">Email*</Label>
                                    <Input
                                        id="email"
                                        type="text"
                                        {...getFieldProps('email')}
                                    />
                                    {touched.email && errors.email ? <Error><ErrorMessage>{errors.email}</ErrorMessage></Error> : null}
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="text">Message</Label>
                                    <TextArea
                                        id="message"
                                        type="text"
                                        {...getFieldProps('message')}
                                    />
                                </FormGroup>
                    
                                <Button type="submit">Send Email</Button>
                            </Form>
                        )}
                    </Formik>
                </Column2>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default ContactSection;
