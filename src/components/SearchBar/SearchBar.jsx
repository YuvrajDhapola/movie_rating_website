import { useState } from "react";
import "./searchBar.css";
import { Link } from "react-router-dom";
import TopSearches from "../TopSearches/TopSearches.jsx";

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

  const handleSearchClick = async (term) => {
    setSearchText(term); // shows in search bar if needed

    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=e35fba9ee4d8e27c290f15962efc8a31&query=${term}`
      );
      setSearchResults(res.data.results); // assuming you have state like setSearchResults
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    
      <div className="search_bar_section">
        <div className="logo_container">
            <Link to="/">
            <img className="logo_img" src="fire_wolf.png" alt="firewolf image" />
            </Link>
          <h1>AlphaCritic</h1>
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
        <TopSearches onSearchClick={handleSearchClick} />
      </div>
    
  );
};

export default SearchBar;
