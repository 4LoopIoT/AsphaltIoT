
var fbref;
var place;
var area;
var URLfb = "https://letsparkiot.firebaseio.com/";
var array = [];
var counter = 0;

function getPlaces(array){
	
	var ref = new Firebase("https://letsparkiot.firebaseio.com/");

	ref.once("value", function(snapshot) {
	
  		snapshot.forEach(function(childSnapshot) {
    		var key = childSnapshot.key();
    		array[counter] = key;
    		console.log(array);
    		counter++;
  		});
	});

	console.log(array);
	//setTimeout(return array,100);
}

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
		size = snapshot.numChildren();
		console.log(size);

	});

	return size
}






