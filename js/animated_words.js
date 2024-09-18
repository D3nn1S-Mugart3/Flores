const words = [
  "Florencia",
  "Negra",
  "Gordis",
  "Amor",
  "Hermosa",
  "Preciosa",
  "Morena",
  "Guapa",
];

function getRandomPosition() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  return { x, y };
}

function showRandomWord() {
  const wordContainer = document.getElementById("word-container");
  const wordElement = document.createElement("div");
  wordElement.className = "word";
  wordElement.textContent = words[Math.floor(Math.random() * words.length)];
  const { x, y } = getRandomPosition();
  wordElement.style.left = `${x}px`;
  wordElement.style.top = `${y}px`;
  wordContainer.appendChild(wordElement);

  setTimeout(() => {
    wordElement.remove();
  }, 3000); // Quitar palabra después de 3 segundos
}

setInterval(showRandomWord, 1500); // Mostrar una palabra cada 1.5 segundos
