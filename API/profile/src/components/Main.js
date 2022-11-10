/** @format */

import React, { useState } from "react";

function Main() {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <h1>GitHub Profile Finder</h1>
      <input type="text" value={search} onChange={onChange} />
    </div>
  );
}

export default Main;
