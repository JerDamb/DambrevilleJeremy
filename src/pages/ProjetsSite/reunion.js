import React from "react";
import Navigation from "../../components/Navigation";

const reunion = () => {
  return (
    <div className="reunionPage">
      <div className="sec">
        <div className="banner">
          <div className="SiteName">Riders</div>
          <ul>
            <li href="#">Home</li>
            <li href="#">menu 1</li>
            <li href="#">menu 2</li>
            <li href="#">menu 3</li>
            <li href="#">menu 4</li>
          </ul>
        </div>
        <div className="body">
          <div className="image">
            <img src="../media/angela.jpg" alt="" />
          </div>
          <div className="image">
            <img src="../media/angela.jpg" alt="" />
          </div>
          <div className="image">
            <img src="../media/angela.jpg" alt="" />
          </div>
          <div className="image">
            <img src="../media/angela.jpg" alt="" />
          </div>
        </div>
        <div className="bottom">test</div>
      </div>
    </div>
  );
};

export default reunion;
