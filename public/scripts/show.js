
const latitude = document.querySelector('.user-location .lat').innerHTML;
const longitude = document.querySelector('.user-location .lon').innerHTML;
const avatar = document.querySelector('.user-location .avatar').innerHTML;
const address = document.querySelector('.user-location .address').innerHTML;
const contact = document.querySelector('.user-location .contact').innerHTML;

// zoom com clique duplo no mouse
const options = {
    doubleClickZoom: false,
    zoomControl: false,
    scrollWheelZoom: false,
};

const map = L.map('mapid', options).setView([ latitude, longitude ], 17);

// Mapa estilo Ruas
googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);


const icon = L.icon({
    iconUrl: '/images/brasao.png',
    iconSize: [50, 50],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});


const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 100,
    minHeight: 100,
    color: '#ff4f4f'
}).setContent(
    `
    <img src="${avatar}"
        style="
            width: 50px;
            height: 50px;
            border-radius: 50%;
            box-shadow: 0 0 10px #999;
            object-fit: cover;
        "
    >

    <h2
        style="
            color: #111; 
            font-size: 15px";
            line-height: 18px;
            opacity: 0.6
        "   
    > ${address} </h2>
`)

L
.marker([latitude, longitude])
.addTo(map)
.bindPopup(popup)



// MODAL
const images_work_user = document.querySelectorAll('.images-user img');
const modal = document.querySelector('.modal');
const close_modal = modal.querySelector('i');
const imgModal = modal.querySelector('img');

for ( let image of images_work_user ) {
    image.addEventListener('click', () => {
        const src_image = image.src; //get src image work
        
        modal.classList.remove('active');
        imgModal.src = src_image;
    })

    close_modal.addEventListener('click', () => {
        modal.classList.add('active')
    })
}

// QR CODE
const GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=50x50&chl=';
//const contact_user = `https://api.whatsapp.com/send?1=pt_BR&phone55=${contact}`;
const contact_user = ` Nosso contato: ${contact}`;

const create_qrCode = GoogleChartAPI + encodeURIComponent(contact_user);
//encodeURIComponent se encarregará de onde estiver espaços entre as letras ou algo do tipo
//vai converter em URL
document.querySelector('#QRCodeImage').src = create_qrCode;