$(document).ready(function () {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAXgyuTMDCMX0xcVXOclx6U6DuWhJI2nSM",
    authDomain: "ucla-extension-test-1.firebaseapp.com",
    databaseURL: "https://ucla-extension-test-1.firebaseio.com",
    projectId: "ucla-extension-test-1",
    storageBucket: "ucla-extension-test-1.appspot.com",
    messagingSenderId: "559953902144"
  };
  firebase.initializeApp(config);


  var database = firebase.database();

  // Initial Values
  var name = "";
  var email = "";
  var comment = "";

  $("#submit").on("click", function (event) {
    // Don't refresh the page!
    event.preventDefault();

    //stores input into variables
    name = $("#name").val();
    email = $("#email").val();
    comment = $("#comment").val();

    database.ref().push({ //set only replaces use .push
        name: name,
        email: email,
        comment: comment,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
    $('#name').val('');
    $('#email').val('');
    $('#comment').val('');

  });
//   database.ref().on("child_added", function (snapshot) {
//     // storing the snapshot.val() in a variable for convenience
//     var sv = snapshot.val();
//     console.log(sv);
//     // Console.loging the last user's data
//     console.log(snapshot.key);
//     console.log(sv.name);
//     console.log(sv.email);
//     console.log(sv.comment);


//   }, function (errorObject) {
//     console.log("Errors handled: " + errorObject.code);
//   });

})