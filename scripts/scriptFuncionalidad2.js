document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#task-form-container form");
    const taskWrapper = document.querySelector(".tasks-wrapper");
    const showFormBtn = document.querySelector("#show-form-btn");
    const closeFormBtn = document.querySelector("#close-form-btn");
    const formContainer = document.querySelector("#task-form-container");
    
    showFormBtn.addEventListener("click", () => {
        formContainer.style.display = "block";
    });
    
    closeFormBtn.addEventListener("click", () => {
        formContainer.style.display = "none";
    });
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        // Obtener valores del formulario
        const taskName = document.querySelector("#task-name").value;
        const taskDescription = document.querySelector("#task-description").value;
        const taskPriority = document.querySelector("#task-priority").value;
        const taskCategory = document.querySelector("#task-category").value;
        const taskStartDate = document.querySelector("#task-start-date").value;
        const taskEndDate = document.querySelector("#task-end-date").value;
        const image = document.querySelector("#task-image").value;

        // Determinar clase de prioridad
        let priorityClass = "";
        switch (taskPriority) {
            case "alta": priorityClass = "red"; break;
            case "media": priorityClass = "yellow"; break;
            case "baja": priorityClass = "green"; break;
        }
        
        // Crear nuevo elemento de tarea
        const taskBox = document.createElement("div");
        taskBox.classList.add("task-box", priorityClass);
        taskBox.innerHTML = `
            <div class="description-task">
                <div class="members">
                    <img src="images/1.png" alt="member-4" />
                </div>
                <div class="time">${taskStartDate} - ${taskEndDate}</div>
                <div class="task-name">${taskName}</div>
                <div class="task-desc">${taskDescription}</div>
                <div class="task-desc">${taskPriority}</div>
                <div class="task-desc">${taskCategory}</div>
            </div>
            <div class="more-button"></div>
        `;
        
        // Agregar la tarea al contenedor de tareas
        taskWrapper.appendChild(taskBox);
        
        // Limpiar el formulario y ocultarlo
        form.reset();
        formContainer.style.display = "none";
    });
});
