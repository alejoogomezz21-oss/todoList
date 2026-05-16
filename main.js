const userInput = document.getElementById('userInput');
const addButton = document.getElementById('addBtn');

userInput.addEventListener('submit', (event) =>{
    event.preventDefault();
});

function renderizarUsuarios() {
    
    listaUsuarios.forEach((tarea) => {
        const row = document.createElement('list');
        row.innerHTML = `
        <input type="checkbox">
        <label>${tarea}</label>
        <img src="./imagenes/trash.png" alt="Eliminar tarea" class="delete-btn">
        `;
        list-container.appendChild(row);
    });
}



// Función para agregar una tarea (CREATE)
function agregarTarea() {
    const tarea = task.value.trim();
    if (tarea) {
        list-container.push(tarea);
        mostrarTareas();
        task.value = '';
    }
}

addButton.addEventListener('click', agregarTarea);


