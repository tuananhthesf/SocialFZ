import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCflI0TYdkg0gjcAZi3cx4IrVK1utBZMBY",
    authDomain: "socialfz-db7ad.firebaseapp.com",
    databaseURL: "https://socialfz-db7ad.firebaseio.com",
    projectId: "socialfz-db7ad",
    storageBucket: "socialfz-db7ad.appspot.com",
    messagingSenderId: "339829492797"
  };
 export const firebaseApp = firebase.initializeApp(config);