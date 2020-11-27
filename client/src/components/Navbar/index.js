import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem, 
    NavLinks,
} from './NavbarElements';

const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Nicholas Paterakis</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                offset={-70}
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="expiriences"
                                smooth={true} 
                                duration={500} 
                                spy={true} 
            
                                offset={-70}
                            >
                                Experiences
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="abilities"
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                offset={-70}
                            >
                                Abilities
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                offset={-70}
                            >
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default NavBar;