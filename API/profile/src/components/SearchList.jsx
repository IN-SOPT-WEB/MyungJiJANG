/** @format */

import React, { useEffect } from "react";
import styled from "styled-components";
import Main from "./Main";
import SearchItem from "./SearchItem";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SearchList() {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchItems, setSearchItems] = React.useState(); // searchItem에 props로 넘겨줄 데이터를 저장할 state
  const [loading, setLoading] = React.useState(true); // 로딩 상태를 저장할 state
  const handleOnClick = () => {
    navigate("/");
  };

  useEffect(() => {
    getProfile();
  }, [location.state.search]);
  // useEffect(() => { }, [])
  // getProfile()

  const getProfile = async () => {
    setLoading(true);
    axios
      .get(`https://api.github.com/users/${location.state.search}`)
      .then((response) => {
        setLoading(false);
        setSearchItems({
          avatarUrl: response.data.avatar_url,
          login: response.data.login,
          url: response.data.url,
          name: response.data.name,
          followers: response.data.followers,
          following: response.data.following,
          bio: response.data.bio,
        });
      });
  };
  //구조분해할당
  console.log(location);
  return (
    <div>
      <Main />
      {loading === false && <SearchItem SearchItems={searchItems} />}
      <Btn onClick={handleOnClick}>X</Btn>
    </div>
  );
}

const Btn = styled.button`
  color: #3a4b4b;
  border: 1px solid #3a4b4b;
  border-radius: 20%;
  &:hover{  
    background-color : #de0b0b;
    color : #ffffff
  }
  `

export default SearchList;
