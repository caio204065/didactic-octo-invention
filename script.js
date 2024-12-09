const songsData = [
  { id: 1, name: "Sayonara", artist: "Wanko Ni Mero Mero", preview: "sayonara.mp3" },
  { id: 2, name: "Safe and Sound", artist: "Capital Cities", preview: "safeandsound.mp3" },
  { id: 3, name: "Sugar", artist: "Maroon 5", preview: "sugar.mp3" }
];

const scoresData = [
  { player: "Jazzy", score: 4065 },
  { player: "Happy", score: 4065 },
  { player: "Funky", score: 4065 }
];

// Carrega músicas
function loadSongs() {
  const songsContainer = document.getElementById("songs-container");
  songsData.forEach(song => {
    const songDiv = document.createElement("div");
    songDiv.className = "song";
    songDiv.innerHTML = `
      <h3>${song.name}</h3>
      <p>${song.artist}</p>
      <audio controls>
        <source src="${song.preview}" type="audio/mp3">
      </audio>
      <button onclick="playGame()">Dance!</button>
    `;
    songsContainer.appendChild(songDiv);
  });
}

// Carrega pontuações
function loadScores() {
  const scoresContainer = document.getElementById("score-container");
  scoresData.forEach(score => {
    const scoreDiv = document.createElement("div");
    scoreDiv.className = "score";
    scoreDiv.innerHTML = `
      <h3>${score.player}</h3>
      <p>Score: ${score.score}</p>
    `;
    scoresContainer.appendChild(scoreDiv);
  });
}

// Troca de menus
function showMenu(menuId) {
  document.querySelectorAll(".menu").forEach(menu => menu.classList.remove("active"));
  document.getElementById(menuId).classList.add("active");
}

// Inicialização
function playGame() {
  showMenu("gameplay");
}

// Carrega menus ao iniciar
loadSongs();
loadScores();
