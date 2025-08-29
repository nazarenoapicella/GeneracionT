const words = [
    'californication', 'plataforma5', 'black', 'summer', 'flea', 'aeroplane',
    'peppers', 'unlimited', 'arcadium', 'love', 'getaway', 'stadium',
    'quixoticelixer', 'quarter', 'snow', 'dylan', 'zephyr', 'funky', 'chili'
  ];
  
  const randomWordEl = document.getElementById('randomWord');
  const input = document.getElementById('text');
  const timeSpan = document.getElementById('timeSpan');
  const scoreEl = document.getElementById('score');
  const endGameContainer = document.getElementById('end-game-container');
  const main = document.querySelector('.main');
  
  let palabraAleatoria;
  let time = 10;
  let score = 0;
  let timeInterval;
  
  function randomWords() {
    return words[Math.floor(Math.random() * words.length)];
  }
  
  function addToDOM() {
    palabraAleatoria = randomWords();
    randomWordEl.innerText = palabraAleatoria;
  }
  
  function updateScore() {
    score++;
    scoreEl.innerText = score;
  }
  
  function gameOver() {
    clearInterval(timeInterval);
    main.remove();
    endGameContainer.innerHTML = `
      <h2>⏱ ¡Se acabó el tiempo!</h2>
      <p>Tu puntaje final fue: ${score}</p>
      <button onclick="window.location.reload()">Volver a jugar</button>
    `;
  }
  
  function actualizarTiempo() {
    time--;
    timeSpan.innerText = `${time}s`;
  
    if (time === 0) {
      gameOver();
    }
  }
  
  input.addEventListener('input', (e) => {
    const palabraIngresada = e.target.value.trim();
    if (palabraIngresada === palabraAleatoria) {
      time += 3;
      addToDOM();
      updateScore();
      input.value = '';
    }
  });
  
  addToDOM();
  timeInterval = setInterval(actualizarTiempo, 1000);
  