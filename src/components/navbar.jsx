import React from "react";
import { Nav, NavLink, NavLinkSpecial, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLinkSpecial to="/" activeStyle>
                        ESTHER WANG
                    </NavLinkSpecial>
                    <NavLink to="/experience" activeStyle>
                        Experience
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/interests" activeStyle>
                        Interests
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Me
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;