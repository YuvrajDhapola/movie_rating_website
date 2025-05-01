import React from "react";
import { useState } from "react";
import axios from "axios";

import About from "../../components/About/About.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList.jsx";
import TopSearches from "../../components/TopSearches/TopSearches.jsx";

const HomePage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=e35fba9ee4d8e27c290f15962efc8a31&query=${encodeURIComponent(
          query
        )}`
      );
      setSearchResults(res.data.results);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  const [searchText, setSearchText] = useState(""); // state to hold the search text
  

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
    <div className="app">
      <Navbar />

      <div>
        <SearchBar onSearch={handleSearch} />
        {searchResults.length > 0 && (
          <MovieList title="Search Results" movies={searchResults} />
        )}
      </div>
      <TopSearches onSearchClick={handleSearchClick} />

      <About />
    </div>
  );
};

export default HomePage;
