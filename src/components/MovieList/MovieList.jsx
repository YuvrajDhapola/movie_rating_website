import { useEffect, useState } from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard.jsx";
import FilterGroup from "./FilterGroup.jsx";
import DarkMode from "../DarkMode/DarkMode.jsx";
import { Link } from "react-router-dom";

const MovieList = ({ type, title, emoji, movies: externalMovies }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);

  useEffect(() => {
    if (externalMovies && externalMovies.length > 0) {
      setMovies(externalMovies);
      setFilteredMovies(externalMovies);
    } else {
      fetchMovies();
    }
  }, [externalMovies]);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=e35fba9ee4d8e27c290f15962efc8a31`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilteredMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilteredMovies(movies);
    } else {
      setMinRating(rate);

      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilteredMovies(filtered);
    }
  };

  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <div className="logo">
 <Link to="/">
          <img 
            className="logo_image"
            src="fire_wolf.png"
            alt="firewolf image"
          />
        </Link>
        <h2 className="movie_list_heading">{title}</h2>
        </div>
       

       

        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingChange={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select name="" id="" className="movie_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Decending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {Array.isArray(filteredMovies) &&
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </section>
  );
};

export default MovieList;
