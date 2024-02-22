import "./moviebox.css";
import movies from "../../../movie.json";
import Movie from "../movie/Movie";
const MovieBox = () => {
  return (
    <div className="moviebox">
      {movies.Movies.flatMap((movie) => (
        <Movie
          title={movie.title}
          year={movie.year}
          genre={movie.genre}
        ></Movie>
      ))}
    </div>
  );
};

export default MovieBox;
