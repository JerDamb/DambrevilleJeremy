import React, { Component } from 'react';
import Progress from "../knowledges/Progress";

class Comp extends Component {
    state = {
        languages: [
          { id: 1, img:'./media/htmlcssLogo.png', value: "Html/Css", perc: 85 },
          { id: 2, img:'./media/sassLogo.png', value: "Sass", perc: 70 },
          { id: 3, img:'./media/proxy-image.png', value: "javascript", perc: 50 },
          { id: 4, img:'./media/reactLogo.png', value: "ReactJS", perc: 40 },
          { id: 5, img:'./media/vueLogo.png', value: "VueJS", perc: 15 },
        ],
      };
      render() {
        let { languages } = this.state;
    
        return (
          <div className="languagesFrameworks">
            <Progress
              languages={languages}
              className="languagesDisplay"
              title="languages & frameworks"
            />
          </div>
        );
      }
}

export default Comp;