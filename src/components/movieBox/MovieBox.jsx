import "./moviebox.css";
import movies from "../../../movie.json";
import Movie from "../movie/Movie";
const MovieBox = () => {
  return (
    <div className="movie-container">
      <h2>Movies container 🎬</h2>
      <div className="movie-box">
        {movies.Movies.flatMap((movie) => (
          <Movie
            title={movie.title}
            year={movie.year}
            genre={movie.genre}
            img={movie.img}
          ></Movie>
        ))}
      </div>
    </div>
  );
};

export default MovieBox;
