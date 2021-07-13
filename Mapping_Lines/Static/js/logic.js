// Add console.log to check to see if our code is working.
console.log("working");

/// Create map with center and zoom level
let map = L.map('mapid').setView([37.6213, -100.3790], 4);

/// Coordinates for wach point to be used in the line
let line = [
    [33.9416, -118.4085],
    [30.1975, -97.6664],
    [29.9911, -90.2592],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

/// Create a polyline using the coordinates and make the line red
L.polyline(line, {
    color: "blue",
    lineweight: 4,
    opacity: 0.5,
    dashArray: '5, 5', 
    dashOffset: '5'
}).addTo(map);

/// Create the tile layer that will be the map background

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
/// Then, add streets to our map
streets.addTo(map);