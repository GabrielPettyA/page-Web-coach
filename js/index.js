document.addEventListener("DOMContentLoaded", () => {
  const whatsappLink = document.getElementById("secure-whatsapp");
  
  if (whatsappLink) {
    // CORRECCIÓN: Añadimos https:// al principio del dominio
    const domain = "https://wa.me/";
    const prefix = "549";
    const phone = "1137042115";
    const message = "?text=" + encodeURIComponent("Hola, me gustaría saber más sobre sus programas de entrenamiento !!!");

    const buildLink = () => {
      if (!whatsappLink.getAttribute("href")) {
        // Vincula los componentes de forma segura y externa
        whatsappLink.setAttribute("href", domain + prefix + phone + message);
      }
    };

    // Construye el enlace bajo interacciones humanas legítimas
    whatsappLink.addEventListener("mouseover", buildLink);
    whatsappLink.addEventListener("touchstart", buildLink);
    whatsappLink.addEventListener("click", buildLink);
  }
});

/* FUNCIÓN PARA MOSTRAR LAS RESEÑAS EN EL VISOR */
// Función para abrir la imagen seleccionada a pantalla completa
function ampliarImagen(elemento) {
  const visor = document.getElementById("visorFlotante");
  const imgAmpliada = document.getElementById("imgAmpliada");
  
  // Busca la etiqueta <img> que esté adentro del contenedor al que se le hizo clic
  const imgOriginal = elemento.querySelector("img");
  
  if (imgOriginal && visor && imgAmpliada) {
    imgAmpliada.src = imgOriginal.src;
    visor.style.display = "flex";
  }
}

// Función para cerrar el visor
function cerrarVisor() {
  const visor = document.getElementById("visorFlotante");
  if (visor) {
    visor.style.display = "none";
  }
}
