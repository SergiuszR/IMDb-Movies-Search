import React, { useState } from "react";
import { APP_URL_MOVIE_DETAIL, APP_KEY } from "./Library";
import "./MovieTile.scss";
import unavailable from "../assets/img/unavailable.png";
import MovieDetail from "./MovieDetail";

function MovieTile({ title, year, image, id }) {
  const [details, setDetails] = useState([]);
  const [movieDetails, setMovieDetails] = useState(false);

  function scrollLock() {
    document
      .querySelector(".main-library")
      .classList.toggle("main-library--scroll-lock");
  }

  const getDetails = async () => {
    const response = await fetch(
      `${APP_URL_MOVIE_DETAIL}/${APP_KEY}/${id}/Ratings,`
    );
    const data = await response.json();

    setDetails(data);
    setMovieDetails(true);
    scrollLock();
  };

  if (image === "N/A") {
    image === "unavailable";
  }

  function closeDetail(e) {
    e.stopPropagation();
    setMovieDetails(false);
    scrollLock();
  }

  return (
    <div className="movie-tile" onClick={getDetails}>
      <div className="movie-tile--top">
        <div className="cover">
          <img src={image === "N/A" ? unavailable : image} />
        </div>
      </div>
      <div className="movie-tile--bottom">
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
      {movieDetails ? (
        <MovieDetail
          close={closeDetail}
          details={details}
          isOpen={setMovieDetails}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default MovieTile;
