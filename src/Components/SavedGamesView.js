import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import firebase from '../FirebaseConfig';

const db = firebase.firestore();


export default function SavedGamesView({setView}) {

    const [ games, setGames ] = React.useState([]);

// READ FROM DB
const fetchData = async () => {
  const db = firebase.firestore();
  const data = await db.collection('MyVideogames').get();
  setGames(data.docs.map((doc) => doc.data()));
};
fetchData();


// DELETE FROM DB 
const deleteGame = (id) => {
  db
    .collection('MyGames')
    //.doc(`${id}`)
    .doc(id)
    .delete()
    .then(function() {
      console.log('Note successfully deleted');
    })
    .catch(function(error) {
      console.error('Error removing Game: ', error);
    });
};

    return (
        <Fragment>
        {' '}
        <button onClick={() => setView("allGamesView")}>Back To Games List</button>
        <table className="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Game Title</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game) => (
                    <tr key={game.id}>
                        <td>{game.Title}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteGame(game.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
    )
}


