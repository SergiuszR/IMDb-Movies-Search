import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";
import Modal from "./Modal";
import { motion } from "framer-motion";

function Hero() {
  const [modal, setModal] = useState(true);

  function clearLocalStorage() {
    window.localStorage.clear();
    window.location.reload();
  }

  function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  const [value, setValue] = useStickyState("");

  useEffect(() => {
    {
      value != "" ? setModal(false) : setModal(true);
    }
  }, []);

  function showValue() {
    console.log(value);
  }

  return modal ? (
    <Modal
      trigger={modal}
      setTrigger={setModal}
      value={value}
      setValue={setValue}
      showValue={showValue}
    />
  ) : (
    <motion.div
      className="home"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <h1>
        Good to see you, <span className="home-name">{value}</span>.
      </h1>
      <div className="btns">
        <button className="btn-cta">
          <Link to="/movies">Database</Link>
        </button>
        <button className="btn-cta--logout" onClick={clearLocalStorage}>
          Logout
        </button>
      </div>
    </motion.div>
  );
}

export default Hero;
