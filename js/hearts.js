//* Empezaremos a seleccionar el contenedor
//* de corazones que fue creado en el index.html
const heartContainer = document.getElementById("heartContainer");

// Función para crear corazones
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  //* Aqui se asigna posiciones y tamaño aleatorio
  heart.style.left = `${Math.random() * 100}vw`; // Posicion aleatoria
  heart.style.animationDuration = `${Math.random() * 2 + 3}s`; //Animación aleatoria
  heart.style.transform = `scale(${Math.random() + 0.5})`; // Este es el codigo para tamaño aleatorio

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

//Para crear corazones a intervalos
setInterval(createHeart, 300);
