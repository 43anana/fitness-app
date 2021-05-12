import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Nav from "./components/Nav";
//import Button from "./Button";
import Dashboard from "./pages/Dashboard/Dashboard";
import Browse from "./pages/Browse";
//import styled from "styled-components";

// const AppHeader = styled.div `
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;
// `;


function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
    <div>
        <Route path="/" exact component={Dashboard} />
        <Route path="/browse" component={Browse} />
        <Route path="/" component={Nav} />
    </div>
    </BrowserRouter>
    </div>

    
    //exact entspricht übrigens: exact={true}

    
    // <div className="App">
    //   <GlobalStyles />
    //   <Dashboard />
    //   <Nav />
    
    // <Button type="submit">It´s a Buhutton</Button>
    //   {/* <AppHeader className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <Button type="submit">It´s a Buhutton</Button>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </AppHeader> */}
    // </div>
  );
}

export default App;


// BEISPIEL routerconst PageOne = () => {
//   return <div>PageOne</div>
// };

// const PageTwo = () => {
//   return <div>PageTwo</div>
// };
// function App() {
//   return (
//     <BrowserRouter>
//       <Route path="/" exact component={PageOne}/>
//       <Route path="/pagetwo" component={PageTwo} />
//     </BrowserRouter>
    
//     usw..
