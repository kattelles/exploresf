let markers = [];

function clearMarkers() {
  markers.forEach(marker => {
    marker.setMap(null);
  });
  let places = document.getElementById('places');
  places.innerHTML = "";
  markers = [];
}

let createMarkers = function(places) {
  let bounds = new google.maps.LatLngBounds();
  let placesList = document.getElementById('places');
  let locations = {};
  for (let i = 0, place; place = places[i]; i++) {
    let image = {
      url: "./app/assets/img/flag.png",
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    let marker = new google.maps.Marker({
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
};

module.exports = {
  createMarkers: createMarkers,
  clearMarkers: clearMarkers
};
