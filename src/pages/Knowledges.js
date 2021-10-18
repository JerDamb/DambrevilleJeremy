import React from 'react';
import Navigation from '../components/Navigation'
import Languages from '../components/knowledges/Languages'
import Experience from '../components/knowledges/Experience'
import OtherSkills from '../components/knowledges/OtherSkills'
import Hobbies from '../components/knowledges/Hobbies'
import { motion } from 'framer-motion'

const Knowledges = () => {
    return (
        <motion.div className="knowledges" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}>
            <Navigation />
            {/* <span className="text-bg">Compétences</span> */}
            <div className="knowledgesContent">
                
            </div>
        </motion.div>       
    );
};

export default Knowledges;