/*SEARCHBAR*/

// Simulación de datos
const productos = [
    "Libros de Ciencia Ficción",
    "Novelas Románticas",
    "Guías de Programación",
    "Diccionarios en Español",
    "Revistas Científicas",
    "Cómics y Manga",
    "Poesía Moderna",
    "Libros de Historia",
    "Literatura Infantil",
    "Textos Escolares"
];

// Selección de elementos DOM
const searchInput = document.querySelector(".search-bar input");
const resultsContainer = document.querySelector(".results");

// Verificar que los elementos se encuentran en el DOM
if (!searchInput || !resultsContainer) {
    console.error("Error: No se encontró el campo de búsqueda o el contenedor de resultados");
}

// Función para mostrar sugerencias
function mostrarSugerencias(event) {
    const query = event.target.value.toLowerCase().trim();

    // Si no hay texto, limpiar resultados
    if (query === "") {
        resultsContainer.innerHTML = "";
        return;
    }

    // Filtrar productos
    const sugerencias = productos.filter((producto) =>
        producto.toLowerCase().includes(query)
    );

    // Generar HTML de resultados
    if (sugerencias.length > 0) {
        resultsContainer.innerHTML = `
            <ul>
                ${sugerencias.map((sug) => `<li>${sug}</li>`).join("")}
            </ul>
        `;
    } else {
        resultsContainer.innerHTML = `<p>No se encontraron resultados</p>`;
    }
}

// Escuchar el evento 'input'
if (searchInput) {
    searchInput.addEventListener("input", mostrarSugerencias);
}

// Manejar clics en los resultados
if (resultsContainer) {
    resultsContainer.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            searchInput.value = event.target.textContent;
            resultsContainer.innerHTML = ""; // Limpiar resultados
        }
    });
}

/*SIDEBAR*/
const sidebar = document.getElementById("sidebar");
const closeSideBarBtn = document.getElementById("closeSidebar");

//funcion para cerrar sidebar
closeSideBarBtn.addEventListener("click" , () => {
    sidebar.classList.remove("active");
});

//funcion para abrir el sidebar desde el boton de categoria
const openSidebarButton = document.querySelector(".menu a");
openSidebarButton.addEventListener("click", (e) => {
    e.preventDefault();
    sidebar.classList.add("active");
});