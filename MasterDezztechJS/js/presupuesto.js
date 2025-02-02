/* ---------------- VALIDACIÓN FORMULARIO -------------- */
  
$(document).ready(function () {
    // Aquí utilizo jquery para actualizar dinámicamente el presupuesto
    $(".productos, #plazo, .extras").on("change", calcularPresupuesto);
  
     // Resetear formulario
     $("input[type='reset']").on("click", function () {
            $("div.invalid-feedback").text("");
            $("#presupuesto-final").text("0€");
    });

});


function validarFormulario(){
    let valido  = true;
  
    /* CAMPO NOMBRE */
    const nombreCampo = presupuestoFormulario.nombreCampo.value;
    const nombreCampoValid = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]{1,15}$/;
    const nombreCampoContent = document.getElementById("nombreCampoError");
  
    
    if (!nombreCampoValid.test(nombreCampo) || nombreCampoContent ===""){
        nombreCampoContent.textContent = "Solo se puede escribir texto y máximo 15 caracteres";
        nombreCampoContent.style.display = "block";
        valido = false;
    }else {
        nombreCampoContent.textContent= "";
        nombreCampoContent.style.display = "none";
    }
  
    /*CAMPO APELLIDO*/
    const apellidoCampo = presupuestoFormulario.apellidoCampo.value;
    const apellidoCampoValid = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]{1,40}$/;
    const apellidoCampoContent = document.getElementById("apellidoCampoError");
  
    
    if (!apellidoCampoValid.test(apellidoCampo) || apellidoCampoContent  === "" ){
        apellidoCampoContent.textContent = "Solo se puede escribir texto y máximo 40 caracteres";
        apellidoCampoContent.style.display = "block";
        valido = false;
    }else {
        apellidoCampoContent.textContent = "";
        apellidoCampoContent.style.display = "none";
  
    }
    
    /*CAMPO TELEFONO CONTACTO*/
    const tlfCampo = presupuestoFormulario.tlfnCampo.value;
    const tlfCampoValid = /^(?:[0-9] ?){1,9}$/;
    const tlfnCampoContent = document.getElementById("tlfCampoError");
  
    
    if (!tlfCampoValid.test(tlfCampo) || tlfnCampoContent  === ""){
        tlfnCampoContent.textContent = "Solo se pueden escribir números de máximo 9 caracteres";
        tlfnCampoContent.style.display = "block";
        valido = false;
    }else {
        tlfnCampoContent.textContent = "";
        tlfnCampoContent.style.display = "none";
  
    }
  
    /*CAMPO EMAIL*/
    const emailCampo = presupuestoFormulario.emailCampo.value;
    const emailCampoValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailCampoContent = document.getElementById("emailCampoError");
  
    
    if (!emailCampoValid.test(emailCampo) || emailCampoContent  === "" ){
        emailCampoContent.textContent = "El formato de email debe de ser el siguiente xxxxx@yyyy.com";
        emailCampoContent.style.display = "block";
        valido = false;
    }else {
        emailCampoContent.textContent = "";
        emailCampoContent.style.display = "none";
  
    }
  
    /*CAMPO CHECK CONDICIONES*/
    const checkCampo = document.getElementById("checkCondiciones");
    const checkCampoContent = document.getElementById("condicionesCampoError");
  
    if (!checkCampo.checked) {
        checkCampoContent.textContent = "Debes aceptar los términos y condiciones para continuar.";
        checkCampoContent.style.display = "block";
        valido = false;
    }else{
        checkCampoContent.textContent = "";
        checkCampoContent.style.display = "none";
    }
  
    /*CAMPO CHECK PRODUCTO*/
    const checkProductoCampo = presupuestoFormulario.producto.value;
    const checkProductoContent = document.getElementById("condicionesCampoError");
  
    if (!checkCampo.checked) {
        checkCampoContent.textContent = "Debes aceptar los términos y condiciones para continuar.";
        checkCampoContent.style.display = "block";
        valido = false;
    }else{
        checkCampoContent.textContent = "";
        checkCampoContent.style.display = "none";
    }
  
    /*VALIDAR TODOS LOS CAMPOS*/
    if (valido) {
        alert("¡Formulario enviado con éxito!");
        return true;
    }
    else {
        return false;
    }    
  
  }
  
  
  function dataTest() {
    presupuestoFormulario.nombreCampo.value = "12345678";
    presupuestoFormulario.apellidoCampo.value = "2135123123";
    presupuestoFormulario.tlfnCampo.value  = "12345678910";
    presupuestoFormulario.emailCampo.value = "qweqwe123.com";
    
  }
  
  function dataTestSec() {
    presupuestoFormulario.nombreCampo.value = "esto tiene más de quince caracteres";
    presupuestoFormulario.apellidoCampo.value = "esta frase tiene es un test que tiene más de 40 caracteres";
    presupuestoFormulario.tlfnCampo.value  = "esto tiene letras y no debería de validar el formulario";
    presupuestoFormulario.emailCampo.value = "eqwtqwe";
    
  }
  
  function dataTestOk() {
    presupuestoFormulario.nombreCampo.value = "Usuario MasterD";
    presupuestoFormulario.apellidoCampo.value = "Apellido MasterD";
    presupuestoFormulario.tlfnCampo.value  = "921 21 21 21";
    presupuestoFormulario.emailCampo.value = "correomasterd@masterd.com";
    
  }
  
  function calcularPresupuesto() {
    let producto = 0;
    let extras = 0;
    const plazo = document.getElementById("plazo").value;
    const descuento =  plazo >= 12 && plazo < 24 ? 0.9 : plazo >= 24 && plazo < 36 ? 0.7 : plazo >= 36 ? 0.5 : 1; // 10% de descuento si plazo >= 12 meses
    
    document.querySelectorAll('.productos:checked').forEach((checkboxProducto) => {
        producto += parseFloat(checkboxProducto.value);
    });
  
    document.querySelectorAll('.extras:checked').forEach((checkboxExtra) => {
        extras += parseFloat(checkboxExtra.value);
    });
  
    const campoTotal = document.getElementById("presupuesto-final");
    const total = (producto + extras) * descuento;
  
    campoTotal.textContent = total.toFixed(2);
  
    
  
  }
