import React, { useState } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search_bar_container">
      <div className="search_bar_section">
        <div className="logo_container">
            <Link to="/">
            <img className="logo_image" src="firefist.png" alt="firefist image" />
            </Link>
          <h1>firefist</h1>
        </div>
        <div className="search_bar">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
