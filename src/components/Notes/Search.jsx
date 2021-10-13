import React from "react";

function Search({ handleSearch }) {
  return (
    <div>
      {" "}
      <input
        type="search"
        className="search-input"
        placeholder="Search..."
        onChange={(event) => {
          handleSearch(event);
        }}
      />
    </div>
  );
}

export default Search;
