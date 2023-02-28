
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
      


      




     const getElementval = (id) =>{
        return document.getElementById(id).value;
     }

    //$('#find_pw').cl
    var findpw= document.getElementById("find_pw");
    console.log(findpw);
    //console.log(findpw);
    findpw.addEventListener('click', function() {
        console.log("findpw click");
        //Swal.fire('Any fool can use a computer');   
        Swal.showLoading();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            
        });
    });