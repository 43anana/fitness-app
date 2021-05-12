/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Div = styled.div `
width: 100%;
margin-bottom:11rem;
`
const SmText = styled.p `
font-size: 1.2rem;
line-height:1.5rem;
`
const Div2 = styled.div `
width:90%;
margin:auto;
`
const ImgBox = styled.div `
margin-top:1rem;
margin-bottom:1rem;
background-image: var(--color-beige);
`
const Img= styled.img `
margin:auto;
width:100%;
height:21.4rem;
`

const DivHead =styled.div `
display:flex;
align-items:center;
justify-content:space-between;
`


function YourWorkout(props) {
    return (
        <Div>
        <Div2>
        <DivHead>
            <h2>Dein Workout heute</h2>
            <SmText>Trainingsplan</SmText>
        </DivHead>
        <ImgBox>
            <Img src={props.image} alt="avatar-img" />
        </ImgBox> 
        <p>Titel des Workouts</p>
        <p>Titel des Programms</p>
        <SmText>XXX kcal · 26 Min. · Beweglichkeit</SmText> 
        </Div2>

        </Div>
    );
}


YourWorkout.propTypes = {
image:PropTypes.string
}



export default YourWorkout;