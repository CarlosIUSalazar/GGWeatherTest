import React, {useState, useEffect} from "react";
import axios from "axios";
import firebase from '../FirebaseConfig';
import {v4 as uuidv4} from "uuid";
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
      id : uuidv4(),
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
      //window.location = "/";
      alert("Game successfully saved!")
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
    <img src={image} class="singlegame" alt="Videogame"></img>
    <img src={image2} class="singlegame" alt="Videogame"></img>
    <center><div className="singlegameinfo">
    <p><b>Rating:</b> {rating}/5</p>
    <p><b>Platform:</b> {platform}</p>
    <p><b>Released on:</b> {year}</p>
    <p><b>Published by:</b> {publisher}</p>
    <p><b>Website:</b> {website}</p>
    <p><b>Metacritic Rating:</b> {metacriticRating}/100</p>
    <p><b>Description:</b> {description}</p>
    <video  loop autoPlay>
    <source src={videoClip} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
    <source src={videoClip} type="video/ogg" />Your browser does not support the video tag. I suggest you upgrade your browser.
  </video>
  </div></center>
    </>
  )
}

export default SingleGameView