/** @format */

import React from "react";
import GlobalStyle from "./components/Globalstyle";

import Header from "./components/Header";
import Quiz from "./components/Main";
import Replay from "./components/Replay";


function App() {


  return (
    <>
      <GlobalStyle />
      <Header />
      <Quiz /> 
    </>
  );
} 

export default App;


