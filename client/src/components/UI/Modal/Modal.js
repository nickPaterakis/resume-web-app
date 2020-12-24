import React from 'react';
import { Modal, ModalContainer } from './ModalElements'
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

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
          Your message hasn't been sent.<br /> 
          Try later to send a new message.
        </p>
      </Aux>
    );
  }

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <ModalContainer>
        <Modal
          style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0',
            background: props.valid ? 'rgb(136, 227, 176)' : 'rgb(250, 105, 110)'
          }}
        >
        {message}
        </Modal>
      </ModalContainer>
    </Aux>
  );
};

export default modal
// export default React.memo(
//   modal,
//   (prevProps, nextProps) =>
//     nextProps.show === prevProps.show &&
//     nextProps.children === prevProps.children
// );
