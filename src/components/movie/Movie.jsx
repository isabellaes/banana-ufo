import "./movie.css";

const Movie = ({ title, year, genre }) => {
  return (
    <div className="movie-card">
      <p>{title}</p>
      <p>{year}</p>
      <p>{genre}</p>
    </div>
  );
};

export default Movie;
