const firebaseConfig = {
    apiKey: "AIzaSyBCwyA3vkm_16ojnCg5n7OBKHgZfl6Axe8",
    authDomain: "train-schedule-fe64d.firebaseapp.com",
    databaseURL: "https://train-schedule-fe64d.firebaseio.com",
    projectId: "train-schedule-fe64d",
    storageBucket: "train-schedule-fe64d.appspot.com",
    messagingSenderId: "922484995555",
    appId: "1:922484995555:web:ef60f4bd85e38bd8295cd6"
  };
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//on click submit info to firebase

$("#add-user").on('click', function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var destination = $("#destination").val();
    var startTime = $("#startTime").val();
    var frequency = $("#frequency").val();

    database.ref().push({
        name : name,
        destination: destination,
        startTime: startTime,
        frequency: frequency,
    });

    $("#name, #destination, #startTime, #frequency").val("");
 

    //prevent refresh
    return false;   

});



//firebase watcher and intial loader

database.ref().on("child_added", function(childSnapshot){
    // set snapshot to vars

    var childName = childSnapshot.val().name;
    var childDestination = childSnapshot.val().destination;
    var childStartTime = childSnapshot.val().startTime;
    var childFrequency = childSnapshot.val().frequency;

    console.log(startTime);

    // //create a moment object
    var minAway;
    //change the year so the first train comes before now
    var firstNewTrain = moment(childStartTime, "hh:mm").subtract(1, "years");
    //difference between the current and first train
    var diffTime = moment().diff(moment(firstNewTrain), "minutes");
    var remainder = diffTime % childFrequency;
    //minutes until next train
    minAway = childFrequency - remainder;
    //next train time 
    var nextTrain = moment().add(minAway, "minutes");
    nextTrain = moment(nextTrain).format("hh:mm");

    var newRow = `<tr>
                    <td>${childName}</td>
                    <td>${childDestination}</td>
                    <td>${childFrequency}</td>
                    <td>${nextTrain}</td>
                    <td>${minAway} minutes away </td>
    </tr>`

    //append to the table

    $("tbody").append(newRow);
})

