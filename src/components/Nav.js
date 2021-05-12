import React from "react";
import NavComp from "./NavComp";
import styled from "styled-components";

const NavBg = styled.nav `
background-color: var(--color-beige);
position: sticky;
height:5rem;
`;

const NavUl = styled.ul `
display:flex;
justify-content:space-around;
align-items:center;
margin-bottom:0;
`

const NavItems = [
    {
        id: 1,
        image: "../img/vector4.svg",
        alt:"home-icon",
        navlink: "/",
        text:"Home"
    },
    {
        id: 2,
        image: "../img/group12.svg",
        alt:"browse-icon",
        navlink: "/browse",
        text:"Browse"
    },    
    {
        id: 3,
        image: "../img/group13.svg",
        alt:"profile-icon",
        navlink: "/profile",
        text:"Profile"
    }
];


function Nav() {
return(
    <NavBg>
        <NavUl>{NavItems.map(NavComp)}</NavUl>
    </NavBg>
)
}


export default Nav;