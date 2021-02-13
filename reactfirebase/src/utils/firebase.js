import  firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig ={

    apiKey: "AIzaSyC29PnGkW5TxQ88AaJCRW0ZHv3IGhh82TQ",
    authDomain: "practicexxx-997b0.firebaseapp.com",
    projectId: "practicexxx-997b0",
    storageBucket: "practicexxx-997b0.appspot.com",
    messagingSenderId: "1048974033770",
    appId: "1:1048974033770:web:09ca9981b28bdbce865b13",
    measurementId: "G-VW380HW9MD"

}


firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

// db.collection('cars').get().then(
//      snapshot =>{
//          snapshot.forEach((doc) => {
//                     console.log(doc.data());
//          })
//     }
// ).catch(
//     e => {
//         console.log(e);
//     }
// )

export default firebase;