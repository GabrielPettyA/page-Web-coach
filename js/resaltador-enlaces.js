
// Detectar clic en enlaces internos
document.querySelectorAll('nav a').forEach(enlace => {
  enlace.addEventListener('click', e => {
    // Quitar resaltado previo
    document.querySelectorAll('#section-modal').forEach(sec => sec.classList.remove('resaltado'));

    document.querySelectorAll('nav a').forEach(a => a.classList.remove('activo'));

    // Agregar resaltado a la sección destino
    const destino = document.querySelector(enlace.getAttribute('href'));
    destino.classList.add('resaltado');

    // Marcar enlace activo
    enlace.classList.add('activo');

    // Quitar resaltado después de 3 segundos
    setTimeout(() => destino.classList.remove('resaltado'), 3000);
  });
});
