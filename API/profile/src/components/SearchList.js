/** @format */

import Main from "./Main";
import React from "react";
import SearchItem from "./SearchItem";

const sampleList = {
  avartarUrl: "https://via.placeholder.com/160",
  login: "사용자 아이디 이름",
  url: "https://google.com",
  name: "사용자 이름",
  followers: 0,
  following: 0,
  bio: "사용자 소개",
};

function SearchList() {
  return (
    <div>
      <Main />
      <SearchItem SearchItems={sampleList} />
    </div>
  );
}

export default SearchList;
