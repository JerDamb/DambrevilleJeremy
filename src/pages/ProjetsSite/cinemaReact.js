// import React from "react";
// import { useEffect, useState } from "react";

// const cinemaReact = () => {
//   const [popular, setPopular] = useState([]);

//   useEffect(() => {
//     fetchPopular();
//   }, []);

//   const fethPopular = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/popular?api_key=7d94ddd67c0351df6cee4a2ad2c4afda&language=en-US&page=1"
//     );
//     const movies = await data.json();
//     console.log(movies);
//     setPopular(movie.results);
//   };

//   return <div>hello</div>;
// };

// export default cinemaReact;
