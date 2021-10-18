import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <div className="experience">    
            <motion.div initial={{x:0}} animate={{x:100}} className="vertical"></motion.div>
            <div className="curriculum">
                <div className="exp">
                    <h4>Apprentissage Javascript, ReactJS, VueJS</h4>
                    <h5>Sept. 2020 - Maintenant</h5>
                    <div className="separations"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quae, consectetur vitae cumque iusto nesciunt harum nulla dignissimos beatae officia, ad similique? Saepe repellat tempora quidem dolore earum suscipit fugit maiores vitae odit neque, itaque officia officiis temporibus!</p>
                </div>
                <div className="exp">
                    <h4>SUPINFO master of science</h4>
                    <h5>2014 - 2015</h5>
                    <div className="separations"></div>
                    <p>Mollitia, quae, consectetur vitae cumque iusto nesciunt harum nulla dignissimos beatae officia, ad similique? Saepe repellat tempora quidem dolore earum suscipit fugit maiores vitae odit neque, itaque officia officiis temporibus!</p>
                </div>
                <div className="exp">
                    <h4>Développeur web - Aldebaran Robotics</h4>
                    <h5>Janv. 2013 - Mars 2013</h5>
                    <div className="separations"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quae, consectetur vitae cumque iusto nesciunt harum nulla dignissimos beatae officia, ad similique? Saepe repellat tempora quidem dolore earum suscipit fugit maiores vitae odit neque, itaque officia officiis temporibus!</p>
                </div>
                <div className="exp">
                    <h4>BTS SLAM</h4>
                    <h5>2011 - 2013</h5>
                    <div className="separations"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, quae, consectetur vitae cumque iusto nesciunt harum nulla dignissimos beatae officia, ad similique? Saepe repellat tempora quidem dolore earum suscipit fugit maiores vitae odit neque, itaque officia officiis temporibus!</p>
                </div>
                <div className="exp">
                    <h4>Développeur web - Aldebaran Robotics</h4>
                    <h5>Janv. 2012 - Mars 2012</h5>
                    <div className="separations"></div>
                    <p>Mollitia, quae, consectetur vitae cumque iusto nesciunt harum nulla dignissimos beatae officia, ad similique? Saepe repellat tempora quidem dolore earum suscipit fugit maiores vitae odit neque, itaque officia officiis temporibus!</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;