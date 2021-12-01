import React, { Component } from 'react';
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default class Project extends Component {
    state = {
        showInfo: false
    }

    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        })
    }

    render() {
        let { name, languages, languagesIcons, regles, source, info, picture } = this.props.item;
        return (
            <>
                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="Content">
                                <img src={picture} alt=""/>
                                <div className="infosContent">
                                    <div className="head">
                                        <h2>{name}</h2>
                                        {/* <h2 className="stroke">{name}</h2> */}
                                    </div>
                                    <div className="informations">
                                        {info}<br /><br />
                                        {regles}<br /><br />
                                        Languages utilisés: {languages[0]}, {languages[1]}, {languages[2]}
                                    </div>
                                    <div className="languages">
                                        {languagesIcons.map(icon =>
                                            <i className={icon} key={icon}></i>
                                        )}
                                    </div>
                                    <div className="bottom">
                                        <ul onClick={this.handleInfo}>
                                            <li classname="prev"><span></span></li>
                                        </ul>
                                        <button>Lien</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="project" onClick={this.handleInfo}>
                    <div className="icons">
                        {languagesIcons.map(icon =>
                            <i className={icon} key={icon}></i>
                            )}
                    </div>
                    <h3 onClick={this.handleInfo}>{name}</h3>
                    <img src={picture} alt=""/>
                </div> 
            </>
        )
    }
}
