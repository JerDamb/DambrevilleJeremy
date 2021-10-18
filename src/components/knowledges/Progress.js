import React from "react";

const Progress = (props) => {
  // console.log(props);
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      {/* <div className="separation1"></div> */}
      <div className="containerBars">
        {props.languages.map((item) => {
          let percent = 100;
          let progressBar = (item.perc / percent) * 100 + "%";

          return (
            <div className="languagesFill">
              <img src={item.img} alt="icon" />
              <div key={item.id} className="languagesList">
                <li className="languagesName">{item.value}</li>
                <div className="staticBar">
                  <div
                    className="progressBar"
                    style={{ width: progressBar }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="separation2"></div> */}
    </div>
  );
};

export default Progress;

// import React from 'react';

// const Progress = ({done}) => {
//     const [style, setStyle] = React.useState({});

//     setTimeout(() =>{
//         const newStyle = {
//             opacity: 1,
//             width: `${done}%`
//         }

//         setStyle(newStyle);
//     }, 200);

//     return (
// 		<div className="progress">
// 			<div className="progress-done" style={style}>
// 				{done}%
// 			</div>
// 		</div>
// 	)
//   };

//   const App = () => (
// 	<>
// 		<Progress done="50"/>
// 	</>
// );

// export default App;
