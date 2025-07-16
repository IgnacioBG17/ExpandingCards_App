// Selecciona todos los elementos del DOM con la clase 'Panel'
const panels = document.querySelectorAll('.panel')

// Itera sobre cada panel y le agrega un listener para el evento 'Click'
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // Cuando se hace click en un panel, se eliminan todas las clases 'active' de todos los paneles
        removeActiveClasses()
        // Luego, se agrega la clase 'active' solo al panel que fue clickeado
        panel.classList.add('active')
    })
})

// Funcion que elimina la clase 'active' de todos los paneles
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}