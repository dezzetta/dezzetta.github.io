/* ---------------- CARGAR NOTICIAS Y PRODUCTOS POR JSON -------------- */
// Ruta del archivo JSON
const urlJsonNoticias = '../js/noticias.json';
const urlJsonProductos = '../js/productos.json'

// Función para cargar y mostrar todas las noticias
async function cargarNoticias() {
  try {
    const response = await fetch(urlJsonNoticias);
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    const data = await response.json();

    const contenedorNoticias = document.getElementById('contenedor-noticias');

    // Recorrer las noticias y agregarlas al contenedor
    data.noticias.forEach(noticia => {
      const noticiaElemento = document.createElement('div');
      noticiaElemento.classList.add('card');
      noticiaElemento.classList.add('mb-3');
      noticiaElemento.classList.add('mx-1');
      noticiaElemento.innerHTML = `

      
        <div class="row p-2 g-0">
          <div class="col-md-4">
            <img src="${noticia.imagen}" class="img-fluid rounded-start" alt="${noticia.titulo}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${noticia.titulo}</h5>
              <p class="card-text"><small>${noticia.fecha}</small></p>
              <p class="card-text">${noticia.contenido}</small></p>
            </div>
          </div>
        </div>

      
      `;
      contenedorNoticias.appendChild(noticiaElemento);
    });
  } catch (error) {
    console.error('Error al cargar las noticias:', error);
  }
}

async function cargarProductos() {
  try {
    const response = await fetch(urlJsonProductos);
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    const data = await response.json();

    const contenedorProductos = document.getElementById('productosContainer');

    // Recorrer las noticias y agregarlas al contenedor
    data.productos.forEach(producto => {
      const productoElemento = document.createElement('div');
      productoElemento.classList.add('col');
      productoElemento.innerHTML = `

      <div class="card">
        <div class="row producto-container g-0">
          <div class="col-md-4 p-1 img-container">
            <img src="${producto.imagen}" class="img-fluid rounded-start" alt="${producto.titulo}" width="100%" heigh="165"> 
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${producto.titulo}</h5>
              <p class="card-text"><small>${producto.precio}</small></p>
            </div>
          </div>
        </div>
      </div>
      
      
      `;
      contenedorProductos.appendChild(productoElemento);
    });
  } catch (error) {
    console.error('Error al cargar las noticias:', error);
  }
}


// Llamar a la función
cargarNoticias();
cargarProductos();