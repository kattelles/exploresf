const clearMarkers = require("./markers.js").clearMarkers;
const search = require("./search.js");

document.addEventListener('DOMContentLoaded', function() {
  console.log("welcome, zenefits. please pardon any errors. :)");

  document.getElementById("enter").addEventListener("click", e => {
    clearMarkers();
    let input = document.getElementById('input').value;
    search(input);
  });

});
