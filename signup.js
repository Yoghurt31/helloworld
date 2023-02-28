
const firebaseConfig = {
    apiKey: "AIzaSyDnC2aZeVbWL8BFsN_AkUMBqqONuhEaYQQ",
    authDomain: "helloworld-92b33.firebaseapp.com",
    databaseURL: "https://helloworld-92b33-default-rtdb.firebaseio.com",
    projectId: "helloworld-92b33",
    storageBucket: "helloworld-92b33.appspot.com",
    messagingSenderId: "189901489600",
    appId: "1:189901489600:web:1b197e170cd4f3c2ee7425",
    measurementId: "G-DGJEESXMPE"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);
  

  console.log('aaaaa');

  

  //reference yuor datebase 
  var helloworldDB = firebase.database().ref("helloword")
 document.getElementById("signupForm").addEventListener('submit', submitForm);
  
 function submitForm(e){
    //e.preventDefault();

    var username = getElementval('username');
    var password = getElementval('password');
    var email = getElementval('email');

    saveMessages(username, password, email);
 }
const saveMessages = (username, password, email) =>{


var newContactForm= {
    username : username,
    password : password,
    email : email,
};

firebase.database().ref('users/').set(newContactForm);

//var newContactForm = helloworldDB.push();
}



 const getElementval = (id) =>{
    return document.getElementById(id).value;
 }