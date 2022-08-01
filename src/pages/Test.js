import React from 'react';
import Navigation from '../components/Navigation';
import AutresComp from '../components/test/AutresComp';
import Comp from '../components/test/Comp';
import Parcours from '../components/test/Parcours';
import PasseTemps from '../components/test/PasseTemps';
import { motion } from 'framer-motion';


const Test = () => {
    return (
        <motion.div className="test" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}>
            <Navigation /> 
            {/* <span className="text-bg">Compétences</span> */}
            <div className="test-container">
                <AutresComp />
            </div> 
            <div className="test-collone-droite">
                <Comp /> 
                <Parcours />
                <PasseTemps />
            </div>
        </motion.div>
    );
};

export default Test;