/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.li `
    list-style-type:none;
    margin: auto;
`;

const Rosenkohl = styled.div `
display:flex;
flex-direction:column;
align-items: center; 
text-transform: uppercase;
justify-content:center;
`
const ImgBox = styled.div `
height:2.2rem;
`
const Img = styled.img `
width:100%;
height:auto;
`

const P = styled.p `font-size:1rem;`

function NavComp(props){
    return (
        <List>
            <Link to={props.navlink}>
                <Rosenkohl>
                    <ImgBox>
                        <Img src={props.image} alt={props.alt} />
                    </ImgBox>
                    <P>{props.text}</P>
                </Rosenkohl>
            </Link> 
        </List>
    )
}

export default NavComp;