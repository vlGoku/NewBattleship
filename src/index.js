import "./styles.css";

import { Ship } from "./modules/ship";
import { Gameboard } from "./modules/gameboard";

document.addEventListener('DOMContentLoaded', () => {
    // Instanz des Gameboard-Objekts erstellen
    const playerGameboard = new Gameboard(10);  // 10x10 Spielfeld
    const computerGameboard = new Gameboard(10);
  
    // Spielfelder erstellen
    playerGameboard.createGameboard('player-board', true);
    computerGameboard.createGameboard('computer-board', false);
  
    // Spiel starten Button
    const startButton = document.getElementById('start-game');
    startButton.addEventListener('click', () => {
      // Hier könnte Logik für das Starten des Spiels kommen
      console.log('Spiel gestartet!');
      computerGameboard.placeShipComputer();

      console.log(computerGameboard.gameboard);

      startButton.disabled = true;
    });

  });



