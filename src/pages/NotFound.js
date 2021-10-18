import React from 'react';
import { motion } from 'framer-motion';

const Notfound = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            PAGE 404
        </motion.div>
    );
};

export default Notfound;