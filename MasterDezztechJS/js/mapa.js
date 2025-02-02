let options={ 
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
}

/* SETEAR ICONOS RUTA */
const iconoDezztech = L.icon({ 
    iconUrl: '../assets/home/iconDezztech.png',
    iconSize: [40,40],
    iconAnchor: [25,25],
});



if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        montarMapa,
        errorMapa, 
        options
    )
}else{
    alert("Los servicios de geolocalización no están disponibles");
}

function montarMapa(position){

    /* SETEAR VARIABLES COORDENADAS */
    var coordenadasOficina = [38.872177, -6.969919];
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;


    /* CONSTRUIR MAPA */

    let mapaOficina = L.map('mapaOficina',{
        center:[latitude,longitude],
        zoom: 19
    })

    /* TITULO ABAJO DERECHA MAPA */

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Mapa Oficina <a href="../index.html"> Dezztech</a>'
    }).addTo(mapaOficina);



    let puntosControl = L.Routing.control({
        waypoints: [
            L.latLng(latitude,longitude),    
            L.latLng(coordenadasOficina)
        ],
        language: "es",
        createMarker: function(i, wp, nWps){
            switch(i){
                case 0:
                    return  L.marker(wp.latLng,{icon: iconoDezztech, draggable:true}).bindPopup('Aquí te encuentras tú');
                case nWps -1:
                    return  L.marker(wp.latLng,{icon: iconoDezztech, draggable:true}).bindPopup('Aquí se encuentra la oficina');
                default:
                    return  L.marker(wp.latLng,{icon: iconoDezztech, draggable:true}).bindPopup('Aquí se encuentra un punto intermedio')

            }
        }
    }).addTo(mapaOficina);
    

}

function errorMapa(){
    alert("Debes de aceptar poder observar tu ubicación para construir el mapa!");  
    
    /* CONSTRUIR MAPA */

    var coordenadasOficina = [38.872177, -6.969919];


    let mapaOficina = L.map('mapaOficina',{
        center: coordenadasOficina,
        zoom: 19
    })

    /* TITULO ABAJO DERECHA MAPA */

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Mapa Oficina <a href="../index.html"> Dezztech</a>'
    }).addTo(mapaOficina);

    L.marker(coordenadasOficina,{icon: iconoDezztech}).addTo(mapaOficina).bindPopup('Aquí se encuentra la oficina')



}