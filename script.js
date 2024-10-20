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
  // Cerrar todos los submenús y quitar resaltados
  linkItems.forEach((linkItem) => {
    const subMenu = linkItem.querySelector(".sub-menu");
    if (subMenu) {
      closeSubmenu(linkItem, subMenu);
    }
  });
});

// Link-items Clicked
linkItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const subMenu = item.querySelector(".sub-menu");
    if (!subMenu) return; // Si no hay submenú, salir de la función

    // Alterna el submenú actual (abre o cierra)
    if (item.classList.contains("active")) {
      closeSubmenu(item, subMenu);
    } else {
      openSubmenu(item, subMenu);
    }
  });

  // Para las sub-opciones
  const subOptions = item.querySelectorAll(".sub-option");
  subOptions.forEach((subOption) => {
    subOption.addEventListener("click", (e) => {
      e.stopPropagation(); // Evita que el evento se propague al elemento padre
      // Quitar resaltados de otras opciones
      subOptions.forEach((opt) => {
        opt.classList.remove("selected");
      });
      // Resaltar solo la opción seleccionada
      subOption.classList.add("selected");
    });
  });
});

// Dark Mode Functionality
darkMode.addEventListener("click", function () {
  if (document.body.classList.contains("dark-mode")) {
    darkMode.querySelector("span").textContent = "Dark Mode";
    darkMode.querySelector("ion-icon").setAttribute("name", "moon-outline");
    logo.style.fill = "#363b46";
  } else {
    darkMode.querySelector("span").textContent = "Light Mode";
    darkMode.querySelector("ion-icon").setAttribute("name", "sunny-outline");
    logo.style.fill = "#fff";
  }
  document.body.classList.toggle("dark-mode");
});

// Función para abrir el submenú
function openSubmenu(item, subMenu) {
  item.classList.add("active");
  subMenu.style.maxHeight = subMenu.scrollHeight + "px"; // Ajusta la altura al contenido
  subMenu.style.paddingTop = "10px"; // Añade espaciado arriba
  subMenu.style.paddingBottom = "100px"; // Añade espaciado abajo
  const subOptions = subMenu.querySelectorAll("li");
  subOptions.forEach(option => {
    option.style.display = "block"; // Mostrar subopciones al abrir
  });
}

// Función para cerrar el submenú
function closeSubmenu(item, subMenu) {
  subMenu.style.maxHeight = "0"; // Colapsa el submenú
  subMenu.style.paddingTop = "0"; // Elimina el espaciado arriba
  subMenu.style.paddingBottom = "0"; // Elimina el espaciado abajo
  item.classList.remove("active");
  const subOptions = subMenu.querySelectorAll("li");
  subOptions.forEach(option => {
    option.style.display = "none"; // Ocultar subopciones al cerrar
  });
}
