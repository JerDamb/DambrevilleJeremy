import React from 'react';
import { motion } from 'framer-motion';

const container = {
    hidden: {
        opacity:0,
        x:20,
    },
    visible: (custom) => ({
        opacity:1,
        x:0,
        scale:1,
        transition: {
            duration:.5,
            delay: custom * .6,
            delayChildren: (custom*custom)*.1, //delay avant l'apparition du premier enfant
            staggerChildren: custom * .2 //delay entre l'apparition de chaque enfants
        }
    })
}

const right = {
    hidden: {
        x:20,
        opacity:0
    },
    visible: {
        x:0,
        opacity:1,
    }
}

const left = {
    hidden: {
        x:-20,
        opacity:0,
    },
    visible: {
        x:0,
        opacity:1,
    }
}

const AutresComp = () => {
    return (
        <div className="AutresCompetences">
            <div className="haut"></div>
            <div className="BarreVerticale"></div>
            <div className="curriculum">
                <motion.div initial="hidden" 
                            animate="visible"
                            variants={container}
                            custom={0}
                            className="exp"
                            >
                    <motion.h4 variants={right}>Apprentissage Javascript, ReactJS, VueJS</motion.h4>
                    <motion.h5 variants={right}>Sept. 2020 - Maintenant</motion.h5>
                    <motion.div variants={right} className="separations"></motion.div>
                    <motion.p variants={right}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quae, consectetur vitae cumque iusto nesciunt harum
                       nulla dignissimos beatae officia, ad similique? Saepe repellat tempora quidem dolore earum suscipit fugit maiores vitae odit neque, 
                       itaque officia officiis temporibus!
                    </motion.p>
                </motion.div>
                <motion.div initial="hidden" 
                            animate="visible"
                            variants={container}
                            custom={1}
                            className="exp"
                            >
                    <motion.h4 variants={left}>SUPINFO master of science</motion.h4>
                    <motion.h5 variants={left}>2014 - 2015</motion.h5>
                    <motion.div variants={left} className="separations"></motion.div>
                    <motion.p variants={left}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quae, consectetur vitae cumque iusto nesciunt harum
                       nulla dignissimos beatae officia, ad similique? Saepe repellat tempora quidem dolore earum suscipit fugit maiores vitae odit neque, 
                       itaque officia officiis temporibus!
                    </motion.p>
                </motion.div>
                <motion.div initial="hidden" 
                            animate="visible"
                            variants={container}
                            custom={2}
                            className="exp"
                            >
                    <motion.h4 variants={right}>Développeur web - Aldebaran Robotics</motion.h4>
                    <motion.h5 variants={right}>Janv. 2013 - Mars 2013</motion.h5>
                    <motion.div variants={right} className="separations"></motion.div>
                    <motion.p variants={right}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quae, consectetur vitae cumque iusto nesciunt harum
                       nulla dignissimos beatae officia, ad similique? Saepe repellat tempora quidem dolore earum suscipit fugit maiores vitae odit neque, 
                       itaque officia officiis temporibus!
                    </motion.p>
                </motion.div>
                <motion.div initial="hidden" 
                            animate="visible"
                            variants={container}
                            custom={3}
                            className="exp"
                            >
                    <motion.h4 variants={left}>BTS SLAM</motion.h4>
                    <motion.h5 variants={left}>2011 - 2013</motion.h5>
                    <motion.div variants={left} className="separations"></motion.div>
                    <motion.p variants={left}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quae, consectetur vitae cumque iusto nesciunt harum
                       nulla dignissimos beatae officia, ad similique? Saepe repellat tempora quidem dolore earum suscipit fugit maiores vitae odit neque, 
                       itaque officia officiis temporibus!
                    </motion.p>
                </motion.div>
                <motion.div initial="hidden" 
                            animate="visible"
                            variants={container}
                            custom={4}
                            className="exp"
                            >
                    <motion.h4 variants={right}>Développeur web - Aldebaran Robotics</motion.h4>
                    <motion.h5 variants={right}>Janv. 2012 - Mars 2012</motion.h5>
                    <motion.div variants={right} className="separations"></motion.div>
                    <motion.p variants={right}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quae, consectetur vitae cumque iusto nesciunt harum
                       nulla dignissimos beatae officia, ad similique? Saepe repellat tempora quidem dolore earum suscipit fugit maiores vitae odit neque, 
                       itaque officia officiis temporibus!
                    </motion.p>
                </motion.div>
            </div>
            <div className="bas"></div>
        </div>  
    );
};

export default AutresComp;