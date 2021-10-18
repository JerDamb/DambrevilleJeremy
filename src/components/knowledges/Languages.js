import React, { Component } from "react";
import Progress from "./Progress";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, img:'./media/proxy-image.png', value: "Html/Css", perc: 85 },
      { id: 2, img:'./media/RUlogo.png', value: "Sass", perc: 65 },
      { id: 3, img:'./media/proxy-image.png', value: "javascript", perc: 40 },
      { id: 4, img:'./media/GITlogo.png', value: "ReactJS", perc: 40 },
      { id: 5, img:'./media/GITlogo2.png', value: "VueJS", perc: 15 },
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

export default Languages;
