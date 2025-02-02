/* ---------------- FUNCIÓN BOTÓN AL TOP -------------- */


// Función que crea botón con estilos para subir a top
function botonTop(){

    const botonScroll = document.getElementById('scrollToTopBtn');
    //Creacción evento scroll
    window.addEventListener('scroll', function () {
      
      //Condición para insertar el estilo
      if(window.scrollY > 500){
        botonScroll.style.display = 'block';
      } else {
        botonScroll.style.display  = 'none';
      }
    });
    
    //Creación evento click al botón
    botonScroll.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}