function cargarNavbar() {
    var objHttp = null;
    
    if (window.XMLHttpRequest) {
        objHttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        objHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 
    objHttp.open("GET", "../componentes/navbar.html", true);
    const navbarContainer =  document.getElementById('navbar-container');
    
    objHttp.onreadystatechange = function () {
        if (objHttp.readyState == 4) {
            navbarContainer.innerHTML += objHttp.responseText;
            estilosCheck();
        }
    }
    objHttp.send(null);
    


}

function estilosCheck(){
    // Obtener la URL actual sin parámetros
    let currentPage = window.location.pathname.split("/").pop();

    // Buscar todos los enlaces del navbar
    document.querySelectorAll("#navbar-container a").forEach(link => {
        // Comparar href con la página actual
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("resaltar"); // Agregar clase de resaltado
        }
    });
}

document.addEventListener("DOMContentLoaded", cargarNavbar);