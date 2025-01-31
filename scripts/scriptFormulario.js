let nombreTarea = document.getElementById("task-name").value;
let descripcionTarea = document.getElementById("task-description").value;
//let imagen = document.getElementById("task-image").value;
let fechaInicio = document.getElementById("task-start-date").value;
let fechaFin = document.getElementById("task-end-date").value;
let categoria = document.getElementById("task-category").value;
let priridad = document.getElementById("task-priority").value;


let tarea = {
    nombre: nombreTarea,
    descripcion: descripcionTarea,
    // imagen: imagen, // Descomenta esto si decides usar la imagen
    fechaInicio: fechaInicio,
    fechaFin: fechaFin,
    categoria: categoria,
    prioridad: priridad
};

let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

tareas.push(tarea);

localStorage.setItem('tareas', JSON.stringify(tareas));



