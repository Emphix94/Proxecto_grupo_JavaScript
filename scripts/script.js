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
      


let nombreTarea=document.getElementById("task-name").value;
let descripcionTarea = document.getElementById("task-description").value;
let imagen = document.getElementById("task-image").value;
let fechaInicio = document.getElementById("task-start-date").value;
let fechaFin = document.getElementById("task-end-date").value;
let categoria = document.getElementById("task-category").value;
let priridad = document.getElementById("task-priority").value;

