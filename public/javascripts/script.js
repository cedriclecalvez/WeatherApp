var mymap = L.map('mapid').setView([48.866667, 2.333333], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2VkcmljODEiLCJhIjoiY2tndzR6bGU2MDZ1azJ6b2ZhdjY0dnAzcSJ9.O39vs1nVkatB64gKLIMX5g' /* clé public de map box */
}).addTo(mymap);


var customIcon = L.icon({
    iconUrl: '../images/leaf-green.png',
    shadowUrl: '../images/leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var cities = document.getElementsByClassName('list-group-item');
for(let i =0; i<cities.length; i++) {
var lon = cities[i].dataset.lon;
var lat = cities[i].dataset.lat;
var city = cities[i].dataset.cities
L.marker([lat,lon], {icon: customIcon}).addTo(mymap).bindPopup(city)
}







/*  https://leafletjs.com/examples/quick-start/*/