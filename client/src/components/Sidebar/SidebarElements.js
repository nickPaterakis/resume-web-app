import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 11;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.5s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;

    &:hover {
        color: #1ea0eb;
        transition: 0.2s ease-in-out;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 8rem);
    text-align: center;

    @media screen and (max-width: 37.5em) {
        grid-template-rows: repeat(6, 6rem);
    }
`;

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #1ea0eb;
        transition: 0.2s ease-in-out;
    }
`;
