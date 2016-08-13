const createMarkers = require("./markers.js").createMarkers;

let callback = function(results, status) {
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

module.exports = search;
