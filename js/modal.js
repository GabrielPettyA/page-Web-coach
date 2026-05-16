function abrirModal(pregunta, respuesta) {
  const modal = document.getElementById("miModal");
  document.getElementById("modalPregunta").innerText = pregunta;
  document.getElementById("modalRespuesta").innerText = respuesta;
  
  // Cambia el estilo de oculto a bloque visible
  modal.style.display = "flex"; 
}

function cerrarModal() {
  const modal = document.getElementById("miModal");
  modal.style.display = "none";
}

// Cargar cierre si el usuario hace clic fuera de la caja blanca
window.onclick = function(event) {
  const modal = document.getElementById("miModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
