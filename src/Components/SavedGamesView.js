import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import firebase from '../FirebaseConfig';
import {v4 as uuidv4} from "uuid";
const db = firebase.firestore();


export default function SavedGamesView({setView}) {

    const [ games, setGames ] = React.useState([]);

    useEffect(() => {
        fetchData();
    }, [])

// READ FROM DB
const fetchData = async () => {
  const db = firebase.firestore();
  const data = await db.collection('MyVideogames').orderBy('Title').get();
  setGames(data.docs.map((doc) => doc.data()));
};



// DELETE ALL GAMES FROM DB 
const deleteAllGame = () => {
    db.collection("MyVideogames")
    .get()
    .then(res => {
      res.forEach(element => {
        element.ref.delete();
      });
    });
    setTimeout(() => {
        window.location.reload(false);
    }, 500); 
};


// DELETE SINGLE GAMES FROM DB 
const deleteSingleGame = (title) => {

    let deleteGame = db.collection('MyVideogames').where('id','==',title);
    deleteGame.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
      setTimeout(() => {
    alert("Game deleted successfully")
        window.location.reload(false);
    }, 500); 
    });



    // db.collection("MyVideogames").doc(title).delete().then(function() {
    //     console.log("Document successfully deleted!");
    // }).catch(function(error) {
    //     console.error("Error removing document: ", error);
    // });


    // var abc = firebase.database().ref('MyVideogames');
    // var key_to_delete = title;
    // var query = abc.orderByChild('Title').equalTo(key_to_delete);
    // query.on('child_added', function(snapshot)
    // {
    //     snapshot.ref.remove();
    //     setTimeout(() => {
    //     alert("Game deleted successfully")
    //     //window.location.reload(false);
    // }, 500); 
    // });



    // db.collection("MyVideogames").doc(id).delete().then(function() {  
    //     console.log("Document successfully deleted!");
    // }).catch(function(error) {
    //     console.error("Error removing document: ", error);
    // });
    // setTimeout(() => {
    //     alert("Game deleted successfully")
    //     //window.location.reload(false);
    // }, 500); 


    // db.collection("MyVideogames")
    // .get(id)
    // .then(res => {
    //   res.forEach(element => {
    //     element.ref.delete();
    //   });
    // });
    // alert("Game deleted successfully")
    // setTimeout(() => {
    //     window.location.reload(false);
    // }, 500); 
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
                            <button className="btn btn-danger" onClick={() => deleteSingleGame(game.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        <>
        <button className="btn btn-danger" onClick={() => deleteAllGame()}>Delete All Games</button>
        
        </>
    </Fragment>
    )
}


