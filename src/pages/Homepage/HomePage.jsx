import { useState } from "react";
import axios from "axios";

import About from "../../components/About/About.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList.jsx";

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

  const [searchText, setSearchText] = useState("");

  return (
    <div className="app">
      <Navbar />

      <SearchBar onSearch={handleSearch} />
      {searchResults.length > 0 && (
        <MovieList title="Search Results" movies={searchResults} />
      )}

      <About />
    </div>
  );
};

export default HomePage;
