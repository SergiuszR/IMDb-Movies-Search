import React, { useEffect } from "react";
import "./ContactUs.scss";
import { motion } from "framer-motion";
import Mailto from "./Mailto";

function ContactUs() {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <h2>
        I'd appreciate any kind of feedback, so go ahead and&nbsp;
        <Mailto
          email="sergiuszrozycki@icloud.com"
          subject="Movie Database Feedback"
          body="Kindly regards,"
        >
          <span>Mail Me!</span>
        </Mailto>
      </h2>
    </motion.div>
  );
}

export default ContactUs;
