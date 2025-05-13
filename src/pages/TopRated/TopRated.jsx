import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieList from "../../components/MovieList/MovieList.jsx";
import Fire from "../../assets/fire.png";
import { Link } from "react-router-dom";

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // Add hasMore state

  const fetchMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=e35fba9ee4d8e27c290f15962efc8a31&page=${page}`
      );

      if (res.data && res.data.results) {
        setMovies(prev => {
          const ids = new Set(prev.map(m => m.id));
          const newMovies = res.data.results.filter(m => !ids.has(m.id));
          return [...prev, ...newMovies];
        });

        // Check if there's another page available
        if (res.data.page >= res.data.total_pages) {
          setHasMore(false); // Stop fetching if no more pages
        }
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <div>
      
      <InfiniteScroll
        dataLength={movies.length}
        next={() => setPage(prev => prev + 1)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <MovieList type="top_rated" title="Top Rated"  emoji={Fire} movies={movies} />
      </InfiniteScroll>
    </div>
  );
};

export default TopRated;





