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

//we want to grab only the "venues" part of the database
var venuesData = database.ref('venues');

//create a list of venues
var venuesList=[];

//load all the children of "venues"
// keep listneing for new children
venuesData.on('child_added', function(childData){
    //run these instructions for each child
    // console.table( childData.val() );
    venuesList.push( childData.val());
    
})


//we want to grab only the "services" part of the database
var servicesData = database.ref('services'); 

//create a list of services
var servicesList=[];

//load all the children of "venues"
// keep listneing for new children
servicesData.on('child_added', function(childData){
    //run these instructions for each child
    // console.table( childData.val() );
    servicesList.push( childData.val());
    
})
