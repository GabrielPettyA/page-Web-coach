const modal = document.getElementById("miModal");
  const modalPregunta = document.getElementById("modalPregunta");
  const modalRespuesta = document.getElementById("modalRespuesta");

  // Función para abrir el modal con contenido dinámico
  function abrirModal(pregunta, respuesta) {
    modalPregunta.textContent = pregunta;
    modalRespuesta.textContent = respuesta;
    modal.style.display = "flex";
  }

  // Función para cerrar el modal
  function cerrarModal() {
    modal.style.display = "none";
  }

  // Cerrar modal si se hace clic fuera del contenido
  window.onclick = function(event) {
    if (event.target === modal) {
      cerrarModal();
    }
  }