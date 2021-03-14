import React, { useState } from 'react';
import sendEmail from '../../../api/EmailService';
import TextArea from '../../../UI/TextArea';
import Input from '../../../UI/Input';
import validate from '../../../utils/Validate';

const ContactForm = (props) => {
  const [contactForm, setContactForm] = useState({
    formControls: {
      name: {
        value: '',
        validation: {
          valid: true,
          errorMessage: '',
        },
        validationRules: {
          isRequired: true,
        },
      },
      email: {
        value: '',
        validation: {
          valid: true,
          errorMessage: '',
        },
        validationRules: {
          isRequired: true,
          isEmail: true,
        },
      },
      message: {
        value: '',
        validation: {
          valid: true,
          errorMessage: '',
        },
        validationRules: {
          isRequired: true,
          minLength: 4,
        },
      },
    },
  });

  const changeHandler = (event) => {
    const { name } = event.target;
    const { value } = event.target;

    const updatedControls = {
      ...contactForm.formControls,
    };

    updatedControls[name].value = value;

    setContactForm({
      formControls: updatedControls,
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const updatedControls = {
      ...contactForm.formControls,
    };

    let formIsValid = true;
    for (const formElementId in updatedControls) {
      if (Object.prototype.hasOwnProperty.call(updatedControls, formElementId)) {
        updatedControls[formElementId].validation = validate(updatedControls[formElementId].value,
          updatedControls[formElementId].validationRules);
        formIsValid = updatedControls[formElementId].validation.valid && formIsValid;
      }
    }

    if (formIsValid) {
      const formData = {};

      for (const formElementId in updatedControls) {
        if (Object.prototype.hasOwnProperty.call(updatedControls, formElementId)) {
          formData[formElementId] = updatedControls[formElementId].value;
        }
      }

      props.loadHandler(true);
      sendEmail(formData).then(() => {
        for (const formElementId in updatedControls) {
          if (Object.prototype.hasOwnProperty.call(updatedControls, formElementId)) {
            updatedControls[formElementId].value = '';
          }
        }

        props.modalHandler(true);
        props.loadHandler(false);

        setContactForm({
          formControls: updatedControls,
        });
      }).catch(() => {
        props.modalHandler(false);
        props.loadHandler(false);
      });
    } else {
      setContactForm({
        formControls: updatedControls,
      });
    }
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <Input
        name="name"
        className="input"
        label="Name*"
        labelStyle="label"
        value={contactForm.formControls.name.value}
        onChange={changeHandler}
        valid={contactForm.formControls.name.validation.valid}
        errorMessage={contactForm.formControls.name.validation.errorMessage}
      />

      <Input
        name="email"
        className="input"
        label="Email*"
        labelStyle="label"
        value={contactForm.formControls.email.value}
        onChange={changeHandler}
        valid={contactForm.formControls.email.validation.valid}
        errorMessage={contactForm.formControls.email.validation.errorMessage}
      />

      <TextArea
        name="message"
        label="Message*"
        labelStyle="label"
        value={contactForm.formControls.message.value}
        onChange={changeHandler}
        valid={contactForm.formControls.message.validation.valid}
        errorMessage={contactForm.formControls.message.validation.errorMessage}
      />

      <button className="btn" type="submit">
        Send Email
      </button>
    </form>
  );
};

export default ContactForm;
