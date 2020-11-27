import styled from 'styled-components';

export const AbilityContainer = styled.div`
    background: rgb(47,53,57);
    background: linear-gradient(197deg, rgba(47,53,57,1) 12%, rgba(18,19,19,1) 92%);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    padding: 0 20vw 10rem 20vw;
`;

export const Title = styled.h1`
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    font-size: 2.9rem;
    color:  rgb(245, 240, 240);
    margin: 8rem 0 7rem 0;
    letter-spacing: .2rem;
    max-width: 120rem;
`;

export const AbilityWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    justify-content: center;
    align-items: center;
    max-width: 120rem;

    @media screen and (max-width: 75em) {
        grid-template-columns: 70vw;
        text-align: center;
    }

    @media screen and (max-width: 37.5rem) {
        grid-template-columns: 90vw;
    }
`;

export const SkillWrapper = styled.div`
    background: rgb(50,113,150);
    background: linear-gradient(197deg, rgba(50,113,150,1) 12%, rgba(35,53,70,1) 92%);
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    transition: all .4s;
    padding: 2rem;

    &:hover {
        transform: scale(1.03);
    }
`;

export const OtherWrapper = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 2rem;
    align-items: center;
`;

export const LanguageWrapper = styled.div`
    background: rgb(50,113,150);
    background: linear-gradient(197deg, rgba(50,113,150,1) 12%, rgba(35,53,70,1) 92%);
    border-radius: 2rem;
    transition: all .4s;
    padding: 2rem;
    width: 100%;
    height: 100%;

    &:hover {
        transform: scale(1.03);
    }
`;

export const HobbyWrapper = styled.div`
    background: rgb(50,113,150);
    background: linear-gradient(197deg, rgba(50,113,150,1) 12%, rgba(35,53,70,1) 92%);
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    transition: all .4s;
    padding: 2rem;

    &:hover {
        transform: scale(1.03);
    }
`;

export const Subtitle = styled.h1`
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    color:  rgb(245, 240, 240);
    color: white;
    font-size: 2.3rem;
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 3rem;
    line-height: 1.6;
`;

export const ItemOrder= styled.span`    
    color: black;
    margin-right: 1rem;
    font-size: 1.5rem;

    @media screen and (max-width: 75em) {
        display: none;
    }
`;

export const ListItem = styled.li`
    font-weight: 600;
    color:  rgb(245, 240, 240);
    margin-bottom: 0.5rem;
    font-size: 1.7rem;
`;