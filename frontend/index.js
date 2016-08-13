let markers = [];

function clearMarkers() {
  markers.forEach(marker => {
    marker.setMap(null);
  });
  let places = document.getElementById('places');
  places.innerHTML = "";
  markers = [];
}


function createMarkers(places) {
  var bounds = new google.maps.LatLngBounds();
  var placesList = document.getElementById('places');
  let locations = {};
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

    markers.push(marker);
    let rating;
    rating = (place.rating !== undefined)? place.rating : "n/a";

    let addr = place.geometry.location.lat() + "," + place.geometry.location.lng();

    // locations[place.id] = addr;

    placesList.innerHTML += '<div id="' + addr + '"class=' + '"entry"'
    + '><div class=' + "place" + '>' + place.name + " &#9734;" + rating +
    "</div>" + '<div class=' + "rating" + '>' + place.formatted_address +
    '</div></div>';

    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);

  let entries = document.querySelectorAll(".entry");

  for (let i = 0; i < entries.length; i++) {
    entries[i].addEventListener("click", (e) => {
      let local = window.event.currentTarget.id;
      window.location = 'https://maps.google.com/maps?saddr=san+francisco&daddr=' + local;
    });
  }
}


let callback =  function(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    createMarkers(results);
  }
};

let search = function(input) {
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

}

document.addEventListener('DOMContentLoaded', function() {
  console.log("welcome, zenefits. please pardon any errors. :)");
  // search("coffee");

  document.getElementById("enter").addEventListener("click", e => {
  if (markers) {
    clearMarkers();
  }
  let input = document.getElementById('input').value;
  search(input);
  });

});
