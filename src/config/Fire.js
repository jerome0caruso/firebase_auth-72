import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCm6qSCw5QfKiqJPURf19-OgMj2JncdgAY",
    authDomain: "signup-signoutfirebase.firebaseapp.com",
    projectId: "signup-signoutfirebase",
    storageBucket: "signup-signoutfirebase.appspot.com",
    messagingSenderId: "96374811063",
    appId: "1:96374811063:web:1c615f8f037428c44c6032"
  };


  const fire = initializeApp(firebaseConfig);

  export default fire;