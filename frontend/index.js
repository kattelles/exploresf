function createMarkers(places) {
  var bounds = new google.maps.LatLngBounds();
  var placesList = document.getElementById('places');

  for (var i = 0, place; place = places[i]; i++) {
    var image = {
      url: "./app/assets/img/flag.png",
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    var marker = new google.maps.Marker({
      map: map,
      icon: image,
      title: place.name,
      position: place.geometry.location,
      animation: google.maps.Animation.DROP
    });

    placesList.innerHTML += '<div class=' + "place" + '>' + place.name + '</div>';
    placesList.innerHTML += '<div class=' + "rating" + '>' + place.formatted_address + '</div>';

    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);
}


let callback =  function(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    createMarkers(results);
  }
};

document.addEventListener('DOMContentLoaded', function() {
  console.log("welcome, zenefits. please pardon any errors. :)");

  document.getElementById("enter").addEventListener("click", e => {
  let input = document.getElementById('input').value;

  let service;
  let map;
  let infowindow;

  let SF = new google.maps.LatLng(37.7758,-122.435);
  map = window.map;

  var request = {
    location: SF,
    radius: '500',
    query: `${input}`
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
  });

});
