






function firebaseGet(){
  console.log("Inicio");
  var myFirebaseRef = new Firebase("https://asphaltiot.firebaseio.com/");
  myFirebaseRef.set({
  'asphaltiot': {
      Hola: "88123"
  }
  });
}


function hola(){
  console.log("Hola");
}
