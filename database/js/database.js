// Initialize Firebase
var config = {
    apiKey: "AIzaSyBl5S4iI0-sqebtgRCqZ-zWXngwUSqL0u4",
    authDomain: "vandan-bca59.firebaseapp.com",
    databaseURL: "https://vandan-bca59.firebaseio.com",
    projectId: "vandan-bca59",
    storageBucket: "vandan-bca59.appspot.com",
    messagingSenderId: "101106133099"
};
firebase.initializeApp(config);

var preObject = document.getElementById("object");

var dbRefObject=firebase.database().ref().child('object');

dbRefObject.on('value',snap => console.log(snap.val()));