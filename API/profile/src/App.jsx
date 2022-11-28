/** @format */
import Main from "./components/Main";
import SearchList from "./components/SearchList";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyle from "./components/Globalstyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/search" />} />
          <Route path="/search" element={<Main />} />
          <Route path="/search/:id" element={<SearchList />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
