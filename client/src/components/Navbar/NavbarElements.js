import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll} from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height: 8rem;
    margin-top: -8rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: all .5s ease-in-out;

    @media screen and (max-width: 75em) {
        transition: .8s all ease;
    }
`; 

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    z-index: 1;
    width: 100%;
    padding: 0 2.4rem;
`;

export const NavLogo = styled(LinkRouter)`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
    font-style: italic;
    color:  rgb(245, 240, 240);
    cursor: pointer;
    font-size: 2.5rem;
    font-weight: bolt;
    text-decoration:none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 56.25em) {
        display: block;
        height: 8rem;
        display: flex;
        align-items: center;
        font-size: 1.8rem;
        cursor: pointer;
        color:  rgb(245, 240, 240);
    }

    &:hover {
        color: #1ea0eb;
        transition: 0.2s ease-in-out;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 56.25em) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 8rem;
`;

export const NavLinks = styled(LinkScroll)`
    font-size: 1.8rem;
    color:  rgb(245, 240, 240);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem; 
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #1ea0eb;
    }   

    &:hover {
        transition: all .3s ease-in-out;
        color: #1ea0eb;
    }
` ;

