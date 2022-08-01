import React, { Component } from "react";

class mastermind extends Component {
  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.async = true;
  //   script.src = "script.js";
  //   this.div.appendChild(script);
  // }
  render() {
    return (
      <div class="game-container">
        <div class="left-container">
          <div class="left-center">
            <div class="rules">
              Le but du jeu est de trouvé la combinaison choisie par le maitre
              du jeu, le MasterMind. <br />
              <br />
              Vous avez un maximum de 10 tentatives afin de trouver la
              combinaison gagnante. <br />
              <br />
              Selectionnez la couleur que vous souhaitez et intégrés où vous le
              voulez dans la ligne, le jeu vous indiquera si vous vous approchez
              du but à l'aide de piquets noirs et gris. <br />
              <br />
              Le piquet noir indique que vous avez bonne couleur et bien placée.
              <br />
              Le piquet gris indique que vous avez une bonne couleur mais mal
              placée. <br />
              <br />
              Prenez votre temps et tentez de renverser le MasterMind ! <br />
            </div>
            {/* <!-- <div class="tries">Score:</div> --> */}
          </div>
        </div>

        <div class="center-container">
          <div class="master-container">
            <div class="title">MASTERMIND</div>
          </div>
          <div class="guess-container">
            <div class="colors-container">
              <div class="colors-guess">
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
              </div>
              <div class="pegs-guess">
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
              </div>
            </div>
            <div class="colors-container">
              <div class="colors-guess">
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
              </div>
              <div class="pegs-guess">
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
              </div>
            </div>
            <div class="colors-container">
              <div class="colors-guess">
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
              </div>
              <div class="pegs-guess">
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
              </div>
            </div>
            <div class="colors-container">
              <div class="colors-guess">
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
              </div>
              <div class="pegs-guess">
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
              </div>
            </div>
            <div class="colors-container">
              <div class="colors-guess">
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
              </div>
              <div class="pegs-guess">
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
              </div>
            </div>
            <div class="colors-container">
              <div class="colors-guess">
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
              </div>
              <div class="pegs-guess">
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
              </div>
            </div>
            <div class="colors-container">
              <div class="colors-guess">
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
              </div>
              <div class="pegs-guess">
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
              </div>
            </div>
            <div class="colors-container">
              <div class="colors-guess">
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
              </div>
              <div class="pegs-guess">
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
              </div>
            </div>
            <div class="colors-container">
              <div class="colors-guess">
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
                <div class="color"></div>
              </div>
              <div class="pegs-guess">
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
              </div>
            </div>
            <div class="colors-container">
              <div class="colors-guess">
                <div class="color active"></div>
                <div class="color active"></div>
                <div class="color active"></div>
                <div class="color active"></div>
              </div>
              <div class="pegs-guess first-grade">
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
                <div class="peg"></div>
              </div>
            </div>
          </div>
          <div class="selection-container">
            <div class="choices red"></div>
            <div class="choices orange"></div>
            <div class="choices yellow"></div>
            <div class="choices lightblue"></div>
            <div class="choices green"></div>
            <div class="choices blue"></div>
          </div>
        </div>

        <div class="right-container">
          <button class="validate">Valider</button>
        </div>
      </div>
    );
  }
}

export default mastermind;
