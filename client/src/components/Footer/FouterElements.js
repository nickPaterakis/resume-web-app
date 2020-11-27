import styled from 'styled-components'
import {Link} from 'react-scroll'

export const FooterContainer = styled.footer`
    background: rgb(47,53,57);
    background: linear-gradient(197deg, rgba(47,53,57,1) 12%, rgba(18,19,19,1) 92%);
    padding: 5rem 20vw 5rem 20vw;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 75rem) {
        padding: 5rem 15vw 5rem 15vw;
    }

    @media screen and (max-width: 37.5rem) {
        padding: 5rem 5vw 5rem 5vw;
    }
`;

export const FooterWrap = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 120rem;
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FooterLinkTitle = styled.h1`
    font-size: 2rem;
    margin-bottom: 1.6rem;
    color:  rgb(245, 240, 240);
`;

export const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
    color:  rgb(245, 240, 240);
    cursor: pointer;
`;

export const WebsiteRights = styled.p`
    color:  rgb(245, 240, 240);
    align-self: center;
    font-size: 1.2rem;
`;
