import styled from 'styled-components';

export const ContactContainer = styled.div`
    background: rgb(252,252,252);
    background: linear-gradient(197deg, rgba(252,252,252,1) 0%, rgba(164,166,171,1) 100%);
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-family: 'Playfair Display', serif;
    font-size: 2.9rem;
    font-weight: 600;
    text-align: center; 
    margin: 8rem 0 7rem 0;
    letter-spacing: .2rem;
    word-spacing: .5rem;
`;

export const ContactWrapper = styled.div`
    width: 60%;
    max-width: 120rem;
    background: rgb(50,113,150);
    background: linear-gradient(197deg, rgba(50,113,150,1) 12%, rgba(35,53,70,1) 92%);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    line-height: 1.5;
    border-radius: 2rem;
    margin-bottom: 10rem;

    @media screen and (max-width: 75em) {
        width: 70vw;
        grid-template-columns: 1fr;
        justify-self: center;
        grid-row-gap: 5rem;
    }

    @media screen and (max-width: 37.5em) {
        width: 90vw;
        grid-template-columns: 1fr;
    }
`;

export const Column1 = styled.div`
    max-width: 55rem;
    width: 100%;
    height: 100%;
`;

export const ContactElementsWrapper = styled.div`
    margin-top: 4.5rem;
    margin-left: 3rem;
`;

export const ContactElement = styled.p`
    color:  rgb(245, 240, 240);
    margin-bottom: 0.5rem;
    font-size: 2rem;
`;

export const Column2 = styled.div`
    text-align: left;
    padding: 0 1rem 5rem 0;

    @media screen and (max-width: 75em) {
        align-self: center;
        padding-right: 0;
    }
`;

export const Form = styled.form`
    margin-top: 3rem; 
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const FormGroup = styled.div`
    padding: 1.5rem 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    color: rgb(245, 240, 240);
    font-size: 2rem;
    text-align: left;
    align-self: flex-start;
    margin-bottom: .5rem;
`;

export const Input = styled.input`
    width: 100%;
    padding: 1.2rem .3rem;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    resize: vertical;
    background-color: rgba(0, 0, 0, .0);
    font-size: 1.7rem;
    color: rgb(245, 240, 240);

    &:hover {
        border-bottom: 1px solid rgb(245, 240, 240);
        transition: 0.8s ease;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 1.2rem .3rem;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    height: 20rem;
    background-color: transparent;
    font-size: 1.7rem;
    color: rgb(245, 240, 240);

    &:hover {
        border-bottom: 1px solid rgb(245, 240, 240);
        transition: 0.8s ease;
    }
`;

export const Button = styled.button`
    border-radius: 5rem;
    background: rgb(245, 240, 240);
    white-space: nowrap;
    padding: 1.8rem 5.8rem;
    margin-top: 2.5rem;
    color: #010606;
    font-size: 1.6rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all .8s ease-in-out;
        background: #1ea0eb;
        color: #010605;
    }
`;


export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 24rem;
    margin-top: 1.5rem;
    position: absolute;
`;

export const SocialIconLink = styled.a`
    color: rgb(245, 240, 240);
    font-size: 2.9rem;

    &:hover {
        transition: all .3s ease-in-out;
        color: #1ea0eb;
    }
`;

export const Error = styled.div`
    display: flex;
    align-items: center;
    margin-top: .6rem;
    width: 100%;
    height: 3rem;
    background-color: rgb(235, 75, 75);
    border: 1px solid  rgb(230, 14, 14);
    border-radius: 6px;
`;

export const ErrorMessage = styled.p`
    color:  rgb(245, 240, 240);
    font-size: 1.2rem;
    margin-left: .8rem;
`;