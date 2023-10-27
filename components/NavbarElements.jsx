import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "./constants"; 


export const Nav = styled.nav`
background: ${COLORS.dark1};
height: 85px;
display: flex;
justify-content: space-between;
padding: 0 1rem;
z-index: 9;
position: sticky;
top: 0;  
`;

export const NavLinkSpecial = styled(Link)`
color: ${COLORS.light1}; 
font-size: 20pt; 
display: flex;
align-items: center;
text-decoration: none;
padding: 0 5rem;
height: 100%;
cursor: pointer;
`

export const NavLink = styled(Link)`
color: ${COLORS.light2};
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: ${COLORS.light1};
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: left;
margin-right: -24px;
`;
