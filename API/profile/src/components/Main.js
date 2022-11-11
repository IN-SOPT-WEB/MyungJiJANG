/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

function Main() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onKeyUp = (e) => { 
    if (e.key === "Enter") {
      // navigate("/search/" + search);
      navigate(`/search/${ search }`, { state: {search} });
    }
  }
  return (
    <div>
      <h1>GitHub Profile Finder</h1>
      <input type="text" value={search} onChange={onChange} onKeyUp={ onKeyUp } />
    </div>
  );
}
// onKeyup 키보드 자판 눌렀다 뗐을 때 이벤트 실행


export default Main;
