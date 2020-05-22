import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDW_J1FGqI4p5vYNiWfkhjyTnLe0L-Ec0Q",
  authDomain: "ggwheather.firebaseapp.com",
  databaseURL: "https://ggwheather.firebaseio.com",
  projectId: "ggwheather",
  storageBucket: "ggwheather.appspot.com",
  messagingSenderId: "687928053821",
  appId: "1:687928053821:web:2bdeedab530ebbd5bfda54"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;