import React, {useState,useEffect} from "react";
import axios from "axios";
import {gamesByGenera, weathers} from "../data"
import {v4 as uuidv4} from "uuid";
import SingleGameView from "./SingleGameView"
import SavedGamesView from "./SavedGamesView"

let tempRandomGameArray2 = [];
let tempRandomGameArray3 = [];
let random = '';

function GameGallery(props){
let randomNumUsed = []
let count = 0;

function createGameArrayFromWeather(weather) 
{
     tempRandomGameArray2 = [];
     tempRandomGameArray3 = [];
    switch (weather) {
        case "Mist":
            for (let i = 0; i < 3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Western.length));
                randomNumUsed.push(random)
                tempRandomGameArray2.push(gamesByGenera.Western[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Thriller.length));
                tempRandomGameArray2.push(gamesByGenera.Thriller[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Mystery.length));
                tempRandomGameArray2.push(gamesByGenera.Mystery[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Family.length));
                tempRandomGameArray2.push(gamesByGenera.Family[random])
            }
            //console.log("tempRandomGameArray2",tempRandomGameArray2)
            break;
        case "Smoke":
            for (let i = 0; i < 3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Horror.length));
                randomNumUsed.push(random)
                tempRandomGameArray2.push(gamesByGenera.Horror[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Action.length));
                tempRandomGameArray2.push(gamesByGenera.Action[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Adventure.length));
                tempRandomGameArray2.push(gamesByGenera.Adventure[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Family.length));
                tempRandomGameArray2.push(gamesByGenera.Family[random])
            }
            //console.log("tempRandomGameArray2",tempRandomGameArray2)
            break;
        case "Haze":
            for (let i = 0; i < 3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Western.length));
                randomNumUsed.push(random)
                tempRandomGameArray2.push(gamesByGenera.Western[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Action.length));
                tempRandomGameArray2.push(gamesByGenera.Action[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Thriller.length));
                tempRandomGameArray2.push(gamesByGenera.Thriller[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Mystery.length));
                tempRandomGameArray2.push(gamesByGenera.Mystery[random])
            }
            //console.log("tempRandomGameArray2",tempRandomGameArray2)
            break;
        case "Dust":
            for (let i = 0; i < 4; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Western.length));
                randomNumUsed.push(random)
                tempRandomGameArray2.push(gamesByGenera.Western[random])
            }

            for (let i = 0; i<4; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Thriller.length));
                tempRandomGameArray2.push(gamesByGenera.Thriller[random])
            }

            for (let i = 0; i<4; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Mystery.length));
                tempRandomGameArray2.push(gamesByGenera.Mystery[random])
            }

            //console.log("tempRandomGameArray2",tempRandomGameArray2)
            break;
        case "Fog":
            for (let i = 0; i < 3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Horror.length));
                randomNumUsed.push(random)
                tempRandomGameArray2.push(gamesByGenera.Horror[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Thriller.length));
                tempRandomGameArray2.push(gamesByGenera.Thriller[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Romance.length));
                tempRandomGameArray2.push(gamesByGenera.Romance[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Action.length));
                tempRandomGameArray2.push(gamesByGenera.Action[random])
            }
            //console.log("tempRandomGameArray2",tempRandomGameArray2)
            break;
        case "Sand":
            for (let i = 0; i < 3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Western.length));
                randomNumUsed.push(random)
                tempRandomGameArray2.push(gamesByGenera.Western[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Thriller.length));
                tempRandomGameArray2.push(gamesByGenera.Thriller[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Mystery.length));
                tempRandomGameArray2.push(gamesByGenera.Mystery[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Family.length));
                tempRandomGameArray2.push(gamesByGenera.Family[random])
            }
            //console.log("tempRandomGameArray2",tempRandomGameArray2)
            break;
        case "Ash":
            for (let i = 0; i < 3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Western.length));
                randomNumUsed.push(random)
                tempRandomGameArray2.push(gamesByGenera.Western[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Thriller.length));
                tempRandomGameArray2.push(gamesByGenera.Thriller[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Mystery.length));
                tempRandomGameArray2.push(gamesByGenera.Mystery[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Horror.length));
                tempRandomGameArray2.push(gamesByGenera.Horror[random])
            }
            //console.log("tempRandomGameArray2",tempRandomGameArray2)
            break;
        case "Squall":
            for (let i = 0; i < 3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Western.length));
                randomNumUsed.push(random)
                tempRandomGameArray2.push(gamesByGenera.Western[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Action.length));
                tempRandomGameArray2.push(gamesByGenera.Action[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Adventure.length));
                tempRandomGameArray2.push(gamesByGenera.Adventure[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Horror.length));
                tempRandomGameArray2.push(gamesByGenera.Horror[random])
            }
            //console.log("tempRandomGameArray2",tempRandomGameArray2)
            break;
        case "Tornado":
            for (let i = 0; i < 3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Western.length));
                randomNumUsed.push(random)
                tempRandomGameArray2.push(gamesByGenera.Western[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Action.length));
                tempRandomGameArray2.push(gamesByGenera.Action[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Adventure.length));
                tempRandomGameArray2.push(gamesByGenera.Adventure[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Horror.length));
                tempRandomGameArray2.push(gamesByGenera.Horror[random])
            }
            //console.log("tempRandomGameArray2",tempRandomGameArray2)
            break;
        case "Snow":
            for (let i = 0; i < 3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Family.length));
                randomNumUsed.push(random)
                tempRandomGameArray2.push(gamesByGenera.Family[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Adventure.length));
                tempRandomGameArray2.push(gamesByGenera.Adventure[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Romance.length));
                tempRandomGameArray2.push(gamesByGenera.Romance[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Action.length));
                tempRandomGameArray2.push(gamesByGenera.Action[random])
            }
            //console.log("tempRandomGameArray2",tempRandomGameArray2)
            break;
        case "Rain":
            for (let i = 0; i < 3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Romance.length));
                randomNumUsed.push(random)
                tempRandomGameArray2.push(gamesByGenera.Romance[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Family.length));
                tempRandomGameArray2.push(gamesByGenera.Family[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Mystery.length));
                tempRandomGameArray2.push(gamesByGenera.Mystery[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Thriller.length));
                tempRandomGameArray2.push(gamesByGenera.Thriller[random])
            }
            //console.log("tempRandomGameArray2",tempRandomGameArray2)
            break;
        case "Drizzle":
            for (let i = 0; i < 3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Romance.length));
                randomNumUsed.push(random)
                tempRandomGameArray2.push(gamesByGenera.Western[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Family.length));
                tempRandomGameArray2.push(gamesByGenera.Thriller[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Mystery.length));
                tempRandomGameArray2.push(gamesByGenera.Mystery[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Thriller.length));
                tempRandomGameArray2.push(gamesByGenera.Thriller[random])
            }
            //console.log("tempRandomGameArray2",tempRandomGameArray2)
            break;
        case "Thunderstorm":
            for (let i = 0; i < 3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Action.length));
                randomNumUsed.push(random)
                tempRandomGameArray2.push(gamesByGenera.Action[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Adventure.length));
                tempRandomGameArray2.push(gamesByGenera.Adventure[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Romance.length));
                tempRandomGameArray2.push(gamesByGenera.Romance[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Horror.length));
                tempRandomGameArray2.push(gamesByGenera.Horror[random])
            }
            //console.log("tempRandomGameArray2",tempRandomGameArray2)
            break;
        case "Clear":
            for (let i = 0; i < 4; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Action.length));
                randomNumUsed.push(random)
                tempRandomGameArray2.push(gamesByGenera.Action[random])
            }

            for (let i = 0; i<4; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Family.length));
                tempRandomGameArray2.push(gamesByGenera.Family[random])
            }

            for (let i = 0; i<4; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Adventure.length));
                tempRandomGameArray2.push(gamesByGenera.Adventure[random])
            }

            //console.log("tempRandomGameArray2",tempRandomGameArray2)
            break;
        case "Clouds":
            for (let i = 0; i < 3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Mystery.length));
                randomNumUsed.push(random)
                tempRandomGameArray2.push(gamesByGenera.Mystery[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Romance.length));
                tempRandomGameArray2.push(gamesByGenera.Romance[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Thriller.length));
                tempRandomGameArray2.push(gamesByGenera.Thriller[random])
            }

            for (let i = 0; i<3; i++){
                random = Math.floor(Math.random() * Math.floor(gamesByGenera.Western.length));
                tempRandomGameArray2.push(gamesByGenera.Western[random])
            }
            break;
        default:
            // code block
    }
    console.log("tempRandomGameArray2",tempRandomGameArray2)
    for (let item of tempRandomGameArray2){
        for (let key in item){
            tempRandomGameArray3.push(item[key])
        }
    }
    console.log("tempRandomGameArray3",tempRandomGameArray3)
    count++;
    console.log("Count is ",count)

    fetchImages();
}

let tempImageSourceArray = []

const [image, setImage] = useState("")
const [gameTitle, setGameTitle] = useState("")
const [description, setDescription] = useState("")
const [rating, setRating] = useState("")
const [gameURL, setGameURL] = useState([])
const [url, setUrl] = useState([]);
const [gameId, setGameId] = useState("");
const [view, setView] = useState("allGamesView")

let gameFullInformation = []
async function fetchImages(){
  async function fetchData(){
    for (let i=0; i<tempRandomGameArray3.length; i++){
        //console.log("test!")
      const response = await axios({
        method: "GET",
        url: "https://rawg-video-games-database.p.rapidapi.com/games/" + tempRandomGameArray3[i],
        headers: {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key": "5eea2bbb41msh5ba5b5c4f43b1d4p1cf51fjsn19f972efe706",
        },
    });
    gameFullInformation.push(response.data)
    //console.log(response.data)
    tempImageSourceArray.push(response.data["background_image"])
    //console.log("URLL", url)
    }
  }
  await fetchData();
  await setUrl(gameFullInformation)
  
}


useEffect(() => {
    if (props.weather !== "") {
        console.log("weather is", props.weather)
      createGameArrayFromWeather(props.weather);
    }
}, [props.weather])

///////////////////RENDER SECTION//////////////////

if (view === "allGamesView"){
return ( 
<>
<button className="btn btn-info" onClick={() => setView("savedGamesView")}>View My Saved Games</button>
<div className="gameGallery">
  {url.map((data) => {
    return <div key={uuidv4()} className="images"><img alt={data["id"]} src = {data["background_image"]} onClick={() =>{(setGameId(data["id"])); setView("singleGameView")}}/></div>;
  })}</div>
</>
);
}
else if(view === "singleGameView"){
    return (
        <SingleGameView gameId = {gameId} setView = {setView}/>
    )
}
else if(view === "savedGamesView"){
    return(
        <SavedGamesView setView = {setView}/>
    )
}
}
export default GameGallery;




//////
// async function fetchImages() {
//     //  for (let i=0; i<tempRandomGameArray.length; i++){
//     const response = await axios({
//         method: "GET",
//         url: "https://rawg-video-games-database.p.rapidapi.com/games/" + tempRandomGameArray[11],
//         headers: {
//             "content-type": "application/octet-stream",
//             "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
//             "x-rapidapi-key": "5eea2bbb41msh5ba5b5c4f43b1d4p1cf51fjsn19f972efe706",
//         },
//     });
//     const getArr = (res) => {
//         tempImageSourceArray.push(res.data["background_image"])
//         setUrl(tempImageSourceArray);
//         console.log("tempimagesourcearray", tempImageSourceArray)

//         return <div > < img src = {response.data["background_image"]} width = "600" height = "400" /></div >
//     };
//     setTimeout(function () {
//         getArr(response);
//     }, 200);
//     //      }
//
///

//console.log("Object values", Object.values(tempRandomGameArray2))
// let tempRandomGameArray3 = Object.values(tempRandomGameArray2)
// console.log("tempRandomGameArray3",tempRandomGameArray3)



// <table className = "table mt-5 text-center" >
// <thead >
// <tr >
// <th > Game </th> </tr> 
// </thead>
//  {/* <tbody > 
//      {/* {url.map((game) => ( */ } 
// <tr key = {0} >
// <td> <img src = {"https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"} width = "300" height = "200"/></td>
// <td> <img src ={"https://media.rawg.io/media/games/4ea/4ea507ceebeabb43edbc09468f5aaac6.jpg"} width = "300" height = "200" /></td>
// <td> <img src = {"https://media.rawg.io/media/games/a79/a79d2fc90c4dbf07a8580b19600fd61d.jpg"} width = "300" height = "200" /></td>
// </tr> 
// <tr>
// <td> <img src = {"https://media.rawg.io/media/games/b0a/b0a6ef260b58ef99b40faddd0f9ebed3.jpg"} width = "300" height = "200" /></td>
// <td> <img src = {"https://media.rawg.io/media/games/7b4/7b49b5ec4cb5b84dbe4fce38cdf443c7.jpg"} width = "300" height = "200"/></td>
// <td> <img src = {"https://media.rawg.io/media/screenshots/eb8/eb85bd4abfe2015435954fb8dd4c193c.jpg"} width = "300" height = "200"/></td>
// </tr> 
// <tr >
// <td> <img src = {"https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"} width = "300" height = "200" /></td>
// <td> <img src = {"https://media.rawg.io/media/games/eb5/eb514db62d397c64288160d5bd8fd67a.jpg"} width = "300" height = "200" /></td>
// <td> <img src = {"https://media.rawg.io/media/games/278/2783e31b00d7b87905e5346a1df1ccfb.jpg"} width = "300" height = "200" /></td>
// </tr> 
// <tr>
// <td> <img src = {"https://media.rawg.io/media/screenshots/114/114bd115895412641186145e0f42f76f.jpg"} width = "300" height = "200" /></td>
// <td> <img src = {"https://media.rawg.io/media/games/daa/daaee07fcb40744d90cf8142f94a241f.jpg"} width = "300" height = "200" /></td>
// <td> <img src = {"https://media.rawg.io/media/games/42f/42fe1abd4d7c11ca92d93a0fb0f8662b.jpg"} width = "300" height = "200" /></td>
// </tr>
// </tbody>  */}
// </table> 



// React.useEffect(() => {
//   for (let i = 0; i<tempRandomGameArray.length; i++){  
//     return Promise.all([
//     axios({
//       method: "GET",
//       url: "https://rawg-video-games-database.p.rapidapi.com/games/"+tempRandomGameArray[i],
//       headers: {
//         "content-type": "application/octet-stream",
//         "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
//         "x-rapidapi-key": "5eea2bbb41msh5ba5b5c4f43b1d4p1cf51fjsn19f972efe706",
//       },
//     })
//       .then((response) => {
//         console.log(response);
//         //setImage(response.data["background_image"])
//         tempImageSourceArray.push(response.data["background_image"])
//         setGameTitle(response.data.name)
//         setDescription(response.data.description)
//         setRating(response.data.rating)
//         console.log("game url", response.data["background_image"])
//         setGameURL(response.data["background_image"]);
//         tempImageSourceArray.push(response.data["background_image"]);

//       }).then(() => {
//           //getMoreInfo()
//         console.log("tempImageSourceArray",tempImageSourceArray);
//       })
//       .catch((error) => {
//         console.log(error);
//       })]);
//     }
// }, [])


//function getMoreInfo() {
////GET VIDEOGAME INFO BY ID (3498)
// for (let i = 0; i<tempRandomGameArray.length; i++){  
//   axios({
//     method: "GET",
//     url: "https://rawg-video-games-database.p.rapidapi.com/games/"+tempRandomGameArray[i],
//     headers: {
//       "content-type": "application/octet-stream",
//       "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
//       "x-rapidapi-key": "5eea2bbb41msh5ba5b5c4f43b1d4p1cf51fjsn19f972efe706",
//     },
//   })
//     .then((response) => {
//       console.log(response);
//       setImage(response.data["background_image"])
//       tempImageSourceArray.push(response.data["background_image"])
//       setGameTitle(response.data.name)
//       setDescription(response.data.description)
//       setRating(response.data.rating)
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   }
//}