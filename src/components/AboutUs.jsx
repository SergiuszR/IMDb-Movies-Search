import React from "react";
import "./AboutUs.scss";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.div
      className="about-us"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <div className="lead">
        <h1>Your movie & TV shows database</h1>
      </div>
      <div className="description">
        <p>
          Search directly from <span>IMDB</span>
        </p>
      </div>
    </motion.div>
  );
}

export default AboutUs;
