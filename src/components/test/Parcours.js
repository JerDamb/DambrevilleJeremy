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

const Parcours = () => {
  return (
    <motion.div
      className="otherSkills"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <h3>Autres compétences</h3>
      <div className="list">
          <motion.div variants={item}>
            <img src="./media/RUlogo.png" alt="anglais" />
          </motion.div>
          <motion.div variants={item}>
            <img src="./media/GITlogo.png" alt="github" />
          </motion.div>
          <motion.div variants={item}>
            <img src="./media/JAPlogo.png" alt="japonais" />
          </motion.div>
          <motion.div variants={item}>
            <img src="./media/uxLogo.png" alt="ux design" />
          </motion.div>
          {/* <motion.div variants={item}>
            <img src="./media/RUlogo.png" alt="codepen" />
          </motion.div> */}
          <motion.div variants={item}>
            <img src="./media/photoshopLogo.png" alt="photoshop" />
          </motion.div>
      </div>
    </motion.div>
    // <i className="fas fa-check-square">Photoshop</i>
  );
};

export default Parcours;
