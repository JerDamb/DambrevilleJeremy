import React from "react";
import Form from "../components/contact/Form";
import Navigation from "../components/Navigation";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div className="contactContent" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}>
      <span className="text-bg">Contact</span>
      <div className="halfBackground"></div>
      <div className="contact">
        <Navigation />
        <Form />
      </div>
    </motion.div>
  );
};

export default Contact;
