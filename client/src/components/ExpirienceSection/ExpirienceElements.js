import styled from 'styled-components';

export const ExpirienceContainer = styled.div`
    background: rgb(252,252,252);
    background: linear-gradient(197deg, rgba(252,252,252,1) 0%, rgba(164,166,171,1) 100%);
    position: relative;
    z-index: 1;
`;

export const ExpirienceWrapper = styled.div`
    width: 100%;
    padding: 0 20vw 0 20vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    @media screen and (max-width: 75rem) {
        padding: 0 15vw 0 15vw;
    }

    @media screen and (max-width: 37.5rem) {
        padding: 0 5vw 0 5vw;
    }
`;

export const Title = styled.h1`
    font-family: 'Playfair Display', serif;
    width: 100%;
    max-width: 120rem;
    font-size: 2.9rem;
    font-weight: 600;
    text-align: center; 
    margin: 8rem 0 7rem 0;
    padding-bottom: 3rem;
    border-bottom: 2px solid black;
    letter-spacing: .2rem;
    word-spacing: .5rem;
    justify-self: center;
`;

export const InfoWrapper = styled.div`
    width: 100%;
    max-width: 120rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    align-items: center;
    justify-self: center;
`;

export const WorkWrapper = styled.div`
    width: 100%;
    margin-bottom: 10rem;
    display: grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: auto;
    grid-template-areas: 
    "title ."
    "Expirience Expirience";
    align-items: center;
`;

export const EducationWrapper = styled.div`
    width: 100%;
    display: grid;
    margin-bottom: 10rem;
    grid-template-columns: 25% 75%;
    grid-template-rows: auto;
    grid-template-areas: 
    "title ."
    "Expirience Expirience";
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 25% 73%;
    grid-template-rows: auto;
    grid-column-gap: 2%;
    grid-row-gap: 2rem;
    grid-area: Expirience;

    @media screen and (max-width: 75em) {
        grid-template-columns: 1fr;
        grid-row-gap: .5rem;
    }

    @media screen and (max-width: 37.5em) {
        grid-row-gap: 0;
    }
`;

export const Subtitle = styled.h2`
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    letter-spacing: 3px;
    word-spacing: .5rem;
    margin-bottom: 1rem;
    font-size: 2.8rem;
    color: rgb(29, 73, 117);
    grid-area: title;

    @media screen and (max-width: 75em) {
        margin-bottom: 0;
    }
`;

export const Column1 = styled.div`
    display: flex;
    justify-self: flex-start;
    flex-direction: column;
    margin-top: .3rem;
    line-height: 1.6;

    @media screen and (max-width: 75em) {
        margin-top: 3rem;
    }
`;

export const Column2 = styled.div`
`;

export const Year = styled.p`
    font-size: 1.8rem;
`;

export const OrganizationName = styled.p`
    font-weight: bold;
    font-size: 2rem;
`;

export const Position = styled.p`
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    letter-spacing: .2rem;
    font-size: 2rem;
`;

export const Experience = styled.p`
    font-size: 2rem;
    
    @media screen and (max-width: 37.5em) {
        font-size: 1.6rem;
    }
`;

