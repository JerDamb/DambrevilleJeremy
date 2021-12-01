import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1, //temps avant l'apparition du premier enfant
      staggerChildren: 0.2, //temps entre l'apparition de chaque enfant
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const PasseTemps = () => {
  return (
    <motion.div
      className="hobbiesContainer"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <h3>centres d'Intérêts</h3>
      <div className="hobbies">
        <ul>
          <motion.li variants={item}>
            <i className="fas fa-language"></i>
            <span> Apprentissage Japonais</span>
          </motion.li>
          <motion.li variants={item}>
            <i className="fas fa-book-reader"></i>
            <span> Lecture</span>
          </motion.li>
          <motion.li variants={item}>
            <i className="fas fa-running"></i>
            <span> Sport </span>
          </motion.li>
        </ul>
        <ul>
          <motion.li variants={item}>
            <i className="fas fa-film"></i>
            <span> Films</span>
          </motion.li>
          <motion.li variants={item}>
            <i className="fas fa-plane"></i>
            <span> Voyages</span>
          </motion.li>
          <motion.li variants={item}>
            <i className="fas fa-space-shuttle"></i>
            <span> Astrophysique</span>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
};

export default PasseTemps;
