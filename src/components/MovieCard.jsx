import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const imageURL = import.meta.env.VITE_IMG;
const apiKey = import.meta.env.VITE_API_KEY;


const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className="movie-card">
      <img src={imageURL + movie.poster_path} alt="Poster" />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard