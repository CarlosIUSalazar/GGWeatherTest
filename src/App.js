import React, {useState} from 'react';
import logo from './logo.svg';
import axios from "axios"
import './App.css';
import gamesByGenera from "./data"
import SingleGameView from "./Components/SingleGameView"
import Title from "./Components/Title"
import Weather from "./Components/Weather"
import GameGallery from "./Components/GameGallery"

//let locationWeather = prompt("Please enter your city", "");

function App() {

  return (
    <>
    <div className="App">
      <Title />
      <Weather />
    </div>
    </>
  );
}

export default App;






//////////////
/////////////
///// RAKUTEN OPEN WEATHER MAP - SEARCH WEATHER DATA
//let locationWeather = ''
// axios({
//   "method":"GET",
//   "url":"https://community-open-weather-map.p.rapidapi.com/find",
//   "headers":{
//   "content-type":"application/octet-stream",
//   "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
//   "x-rapidapi-key":"5cc4b597d5mshcd02023aa7ff562p1fa030jsn879d1ba96904"
//   },"params":{
//   "type":"link%2C accurate",
//   "units":"imperial%2C metric",
//   "q":locationWeather
//   }
// //   })
// console.log(response.data.list[0].weather[0].main)
// console.log(response.data.list[0].weather[0].description)
// setWeather(response.data.list[0].weather[0].main)
// setDescription(response.data.list[0].weather[0].description)



// import React, { Fragment, useState } from "react";
// import CityInput from './Components/cityInput';

// const AddNote = () => {
//   const [description, setDescription] = useState("");

//   const onSubmitForm = async (e) => {
//     e.preventDefault();
//     try {
//       const body = { description };
//       const response = await fetch("http://localhost:5000/api/notes", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });

//       window.location = "/";
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <Fragment>
//       <form className="d-flex mt-5" onSubmit={onSubmitForm}>
//         <input
//           type="text"
//           className="form-control"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <button className="btn btn-success">Add</button>
//       </form>
//     </Fragment>
//   );
// };

// export default AddNote;



//GET GENRE DETAILS
  // axios({
  //     "method":"GET",
  //     "url":"https://rawg-video-games-database.p.rapidapi.com/genres/%7Bid%7D",
  //     "headers":{
  //     "content-type":"application/octet-stream",
  //     "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
  //     "x-rapidapi-key":"5eea2bbb41msh5ba5b5c4f43b1d4p1cf51fjsn19f972efe706"
  //     }
  //     })
  //     .then((response)=>{
  //       console.log(response)
  //     })
  //     .catch((error)=>{
  //       console.log(error)
  //     })

////GET VIDEOGAME INFO BY ID (3498)
  // axios({
  //   "method":"GET",
  //   "url":"https://rawg-video-games-database.p.rapidapi.com/games/58134",
  //   "headers":{
  //   "content-type":"application/octet-stream",
  //   "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
  //   "x-rapidapi-key":"5eea2bbb41msh5ba5b5c4f43b1d4p1cf51fjsn19f972efe706"
  //   }
  //   })
  //   .then((response)=>{
  //     console.log(response)
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })


  //let ourVideoGameGeneres = []

  //GET A LIST OF VIDEOGAMES GENERES
  
    // let videoGameGeneres = {}
    // let vgGeneres = []
    // axios({
    //   "method":"GET",
    //   "url":"https://rawg-video-games-database.p.rapidapi.com/genres",
    //   "headers":{
    //   "content-type":"application/octet-stream",
    //   "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
    //   "x-rapidapi-key":"5eea2bbb41msh5ba5b5c4f43b1d4p1cf51fjsn19f972efe706"
    //   }
    //   })
    //   .then((response)=>{
    //     console.log(response)
    //     videoGameGeneres = response.data.results
    //     console.log(videoGameGeneres)
    //     vgGeneres = videoGameGeneres.map(genere => genere.name)
    //     console.log(vgGeneres)
    //   })
    //   .catch((error)=>{
    //     console.log(error)
    //   })
  ///////
  ///////
  
      //  vgGeneres = ["Action", "Indie", "Adventure", "RPG", "Strategy", 
      //               "Shooter", "Casual", "Simulation", "Puzzle", "Arcade", 
      //               "Platformer", "Racing", "Sports", "Massively Multiplayer", 
      //               "Family", "Fighting", "Board Games", "Educational", "Card"]
      
  
      // let weathers = ["Mist","Smoke","Haze","Dust","Fog","Sand","Dust","Ash",
      //                 "Squall","Tornado","Snow","Rain","Drizzle","Thunderstorm",
      //                 "Clear","Clouds"]
  
      
      // let weatherVGMappings = {
      //   "Mist" : "Strategy"
      //}