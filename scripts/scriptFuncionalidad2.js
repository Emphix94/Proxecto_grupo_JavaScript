document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#task-form-container form");
    const taskWrapper = document.querySelector(".tasks-wrapper");
    const showFormBtn = document.querySelector("#show-form-btn");
    const closeFormBtn = document.querySelector("#close-form-btn");
    const formContainer = document.querySelector("#task-form-container");
    const rightContent = document.querySelector(".right-content");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Cargar desde LocalStorage

    showFormBtn.addEventListener("click", () => {
        formContainer.style.display = "block";
    });

    closeFormBtn.addEventListener("click", () => {
        formContainer.style.display = "none";
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const taskName = document.querySelector("#task-name").value;
        const taskDescription = document.querySelector("#task-description").value;
        const taskPriority = document.querySelector("#task-priority").value;
        const taskCategory = document.querySelector("#task-category").value;
        const taskStartDate = document.querySelector("#task-start-date").value;
        const taskEndDate = document.querySelector("#task-end-date").value;

        let priorityClass = "";
        switch (taskPriority) {
            case "alta": priorityClass = "red"; break;
            case "media": priorityClass = "yellow"; break;
            case "baja": priorityClass = "green"; break;
        }

        const newTask = {
            name: taskName,
            description: taskDescription,
            priority: taskPriority,
            category: taskCategory,
            startDate: taskStartDate,
            endDate: taskEndDate,
            priorityClass: priorityClass,
        };

        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Guardar en LocalStorage

        updateTasksDisplay();

        form.reset();
        formContainer.style.display = "none";
    });

    function updateTasksDisplay() {
        taskWrapper.innerHTML = "";
        rightContent.innerHTML = "";

        tasks.sort((a, b) => new Date(a.endDate) - new Date(b.endDate));

        tasks.forEach(task => {
            const taskBox = document.createElement("div");
            taskBox.classList.add("task-box", task.priorityClass);
            taskBox.innerHTML = `
                <div class="description-task">
                    <div class="members">
                        <img src="images/1.png" alt="member-4" />
                    </div>
                    <div class="time">${task.startDate} - ${task.endDate}</div>
                    <div class="task-name">${task.name}</div>
                    <div class="task-desc">${task.description}</div>
                    <div class="task-desc">${task.priority}</div>
                    <div class="task-desc">${task.category}</div>
                </div>
                <div class="more-button"></div>
            `;
            taskWrapper.appendChild(taskBox);
        });

        tasks.slice(0, 3).forEach(task => {
            const taskCard = document.createElement("div");
            taskCard.classList.add("task-card", task.priorityClass);
            taskCard.innerHTML = `
                <div class="task-name">${task.name}</div>
                <div class="task-time">Expira: ${task.endDate}</div>
            `;
            rightContent.appendChild(taskCard);
        });
    }

    updateTasksDisplay(); // Mostrar tareas al cargar la página
});
