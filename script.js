// Esperamos a que el contenido del documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleccionamos todos los elementos <img> dentro del grid
    const images = document.querySelectorAll(".gallery-grid img");
    
    // Seleccionamos el modal y sus componentes
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.getElementById("close-modal");

    // Recorremos todas las imágenes
    images.forEach(img => {
        img.addEventListener("click", function() {
            // Al hacer clic, mostramos el modal y cambiamos la imagen
            modal.style.display = "flex";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    // Cuando se hace clic en el botón de cerrar (×)
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // También cerramos el modal si se hace clic fuera de la imagen
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

});
