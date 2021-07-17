// Add console.log to check to see if our code is working.
console.log("working");

/// Create map with center and zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

/// Add a circle for LA, CA
let circle = L.circleMarker([34.0522, -118.2437],{
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'
}).addTo(map);

/// Create the tile layer that will be the map background

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
/// Then, add streets to our map
streets.addTo(map);