import React from "react";
import "./MainLibrary.scss";
import MovieTile from "./MovieTile";

function MainLibrary({ movies }) {
  return (
    <div className="main-library">
      {movies.map((movie) => (
        <MovieTile
          title={movie.Title}
          year={movie.Year}
          id={movie.imdbID}
          key={movie.imdbID}
          image={movie.Poster}
        />
      ))}
    </div>
  );
}

export default MainLibrary;
