import React, {useState, useEffect} from 'react';
import {FaTimes, FaBars} from 'react-icons/fa';
import {IconContext} from "react-icons/lib";


import {
    Nav, NavbarCon, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem,
    NavItemBtn, NavBtnLink
} from "./Navbar.elements";
import {Button} from "../../globalStyles";






const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
        <IconContext.Provider value={{ color: "#fff"}}>
                <Nav>
                    <NavbarCon>
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            <NavIcon/>
                                SAM
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/services">
                                    Services
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/products">
                                    Products
                                </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button btnColor>SIGN UP</Button>
                                    </NavBtnLink>
                                ): (
                                    <NavBtnLink to="/sign-up">
                                        <Button fontBig btnColor>
                                            SIGN UP
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarCon>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
