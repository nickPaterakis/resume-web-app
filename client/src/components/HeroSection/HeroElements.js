import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
    height: 100vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0, 0, 0, 0.1) 0%, 
            rgba(0, 0, 0, 0.2) 100%
            ), 
            linear-gradient(
                180deg, 
                rgba(0, 0, 0, 0.1) 0%, 
                transparent 100%
            );
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overFlow: hidden;
`;

export const BgImg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 120rem;
    position: absolute;
    padding: .8rem 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
    color:  rgb(245, 240, 240);
    font-size: 3.8rem;
    text-align: center;
    line-height: 6rem;
    letter-spacing: .3rem;

    @media screen and (max-width: 37.5em) {
        font-size: 2.8rem;
    }
`;

export const HeroP = styled.p`
    margin-top: 2.4rem;
    color:  rgb(245, 240, 240);
    font-size: 2.8rem;
    text-align: center;
    max-width: 60rem;

    @media screen and (max-width: 37.5em) {
        font-size: 2.3rem;
    }
`;

export const Img = styled.img`
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
`;
