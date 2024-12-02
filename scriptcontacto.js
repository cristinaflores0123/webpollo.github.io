// Añade un evento al formulario con ID 'contactForm' para escuchar el evento 'submit'
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene que el formulario recargue la página al enviarse
    
    // Muestra un mensaje de alerta indicando que el mensaje fue enviado
    alert('Tu mensaje ha sido enviado. ¡Gracias por contactarnos!');
    
    // Restablece los valores de todos los campos del formulario a sus valores iniciales
    this.reset();
});
