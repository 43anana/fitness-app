import React from "react";
import Headline from "../../components/Headline";
import YourWorkout from "../../components/YourWorkout";
import styled from "styled-components";
//import Layer11 from "../img/Layer11.svg";

const WrapperHead =styled.div ` 
width:50%;
margin-left:5%;
margin-top:7rem;
margin-bottom:5.3rem;
`
const Div = styled.h1 `
width:100%;
`
// function Greeting() {
//   const date = new Date();
//   const currentTime = date.getHours();
//   var greeting;
//   if (currentTime <12){
//     greeting= "hi";
//   } else {
//     greeting = "lala";
//   }
//   return;
// }

const Greeting = "Guten Morgen, Dorotha";

const Dashboard = () => {
    return (
        <Div>
          <WrapperHead>
            <Headline headline={Greeting} />
          </WrapperHead>
          <YourWorkout image="../img/lady.png" />
        </Div>
    );
}

export default Dashboard;

  //    //return( <Style color:"red"; />)
    // customStyle.color = "green";