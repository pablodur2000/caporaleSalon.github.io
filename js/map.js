var map = L.map('container-ubicacion-map').setView([-32.3172869, -58.0889799], 15)


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 22,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [35, 55],
    iconAnchor: [20, 53],
    popupAnchor: [1, -34],
});


var marker = L.marker([-32.3172869, -58.0889799], {
    icon: myIcon
}).addTo(map);


