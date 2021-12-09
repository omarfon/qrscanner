importScripts ( "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js" ) ;
importScripts ( "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js" ) ;

firebase.initializeApp(
    {
        apiKey: "AIzaSyAeQShDZg2RufiDYCNU2sjhP_h7OjA8mcc",
        authDomain: "adminnotificaciones.firebaseapp.com",
        projectId: "adminnotificaciones",
        storageBucket: "adminnotificaciones.appspot.com",
        messagingSenderId: "621272075990",
        appId: "1:621272075990:web:23fca6230f3ece9e290377",
        measurementId: "${config.measurementId}"
    }
)
const messaging = firebase.messaging();