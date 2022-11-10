/** @format */
import React from "react";

const SearchItem = ({ SearchItems }) => {
  const { avatarUrl, login, name, followers, following, bio, url } =
    SearchItems;
  return (
    <div className="Header">
      <img src={avatarUrl} alt="thumbnail" />
      <div className="info">
        <a href={url} target="_blank" rel="noopener noreferrer"></a>
        <h2>{login}</h2>
      </div>
      <div className="contents">
        <p>{name}</p>
        <p>{followers}</p>
        <p>{following}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default SearchItem;
