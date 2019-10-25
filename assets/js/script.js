var firebaseConfig = {
    apiKey: "AIzaSyAzgvRCDO4i9pPGjWlAaSkPoLO3dk5kihg",
    authDomain: "train-hw-42d15.firebaseapp.com",
    databaseURL: "https://train-hw-42d15.firebaseio.com",
    projectId: "train-hw-42d15",
    storageBucket: "train-hw-42d15.appspot.com",
    messagingSenderId: "151334590293",
    appId: "1:151334590293:web:d38454615fef164081c1dc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var trainScheduleRef = firebase.database().ref('/');
trainScheduleRef.on('value', function(snapshot) {
    addTrainToSchedule(snapshot.val());
});

function addTrainToSchedule(trainObjects) {
    for (train in trainObjects) {
        var currentTrain = trainObjects[train];
        console.log("The current Train is " + currentTrain);

        var timeArr = currentTrain["First Train"].split(":");
        console.log("The timeArr is " + timeArr);

        var trainTime = moment().hours(timeArr[0]).minutes(timeArr[1]);
        console.log("The train time is " + trainTime);

        var trainMinute = trainTime.get("minutes");
        trainMinute = moment(trainMinute, 'mm');
        var currMinutes = moment().minutes();
        currMinutes = moment(currMinutes, 'mm');
        console.log(trainMinute);
        console.log(currMinutes);

        var minutesAway = trainMinute.diff(currMinutes, "minutes");
        console.log(minutesAway);

        var nextTrainTime = moment().add(minutesAway, 'm').format('LT');
        console.log(nextTrainTime);

        var newRow = $("<tr>");
        var trainNameData = $("<td>" + currentTrain["Train Name"] + "</td>");
        var trainDestinationData = $("<td>" + currentTrain["Destination"] + "</td>");
        var trainFreqData = $("<td>" + currentTrain["Frequency"] + "</td>");

        var nextTimeForTable = $("<td>" + nextTrainTime + "</td>");
        var minutesForTable = $("<td>" + minutesAway + "</td>");

        newRow.append(trainNameData);
        newRow.append(trainDestinationData);
        newRow.append(trainFreqData);
        newRow.append(nextTimeForTable);
        newRow.append(minutesForTable);

        $("tbody").append(newRow);
    }
}

$("#add-user").on('click', function(event) {
    event.preventDefault();

    var trainName = $("#trainName").val();
    var destination = $("#destination").val();
    var firstTrain = $("#firstTrain").val();
    var frequency = $("#frequency").val();

    database.ref().push({
        "Train Name": trainName,
        "Destination": destination,
        "First Train": firstTrain,
        "Frequency": frequency,
    });

});