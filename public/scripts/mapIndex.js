// zoom com clique duplo no mouse
const options = {
    doubleClickZoom: true
};

const map = L.map('mapid', options).setView([-4.5429467,-40.7165188,3125], 14);

// Mapa via satélite + Nomes das ruas
googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

/*
// Mapa estilo Ruas
googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);
*/

/*
// Mapa estilo somente terrno
googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);
*/

/*
const icon = L.icon({
    //iconUrl: '/images/brasao.png',
    iconSize: [50, 50],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});
*/

function addMarker({ id, avatar, name, latitude, longitude }) {
    const icon = L.icon({
        iconUrl: avatar,
        iconSize: [30, 30],
        iconAnchor: [29, 68],
        popupAnchor: [170, 2],
    });

    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 100,
        minHeight: 100,
    }).setContent(
        `
        <img
        style="
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 5px;
            box-shadow: 0 0 2px #111;
        "
        src="${avatar}"
        >

        <h2
            style="
                color: #000; 
                font-size: 18px";
                line-height: 20px;
            "   
        > ${name} </h2>

        <a 
            style="
                text-decoration: none;
                text-transform: uppercase;
                background-color: #111;
                padding: 4px;
                color: #FFF;
                border-radius: 4px;
                margin-left: 10px;
            "
        href="/users/${id}"> Ver </a> 
    `)

    L
    .marker([latitude, longitude], {icon})
    .addTo(map)
    .bindPopup(popup)

};

const users = document.querySelectorAll('.users span')

users.forEach( span => {
    const user = {
        id: span.dataset.id,
        avatar: span.dataset.avatar,
        name: span.dataset.name,
        latitude: span.dataset.latitude,
        longitude: span.dataset.longitude
    }

    addMarker(user);
} )
