/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Main() {
  const [focus, setFocus] = useState(false); // 포커스 함수

  let [history, setHistory] = React.useState([]); // 재선언하기 위해서는 let으로!!! ES6 오류!!!
  const historyStorage = localStorage.getItem("history");
  const setLocalStorage = () => {
    localStorage.setItem("history", JSON.stringify(history));
  };

  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (search === "") {
      console.log("검색어를 입력해주세요");
      return;
    } else {
      setSearch(e.target.value);
      if (!history.includes(search)) {
        history.push(search);
      }
      setLocalStorage();
      setSearch("");
    }
  };
  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      // navigate("/search/" + search);
      navigate(`/search/${search}`, { state: { search } });
    }
  };
  const findHistory = (e) => {
    navigate(`/search/${e.target.textContent}`, {
      state: { search: e.target.textContent },
    });
  };

  const initHistory = () => {
    if (historyStorage != null) {
      history = JSON.parse(historyStorage);
    }
  };

  const onFocusInput = () => {
    if (focus === false) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  };

  

  const onClickDelete = (searchHistory) => {
    history = history.filter((history) => history !== searchHistory);
    setLocalStorage();
    setHistory(history);
  };

  return (
    <div>
      {initHistory()}
      <Title>깃-허브 프로삘 검색</Title>
      <Form
        type="text"
        value={search}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onClick={handleOnSubmit}
        onFocus={onFocusInput}
      />

      {focus && (
        <SearchHistory>
          {history.map((searchHistory) => (
            <div>
              <RecordBtn onClick={findHistory}>{searchHistory}</RecordBtn>
              <DeleteBtn onClick={() => onClickDelete(searchHistory)}>
                X
              </DeleteBtn>
            </div>
          ))}
        </SearchHistory>
      )}
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

const SearchHistory = styled.button`
  color: #131313;
`;

const RecordBtn = styled.button`
  font-size: 1rem;
  font-family: "HBIOS-SYS";
  border: 3px solid #222222;
  border-radius: 10%;
  background-color: #f7f7f7;
  color: #1f1f1f;
  &:hover {
    background-color: #c32323;
    color: #f7f7f7;
  }
`;

const DeleteBtn = styled.button`
  margin: 5px;
  border: 3px solid #222222;
  border-radius: 50%;
  background-color: #f7f7f7;
  color: #1f1f1f;
  &:hover {
    background-color: #c32323;
    color: #f7f7f7;
  }
`;
export default Main;
