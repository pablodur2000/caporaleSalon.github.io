var map = L.map('container-ubicacion-map').setView([-32.3172869, -58.0889799], 15)


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 21,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-32.3172869, -58.0889799]).addTo(map);