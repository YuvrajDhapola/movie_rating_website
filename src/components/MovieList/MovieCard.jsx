import "./movieCard.css";
import star from "../../assets/glowing-star.png";

const MovieCard = ({ movie }) => {
  if (!movie) return null; // guard clause

  const {
    id,
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
  } = movie;

  return (
    <a
      href={`https://www.themoviedb.org/movie/${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="movie_card"
    >
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className="movie_poster"
          alt={original_title || "Movie poster"}
        />
      ) : (
        <div className="movie_poster placeholder">No Image</div>
      )}

      <div className="movie_details">
        <h3 className="movie_details_heading">{original_title || "Untitled"}</h3>

        <div className="align_center movie_date_rate">
          <p>{release_date || "Unknown Date"}</p>
          <p className="para_rating">
            {vote_average !== undefined ? vote_average : "N/A"}
            <img src={star} alt="rating icon" className="card_emoji" />
          </p>
        </div>

        <p className="movie_description">
          {overview ? overview.slice(0, 100) + "..." : "No description available."}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
