import React from "react";
import "./MovieDetail.scss";
import { motion } from "framer-motion";

function MovieDetail({ details, close }) {
  if (details.id === null) {
    return (
      <div className="movie-card--error">
        <p>{details.errorMessage}</p>
        <p>Change API Key!</p>
      </div>
    );
  }

  return (
    <motion.div
      className="movie-card"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className="left-side">
        <img src={details.image} alt="" />
      </div>
      <div className="right-side">
        <div className="movie-title">
          <h2>
            {details.title}
            <span>({details.year})</span>
          </h2>
        </div>
        <div className="movie-runtime">
          <p>{details.runtimeStr}</p>
        </div>
        <div className="movie-genres">
          <p>{details.genres}</p>
        </div>
        <div className="movie-plot">
          <p>{details.plot}</p>
        </div>
        <div className="movie-stars">
          <p>
            Cast: <span>{details.stars}</span>
          </p>
        </div>
        <div className="movie-directors">
          <p>
            Directed By: <span>{details.directors}</span>
          </p>
        </div>
        <div className="movie-rating">
          <h1>{details.imDbRating}</h1>
        </div>
      </div>

      <button onClick={close} className="close-btn">
        X
      </button>
    </motion.div>
  );
}

export default MovieDetail;
