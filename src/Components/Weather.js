import React, {useState} from "react";
import axios from "axios";
import GameGallery from "./GameGallery";
import {v4 as uuidv4} from "uuid";

function Weather() {

    const [location, setLocation] = useState("");
    const [weather,setWeather] = useState("")
    //const [description,setDescription] = useState("")
    const [tempCelsius, setTempCelsius] = useState("")
    const [tempFarenheit, setTempFarenheit] = useState("")
    const [submitLocation, setSubmitLocation] = useState("");

function convertToFarenheit(tempKelvin){
      return Math.round(((tempKelvin - 273.15) * 9/5 + 32), 1) + "°F";
    }
    function convertTemp(tempKelvin){
      return Math.round((tempKelvin - 273.15), 1) + "°C";
    }


  const onSubmit = () => {
    //set location to submitLocation
    setSubmitLocation(location);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=89e18fe833ea4fde74592dc27b57d117`
      )
      .then((response) => {
        //set status
        setTempFarenheit(convertToFarenheit(response.data.main.temp));
        setTempCelsius(convertTemp(response.data.main.temp));
        setWeather(response.data.weather[0].main);
        //setDescription(response.data.weather[0].description);
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return (
        <>
      <div>
        <input
          type="text"
          className="city-input"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="city-add-button" onClick={onSubmit}>
          Add City
        </button>
      </div>

      <h2>Your city is: {submitLocation} 🌩️ The weather is: {weather} 🌩️ Temperature: {tempCelsius} / {tempFarenheit}</h2>
        <GameGallery key = {uuidv4()} weather = {weather}/>
        </>
    )
}

export default Weather;
