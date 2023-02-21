window.onload = function() {
    console.log("onload");

    const firebaseConfig = {
        apiKey: "AIzaSyDnC2aZeVbWL8BFsN_AkUMBqqONuhEaYQQ",
        authDomain: "helloworld-92b33.firebaseapp.com",
        projectId: "helloworld-92b33",
        storageBucket: "helloworld-92b33.appspot.com",
        messagingSenderId: "189901489600",
        appId: "1:189901489600:web:63a92d885fa03c32ee7425",
        measurementId: "G-2XPCHCE6X6"
      };

      firebase.initializeApp(firebaseConfig);


    //$('#find_pw').cl
    var findpw= document.getElementById("find_pw");
    console.log(findpw);
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
            console.log(errorCode + errorMessage);
        });
    });


}