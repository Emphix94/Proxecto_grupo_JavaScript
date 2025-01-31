





//Formulario crear tarea
// Obtener el botón de mostrar formulario y el contenedor del formulario
const showFormButton = document.getElementById('show-form-btn');
const taskFormContainer = document.getElementById('task-form-container');

// Función para mostrar y ocultar el formulario
showFormButton.addEventListener('click', function() {
    if (taskFormContainer.style.display === "none" || taskFormContainer.style.display === "") {
    taskFormContainer.style.display = "block";  // Mostrar el formulario
    } else {
    taskFormContainer.style.display = "none";   // Ocultar el formulario
    }
});
      


