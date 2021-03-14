import React from 'react';
import Aux from '../hoc/Auxiliary';
import Backdrop from './Backdrop';

const modal = (props) => {
  let message;

  if (props.valid) {
    message = (
      <p>
        Your message has been sent successfully!
      </p>
    );
  } else {
    message = (
      <Aux>
        <p>
          Your message hasn&apos;t been sent.
          {'\n'}
          Try later to send a new message.
        </p>
      </Aux>
    );
  }

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className="modal-container">
        <div
          className="modal"
          style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0',
            background: props.valid ? 'rgb(136, 227, 176)' : 'rgb(250, 105, 110)',
          }}
        >
          {message}
        </div>
      </div>
    </Aux>
  );
};

export default modal;
