import styled from 'styled-components';

export const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const Modal = styled.div`
    position: fixed;
    z-index: 500;
    text-align: center;
    font-size: 1.8rem;
    padding: 6rem;
    top: 30%;
    transition: all 0.3s ease-out;

    --notchSize: 5px;

    clip-path: 
    polygon(
      0% var(--notchSize), 
      var(--notchSize) 0%, 
      calc(100% - var(--notchSize)) 0%, 
      100% var(--notchSize), 
      100% calc(100% - var(--notchSize)), 
      calc(100% - var(--notchSize)) 100%, 
      var(--notchSize) 100%, 
      0% calc(100% - var(--notchSize))
    );
`;
