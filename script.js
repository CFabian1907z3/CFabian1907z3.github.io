document.addEventListener('DOMContentLoaded', function () {
    var titulo = document.getElementById('titulo-escritura');
    titulo.classList.add('animar');
    var titlePosition = title.getBoundingClientRect().top;
    var triggerPosition = window.innerHeight / 2;
    if (titlePosition < triggerPosition) {
        title.classList.add("titulo-animado"); // Agrega la clase para iniciar la animación
      } else {
        title.classList.remove("titulo-animado"); // Retira la clase si el título ya no está visible
      }
      
});