
// zoom com clique duplo no mouse
const options = {
    doubleClickZoom: true
};

const map = L.map('mapid', options).setView([-4.5429467,-40.7165188,3125], 14);
//const avatar_user = document.getElementById("preview").src

// Mapa via satélite + Nomes das ruas
googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

const icon = L.icon({
    iconUrl: '/images/brasao.png',
    iconSize: [40, 40],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

let marker;

map.on('click', function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector( ' [name=latitude] ' ).value = lat;
    document.querySelector( ' [name=longitude] ' ).value = lng;

    marker && map.removeLayer( marker );
    marker = L.marker( {lat, lng}, {icon} ).addTo(map);
})
