import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';
class ProjectList extends Component {
    state = {
        projects:portfolioData
    }
    render() {
        let {projects} = this.state;
        return (
            <div>
                <div className="portfolio-content">   
                    <div className="left-column"></div>
                    <ul className="radioDisplay">
                        <span></span>
                        <span></span>
                        <span></span>
                    </ul>
                    <div className="separation1"></div>
                    <div className="projects">
                        {
                            projects.map(item => {
                                return (
                                    <Project 
                                        key={item.id}
                                        item={item}
                                    />
                                )
                            })                         
                        }
                    </div>
                    <div className="separation2"></div>
                    <div className="changePage">
                        {/* <span><</span> */}
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        {/* <span>></span> */}
                    </div>
                    <div className="right-column"></div>
                </div>
            </div>
        );
    }
}

export default ProjectList;