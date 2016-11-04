console.log("firebase.js ready to roll!")

//connect to the Firebase db(database)
// Initialize Firebase
  var config = {
  apiKey: "AIzaSyC6AiM4HpfVCmrJwV5vDeH1gCA93FfNFW0",
  authDomain: "venue-df51c.firebaseapp.com",
  databaseURL: "https://venue-df51c.firebaseio.com",
};
  firebase.initializeApp(config);

//this is the whole database
var database = firebase.database();

//we want to grabopnly the "people" part of the database
var peopleData = database.ref('people');

//create a list of people
var peopleList=[];

//load all the children of "people"
// keep listneing for new children
peopleData.on('child_added', function(childData){
    //run these instructions for each child
    console.table( childData.val() );
    var person = childData.val(); //extract data about the person
    peopleList.push( childData.val()); //add the person to the people list
})