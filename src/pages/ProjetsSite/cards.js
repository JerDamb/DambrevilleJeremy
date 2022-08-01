import React from 'react';
import Navigation from "../../components/Navigation";

const cards = () => {
  return (
    <div className="Cardspage">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/fontawesome.min.css" integrity="sha384-zIaWifL2YFF1qaDiAo0JFgsmasocJ/rqu7LKYH8CoBEXqGbb9eO+Xi3s6fQhgFWM" crossorigin="anonymous"></link>
      </head>
      <Navigation />
      <div className="cardBg">
        <div className="card1">
          <div className="imgBx">
            <img src="../media/angela.jpg" alt="" />
          </div>
          <div className="content">
            <div className="details">
              <h2>Jane Doe <br /><span>UX/UI design</span></h2>
              <div className="data">
                <h3>342<br /><span>Posts</span></h3>
                <h3>15M<br /><span>Followers</span></h3>
                <h3>285<br /><span>Following</span></h3>
              </div>
              <div className="actionBtn">
                <button>Follow</button>
                <button>Message</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="imgBx">
            <img src="../media/angela.jpg" alt="" />
          </div>
          <div className="content">
            <h3>Dambreville Jérémy<br /><span>designer</span></h3>
            <ul className="icons">
              <li><img src="../media/vueLogo.png" alt="" /></li>
              <li><img src="../media/vueLogo.png" alt="" /></li>
              <li><img src="../media/vueLogo.png" alt="" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cards;