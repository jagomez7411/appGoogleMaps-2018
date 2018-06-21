// JavaScript Document

$(document).ready(function(e) {
document.addEventListener("deviceready", onDeviceReady, false);

});

function onDeviceReady() {

$('#posicion').on ('click', function (){
	getPosition();
	});
	
$('#watch').on('click', function (){
	watchPosition();
});	
}

	function getPosition() {

   var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
	
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position) {

      alert('Latitude: '          + position.coords.latitude          + '\n' +
         'Longitude: '         + position.coords.longitude         + '\n' +
         'Altitude: '          + position.coords.altitude          + '\n' +
         'Accuracy: '          + position.coords.accuracy          + '\n' +
         'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         'Heading: '           + position.coords.heading           + '\n' +
         'Speed: '             + position.coords.speed             + '\n' +
         'Timestamp: '         + position.timestamp                + '\n');
   };

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}

//
//function watchPosition() {
//<div id="googleMap" style="width:100%;height:400px;"></div>

//<script>
//function myMap() {
//var mapProp= {
//    center:new google.maps.LatLng(18.90383,-98.4245731),
//    zoom:19,
//};
//var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
//}
<!--</script>-->

//<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDFd0aiE5FttY8XRAFI9ecTSpgo2vP-qMk&callback=myMap"></script>

  

//}
