
var fbref;
var URLfb = "https//letsparkiot.firebaseio.com/";

function firebaseGet(){
  var valor;
  var myFirebaseRef = new Firebase("https://asphaltiot.firebaseio.com/asphaltiot/Hola");

// Attach an asynchronous callback to read the data at our posts reference
myFirebaseRef.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});
}

function getPlace(ParkingName){
  fbref = new Firebase(URLfb + ParkingName);
  console.log(URLfb + ParkingName);
  URLfb = URLfb + ParkingName;
}

function getCapacity(Zone){
  fbref = new Firebase(URLfb + '/' +Zone);
  console.log(URLfb + '/' +Zone);
}
