import React, { useState } from 'react';
import EmailService from '../../api/EmailService';
import TextArea from './TextArea';
import TextInput from './TextInput'
import validate from './Validate'
import {
    Form as FormStyledComponent,
    Button,
} from './ContactElements';

const Form = () => {
    const [contactForm, setContactForm] = useState({
        formControls: {
            name: {
                value: '',
                validation:  {
                    valid: true,
                    errorMessage: ''
                },
                validationRules: {
                    isRequired: true
                }
            },
            email: {
                value: '',
                validation:  {
                    valid: true,
                    errorMessage: ''
                },
                validationRules: {
                    isRequired: true,
                    isEmail: true
                }
            },
            message: {
                value: '',
                validation:  {
                    valid: true,
                    errorMessage: ''
                },
                validationRules: {
                    isRequired: true,
                    minLength: 4
                }
            }
        }
    })

    const changeHandler = event => {

        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...contactForm.formControls
        };

        updatedControls[name].value = value;

        setContactForm({
            formControls: updatedControls
        });
    }

    const formSubmitHandler = event => {
        event.preventDefault();

        const updatedControls = {
            ...contactForm.formControls
        };

        let formIsValid = true;
        for (let formElementId in updatedControls) {
            updatedControls[formElementId].validation = validate(updatedControls[formElementId].value, updatedControls[formElementId].validationRules);
            formIsValid = updatedControls[formElementId].validation.valid && formIsValid;
        }
       
        if (formIsValid) {
            const formData = {};

            for (let formElementId in updatedControls) {
                formData[formElementId] = updatedControls[formElementId].value
            }

            EmailService.sendEmail(formData).then(() => {        
                for (let formElementId in updatedControls) {
                    updatedControls[formElementId].value = '';
                }
    
                setContactForm({
                    formControls: updatedControls,
                });    
            });
        } else {
            setContactForm({
                formControls: updatedControls,
            }); 
        } 
    }

    return (
        <FormStyledComponent onSubmit={formSubmitHandler}>
            <TextInput name="name" 
                value={contactForm.formControls.name.value}
                onChange={changeHandler}
                valid={contactForm.formControls.name.validation.valid}
                errorMessage={contactForm.formControls.name.validation.errorMessage}
            />

            <TextInput name="email" 
                value={contactForm.formControls.email.value}
                onChange={changeHandler}
                valid={contactForm.formControls.email.validation.valid}
                errorMessage={contactForm.formControls.email.validation.errorMessage}
            />

            <TextArea name="message" 
                value={contactForm.formControls.message.value}
                onChange={changeHandler}
                valid={contactForm.formControls.message.validation.valid}
                errorMessage={contactForm.formControls.message.validation.errorMessage}
            />
                                
            <Button type="submit">
                Send Email
            </Button>
        </FormStyledComponent>
    )
}

export default Form
