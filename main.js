const formulario = document.getElementById('userInput');
const inputTarea = document.getElementById('task');
const contenedorLista = document.getElementById('list');
const totalPendientes = document.getElementById('total');
const completadas = document.getElementById('completed');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    const textoTarea = inputTarea.value.trim();
    if (textoTarea === "") return;

    const nuevaTareaDiv = document.createElement('div');
    nuevaTareaDiv.className = 'task-item';
    nuevaTareaDiv.innerHTML = `
        <div class="task-content">
            <input type="checkbox" class="check-tarea">
            <label>${textoTarea}</label>
        </div>
        <img src="./imagenes/trash.png" alt="Eliminar" class="delete-btn">
    `;

    contenedorLista.appendChild(nuevaTareaDiv);
    inputTarea.value = "";
    actualizarContadores();
});

contenedorLista.addEventListener('click', function(evento) {
    if (evento.target.classList.contains('delete-btn')) {
        evento.target.closest('.task-item').remove();
    }
    actualizarContadores();
});

function actualizarContadores() {
    const totales = contenedorLista.children.length;
    const listos = contenedorLista.querySelectorAll('.check-tarea:checked').length;
    
    totalPendientes.innerText = `Tareas pendientes: ${totales - listos}`;
    completadas.innerText = `Tareas completadas: ${listos}`;
}