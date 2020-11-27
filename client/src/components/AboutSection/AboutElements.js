import styled from 'styled-components';

export const AboutContainer = styled.div`
    height: 70rem;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 56.25em) {
        height: 80rem;
    }
`;

export const AboutWrapper = styled.div`
    width: 100%;
    padding: 0 20vw 0 20vw;
    background: rgb(47,53,57);
    background: linear-gradient(197deg, rgba(47,53,57,1) 12%, rgba(18,19,19,1) 92%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media screen and (max-width: 75rem) {
        padding: 0 15vw 0 15vw;
    }

    @media screen and (max-width: 37.5rem) {
        padding: 0 5vw 0 5vw;
    }
`;

export const Title = styled.h1`
    font-family: 'Playfair Display', serif;
    color:  rgb(245, 240, 240);
    font-weight: 600;
    font-size: 2.9rem;
    text-align: center;
    margin: 8rem 0 7rem 0;
    letter-spacing: .2rem;
    word-spacing: .5rem;
`;

export const PersonalStatement = styled.p`
    max-width: 120rem;
    color:  rgb(245, 240, 240);
    font-weight: 300;
    align-self: center;
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    margin-bottom: 10rem;

    @media screen and (max-width: 37.5rem) {
        font-size: 1.6rem;
    }
`;