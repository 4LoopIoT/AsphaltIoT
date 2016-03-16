
var fbref;
var place;
var area;
var URLfb = "https://letsparkiot.firebaseio.com/";

function getPlace(Place){
	
	fbref = new Firebase(URLfb + Place);
	place = Place;
  	console.log(URLfb + place);
		
}

function getArea(Area){
	
	fbref = new Firebase(URLfb + place + '/' + Area);
	area = Area;
  	console.log(URLfb + place + '/' + Area);
		
}

function getSizeArea(){

	var size;

	fbref = new Firebase("https://letsparkiot.firebaseio.com/" + place + '/' + area);

	fbref.once("value", function(snapshot) {
		console.log(snapshot.numChildren());
	});
}


function getZone(ParkingName){
	
	fbref = new Firebase(URLfb + ParkingName);
	parking = ParkingName;
  	console.log(URLfb + ParkingName);
		
}



