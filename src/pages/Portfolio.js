import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjectList';
import { motion } from 'framer-motion';

const Portfolio = () => {
    return (
        <motion.div className="portfolio" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}>
            <Navigation />
            {/* <div className="text-bg">Portfolio</div> */}
            {/* <div className="portfolio-content">
                <h1>hello depuis portfolio</h1>
            </div> */}
            <ProjectList />
        </motion.div>
    );
};

export default Portfolio;