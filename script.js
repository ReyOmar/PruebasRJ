const container = document.querySelector(".container");
const linkItems = document.querySelectorAll(".link-item");
const darkMode = document.querySelector(".dark-mode");
const logo = document.querySelector(".logo svg");

// Container Hover
container.addEventListener("mouseenter", () => {
  container.classList.add("active");
});

// Container Hover Leave
container.addEventListener("mouseleave", () => {
  container.classList.remove("active");
});

// Dark Mode Functionality
darkMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");

  darkMode.querySelector("span").textContent = isDarkMode ? "Modo Claro" : "Modo Oscuro";
  darkMode.querySelector("ion-icon").setAttribute("name", isDarkMode ? "sunny-outline" : "moon-outline");
  logo.style.fill = isDarkMode ? "#fff" : "#363b46";
});

// Añade un evento de clic a cada ítem del menú
linkItems.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();  // Evitar que el enlace recargue la página

    const subMenu = item.querySelector('.sub-menu');
    if (!subMenu) return;  // Si no hay submenú, salir de la función

    // Cierra otros submenús si están abiertos
    linkItems.forEach(link => {
      const otherSubMenu = link.querySelector('.sub-menu');
      if (otherSubMenu && link !== item) {
        closeSubmenu(link, otherSubMenu);
      }
    });

    // Alterna el submenú actual (abre o cierra)
    if (item.classList.contains('active')) {
      closeSubmenu(item, subMenu);
    } else {
      openSubmenu(item, subMenu);
    }
  });
});

// Función para abrir el submenú
function openSubmenu(item, subMenu) {
  item.classList.add('active');
  subMenu.style.maxHeight = subMenu.scrollHeight + "px";  // Ajusta la altura al contenido
}

// Función para cerrar el submenú
function closeSubmenu(item, subMenu) {
  subMenu.style.maxHeight = "0";  // Colapsa el submenú
  item.classList.remove('active');
}