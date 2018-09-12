importScripts('https://www.gstatic.com/firebasejs/3.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.7.1/firebase-messaging.js');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDND3NMm2BdZXTeVAtP3QBDsM7-xbNcba0",
  authDomain: "web-le-74dbb.firebaseapp.com",
  databaseURL: "https://web-le-74dbb.firebaseio.com",
  projectId: "web-le-74dbb",
  storageBucket: "web-le-74dbb.appspot.com",
  messagingSenderId: "503063201337"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();