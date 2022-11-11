/** @format */
import React from "react";
import styled from "styled-components";

const SearchItem = ({ SearchItems }) => {
  const { avatarUrl, login, name, followers, following, bio, url } =
    SearchItems;
  return (
    <div className="Header">
      <Avatar src={avatarUrl} alt="thumbnail" />
      <div className="info">
        <a href={url} target="_blank" rel="noopener noreferrer"></a>
        <UserId>{login}</UserId>
      </div>
      <div className="contents">
        <Infor>이름: {name}</Infor>
        <Infor>빨로-워: {followers}</Infor>
        <Infor>빨로-잉: {following}</Infor>
        <Infor>소개 한-마디: {bio}</Infor>
      </div>
    </div>
  );
};

// const Header = styled.div`
//   display: flex;
//   justify-content: center;
//   `

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border: 3px solid #fafafa;
  border-radius: 50%;
  padding: 5px;
  margin: 20px 20px 0 20px;
`;
const UserId = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #ebebeb;
  &:hover{  
    color :#818181
  }
`;
const Infor = styled.p`
  font-size: 15px;
  color: #ebebeb;
  border: #ebebeb 1px solid;
  padding: 5px;
  &:hover{  
    color :#818181
  }
`;

export default SearchItem;
