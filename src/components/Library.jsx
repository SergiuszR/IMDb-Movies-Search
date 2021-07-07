import React, { useState } from "react";
import Input from "./Input";
import MainLibrary from "./MainLibrary";
import "./Library.scss";
import { motion } from "framer-motion";

function Library() {
  const APP_URL_OMDB = `https://www.omdbapi.com/?apikey=cb057022`;

  const [movies, setMovies] = useState([]);

  const [isSearching, setIsSearching] = useState();
  const [isEmpty, setIsEmpty] = useState();
  const [query, setQuery] = useState("");
  const [library, setLibrary] = useState();

  const getMovies = async (event) => {
    if (event.key === "Enter") {
      setIsSearching(true);
      const response = await fetch(`${APP_URL_OMDB}&s="${query}"`);
      const data = await response.json();
      let results = data.Search;

      if (typeof results === "undefined") {
        return setIsEmpty(true) || setIsSearching(false) || setLibrary(true);
      }

      setMovies(results);
      setIsEmpty(false);
      setQuery("");
      setIsSearching(false);
      setLibrary(false);
    }
  };

  return (
    <motion.div
      className="library"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <Input query={query} triggerQuery={setQuery} keyPress={getMovies} />
      {isEmpty ? (
        <div className="empty">
          <h1>Found Nothing!</h1>
        </div>
      ) : (
        ""
      )}
      {isSearching || library ? (
        <div className="waiting">
          <h1>Looking for ...</h1>
        </div>
      ) : (
        <MainLibrary movies={movies} />
      )}
    </motion.div>
  );
}

export default Library;
export const APP_URL_MOVIE_DETAIL = "https://imdb-api.com/en/API/Title/";
export const APP_KEY = "k_ehluhkv1";
