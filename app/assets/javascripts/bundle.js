/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var clearMarkers = __webpack_require__(1).clearMarkers;
	var search = __webpack_require__(2);
	
	document.addEventListener('DOMContentLoaded', function () {
	  console.log("welcome, zenefits. please pardon any errors. :)");
	
	  document.getElementById("enter").addEventListener("click", function (e) {
	    clearMarkers();
	    var input = document.getElementById('input').value;
	    search(input);
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var markers = [];
	
	function clearMarkers() {
	  markers.forEach(function (marker) {
	    marker.setMap(null);
	  });
	  var places = document.getElementById('places');
	  places.innerHTML = "";
	  markers = [];
	}
	
	var createMarkers = function createMarkers(places) {
	  var bounds = new google.maps.LatLngBounds();
	  var placesList = document.getElementById('places');
	  var locations = {};
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
	    var rating = void 0;
	    rating = place.rating !== undefined ? place.rating : "n/a";
	
	    var addr = place.geometry.location.lat() + "," + place.geometry.location.lng();
	
	    placesList.innerHTML += '<div id="' + addr + '"class=' + '"entry"' + '><div class=' + "place" + '>' + place.name + " &#9734;" + rating + "</div>" + '<div class=' + "rating" + '>' + place.formatted_address + '</div></div>';
	
	    bounds.extend(place.geometry.location);
	  }
	  map.fitBounds(bounds);
	
	  var entries = document.querySelectorAll(".entry");
	
	  for (var _i = 0; _i < entries.length; _i++) {
	    entries[_i].addEventListener("click", function (e) {
	      var local = window.event.currentTarget.id;
	      window.location = 'https://maps.google.com/maps?saddr=san+francisco&daddr=' + local;
	    });
	  }
	};
	
	module.exports = {
	  createMarkers: createMarkers,
	  clearMarkers: clearMarkers
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var createMarkers = __webpack_require__(1).createMarkers;
	
	var callback = function callback(results, status) {
	  if (status === google.maps.places.PlacesServiceStatus.OK) {
	    createMarkers(results);
	  }
	};
	
	var search = function search(input) {
	  var service = void 0;
	  var map = void 0;
	  var infowindow = void 0;
	
	  var SF = new google.maps.LatLng(37.7758, -122.435);
	  map = window.map;
	
	  var request = {
	    location: SF,
	    radius: '500',
	    query: "" + input
	  };
	
	  service = new google.maps.places.PlacesService(map);
	  service.textSearch(request, callback);
	};
	
	module.exports = search;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map