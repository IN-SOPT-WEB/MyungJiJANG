/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Main() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      // navigate("/search/" + search);
      navigate(`/search/${search}`, { state: { search } });
    }
  };
  return (
    <div>
      <Title>깃-허브 프로삘 검색</Title>
      <Form type="text" value={search} onChange={onChange} onKeyUp={onKeyUp} />
    </div>
  );
}
// onKeyup 키보드 자판 눌렀다 뗐을 때 이벤트 실행

const Title = styled.h1`
  color: #e22525;
`;

const Form = styled.input`
  width: 300px;
  height: 30px;
  border: 3px dotted #2f2f2f;
`;

export default Main;
