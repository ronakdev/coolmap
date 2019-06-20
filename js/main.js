mapboxgl.accessToken = 'pk.eyJ1IjoicmVhbHJvbmFrc2hhaCIsImEiOiJjand3amIyZXUwOWZsM3lqejg5N2M3ZjJuIn0.AbUs-ZgHay7OvwxUss9Lgg';
 
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/outdoors-v11', //stylesheet location
center: [11.255, 43.77], // starting position
zoom: 13 // starting zoom
});
 
map.addControl(new mapboxgl.FullscreenControl());