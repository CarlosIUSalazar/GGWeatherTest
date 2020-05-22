import React, {useState, useEffect} from "react";
import axios from "axios";
import firebase from '../FirebaseConfig';

const db = firebase.firestore();


//////// ADD TO DATABASE
const SingleGameView = ({gameId, setView}) => {

  const [image, setImage] = useState("")
  const [image2, setImage2] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")
  const [platform, setPlatform] = useState("")
  const [year, setYear] = useState("")
  const [website, setWebsite] = useState("")
  const [publisher, setPublisher] = useState("")
  const [metacriticRating, setMetacriticRating] = useState("")
  const [videoClip, setVideoClip] = useState("")

  const axios = require("axios");
  
  function fetchSingleData(gameId){
    console.log("gameId isss", gameId)
    gameId.toString()
    //let myGameId = gameId.toString();
  axios({
    "method":"GET",
    // "url":`https://rawg-video-games-database.p.rapidapi.com/games/${gameId}`,
    "url":"https://rawg-video-games-database.p.rapidapi.com/games/" + gameId,
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
    "x-rapidapi-key":"5eea2bbb41msh5ba5b5c4f43b1d4p1cf51fjsn19f972efe706"
    }
    })
    .then((response)=>{
      console.log(response)
      setImage(response.data.background_image)
      setImage2(response.data.background_image_additional)
      setTitle(response.data.name)
      setDescription(response.data.description)
      setRating(response.data.rating)
      setPlatform(response.data.platforms[0].platform.name)
      setYear(response.data.released)
      setWebsite(response.data.website)
      setPublisher(response.data.publishers[0].name)
      setMetacriticRating(response.data.metacritic)
      setVideoClip(response.data.clip.clip)
      console.log("Video clip URL",response.data.clip.clip)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  fetchSingleData(gameId)
  console.log("GameID is ", gameId)

  function savetoDatabase(){
    db.collection("MyVideogames").add({
      Description: description,
      Image: image,
      Metacritic: metacriticRating,
      Platform: platform,
      Publisher: publisher,
      Rating: rating,
      Released: year,
      Title: title,
      Video: videoClip,
      Website: website
    })
    .then(function() {
      console.log("Document successfully written!");
      window.location = "/";
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }

  return (
    <>
    <button class="btn btn-info" onClick={() => setView("allGamesView")}>Back To Games List</button>
    <button class="btn btn-warning" onClick={() => savetoDatabase()}>Save In my Database</button>
    <button class="btn btn-info" onClick={() => setView("savedGamesView")}>View My Saved Games</button>
    <h1>{title}</h1>
    <img src={image} width="700" height ="550" alt="Videogame"></img>
    <img src={image2} width="700" height ="550" alt="Videogame"></img>
    <h2>Rating: {rating}</h2>
    <h3>Platform: {platform}</h3>
    <h3>Released on: {year}</h3>
    <h3>Published by: {publisher}</h3>
    <h3>Website: {website}</h3>
    <h3>Metacritic Rating: {metacriticRating}</h3>
    <h4>Description: {description}</h4>
    <video  loop autoPlay>
    <source src={videoClip} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
    <source src={videoClip} type="video/ogg" />Your browser does not support the video tag. I suggest you upgrade your browser.
  </video>
    </>
  )
}

export default SingleGameView