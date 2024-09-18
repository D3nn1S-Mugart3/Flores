const phrases = [
  "Te amo mucho 💖",
  "Eres mi sol 🌞",
  "Te mereces lo mejor 🌸",
  "Siempre en mi corazón ❤️",
  "Mi reina hermosa 👑",
  "Mi gordis preciosa 💕",
  "Mi lindonta morenita 😍",
  "Mi enojona 😘",
];

let index = 0;

function updateText() {
  const textElement = document.getElementById("animatedText");
  textElement.textContent = phrases[index];
  index = (index + 1) % phrases.length; // Ciclo a través de las frases
}

// Actualizar el texto cada 3 segundos
setInterval(updateText, 3000);
