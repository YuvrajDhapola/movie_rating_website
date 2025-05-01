import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TopSearches.css';

const TopSearches = ({ onSearchClick }) => {
  const [topSearchTerms, setTopSearchTerms] = useState([]);

  useEffect(() => {
    const fetchTopSearches = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=e35fba9ee4d8e27c290f15962efc8a31`
        );
        const movieTitles = res.data.results
          .slice(0, 10)
          .map((movie) => movie.title);
        setTopSearchTerms(movieTitles);
      } catch (error) {
        console.error('Error fetching top searches:', error);
      }
    };

    fetchTopSearches();
  }, []);

  return (
    <div className="top-searches">
      <h3>🔥 Top Searches</h3>
      <div className="search-tags">
        {topSearchTerms.map((term, index) => (
          <button
            key={index}
            className="search-tag"
            onClick={() => onSearchClick(term)}
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopSearches;
