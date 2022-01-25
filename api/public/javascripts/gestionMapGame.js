let lat
let lon

function initialize(x, y) {
    var map = L.map('map', { tap: false }).setView([lat, lon], 15.5);

    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
    });

    const fleur = L.icon({
        iconUrl: '/images/fleur.png',
        iconSize: [24, 24],
    });

    const ruche = L.icon({
        iconUrl: '/images/ruche.png',
        iconSize: [24, 24],
    });

    const me = L.icon({
        iconUrl: '/images/marker.png',
        iconSize: [24, 24],
    });

    L.marker([x, y], { icon: me }).addTo(map).bindPopup(
        'Vous êtes ici !'
    );

    L.marker([48.661669, 6.156137], { icon: fleur }).addTo(map).bindPopup(
        'Rose'
    );

    L.marker([48.660436, 6.153093], { icon: fleur }).addTo(map).bindPopup(
        'Tulipe'
    );

    L.marker([48.658593, 6.156025], { icon: fleur }).addTo(map).bindPopup(
        'Cactus'
    );

    L.marker([48.662841, 6.157025], { icon: fleur }).addTo(map).bindPopup(
        'Buisson'
    );

    L.marker([48.660293, 6.158694], { icon: fleur }).addTo(map).bindPopup(
        'Arbre'
    );

    L.marker([48.660676, 6.155261], { icon: ruche }).addTo(map).bindPopup(
        'Ruche'
    );

    map.addLayer(osmLayer);
}

window.onload = () => {

    fetch(`http://ip-api.com/json/?fields=61439`)
        .then(response => response.json())
        .then((results) => {
            lat = results.lat
            lon = results.lon

            initialize(lat, lon)
        })
        .catch(err => console.log(err))

}