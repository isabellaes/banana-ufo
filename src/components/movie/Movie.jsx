import "./movie.css";

const Movie = ({ title, year, genre, img }) => {
  return (
    <div className="movie-card">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{year}</p>
      <p>{genre}</p>
    </div>
  );
};

export default Movie;
