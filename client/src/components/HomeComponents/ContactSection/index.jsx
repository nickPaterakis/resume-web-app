import React, { useState } from 'react';
import {
  FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube,
} from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import ContactForm from './ContactForm';
import Modal from '../../../UI/Modal';
import Spinner from '../../../UI/Spinner';

const ContactSection = () => {
  const [modal, setModal] = useState({
    show: false,
    valid: false,
  });

  const [load, setLoad] = useState(false);

  const loadHandler = () => {
    setLoad(load);
  };

  const modalHandler = (valid = false) => {
    setModal({
      show: !modal.show,
      valid,
    });
  };

  return (
    <section className="contact-section" id="contact">
      <h1 className="heading-primary heading-primary--black">Contact</h1>
      {load ? <Spinner /> : null }
      <Modal show={modal.show} valid={modal.valid} modalClosed={modalHandler} />
      <div className="contact-board">
        <div className="contact-board__left-column">
          <div className="contact-board__contact-details">
            <p className="contact-board__contact-element">
              <AiOutlineMail />
              {' '}
              info@mysite.com
            </p>
            <p className="contact-board__contact-element">
              <AiOutlinePhone />
              {' '}
              123-423-4563
            </p>
            <p className="contact-board__contact-element">
              <GoLocation />
              {' '}
              Athens, Greece
              {' '}
            </p>
    
            <div className="contact-board__social-networks-list">
              <a
                className="contact-board__social-network-link"
                href="/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                className="contact-board__social-network-link"
                href="/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="contact-board__social-network-link"
                href="/"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </a>
              <a
                className="contact-board__social-network-link"
                href="/"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                className="contact-board__social-network-link"
                href="/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-board__right-column">
          <ContactForm modalHandler={modalHandler} loadHandler={loadHandler} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
