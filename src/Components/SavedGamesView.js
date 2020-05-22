import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import firebase from '../FirebaseConfig';
import {v4 as uuidv4} from "uuid";
const db = firebase.firestore();


export default function SavedGamesView({setView}) {

    const [ games, setGames ] = React.useState([]);

// READ FROM DB
const fetchData = async () => {
  const db = firebase.firestore();
  const data = await db.collection('MyVideogames').orderBy('Title').get();
  setGames(data.docs.map((doc) => doc.data()));
};
fetchData();


// DELETE FROM DB 
const deleteGame = () => {
    db.collection("MyVideogames")
    .get()
    .then(res => {
      res.forEach(element => {
        element.ref.delete();
      });
    });
};

    return (
        <Fragment>
        {' '}
        <button className="btn btn-info" onClick={() => setView("allGamesView")}>Back To Games List</button>
        <table className="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Game Title</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game) => (
                    <tr key={uuidv4()}>
                        <td>{game.Title}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => console.log("Game deleted")}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        <>
        <button className="btn btn-danger" onClick={() => deleteGame()}>Delete All Games</button>
        
        </>
    </Fragment>
    )
}


