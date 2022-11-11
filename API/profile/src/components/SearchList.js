/** @format */

import Main from "./Main";
import React, { useEffect } from "react";
import SearchItem from "./SearchItem";
import { useLocation } from "react-router-dom";
import axios from "axios";

function SearchList() {
  const location = useLocation();
  const [searchItems, setSearchItems] = React.useState(); // searchItem에 props로 넘겨줄 데이터를 저장할 state
  const [loading, setLoading] = React.useState(true); // 로딩 상태를 저장할 state

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
    </div>
  );
}

export default SearchList;
