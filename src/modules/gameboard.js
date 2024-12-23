"use strict";

import { Ship } from "./ship";

class Gameboard {
  constructor(gameboardSize) {
    this.gameboard = [];
    this.ships = [];
    this.missedShots = [];
    this.allShipsSunk = false;
    this.gameboardSize = gameboardSize;
    this.currentShipIndex = 0;
    this.count = 0;
  }

  createShips() {
    if(this.ships.length > 0) return;

    let carrier = new Ship("Carrier", 5, 5);
    let bomber = new Ship("Bomber", 4, 4);
    let stealth = new Ship("Stealth", 3, 3);
    let goblin = new Ship("Goblin", 2, 2);
    let mini = new Ship("Mini", 1, 1);

    this.ships.push(carrier, bomber, stealth, goblin, mini);
  }

  //creates a gameboard with a given size
  createGameboard(boardId, isPlayerBoard) {
    this.isPlayerBoard = isPlayerBoard;

    for (let i = 0; i < this.gameboardSize; i++) {
      let innerArray = [];
      this.gameboard.push(innerArray);
      for (let z = 0; z < this.gameboardSize; z++) {
        innerArray.push(0);
      }
    }
    // Spielfeld in HTML erstellen
    const grid = document.getElementById(boardId).querySelector(".grid"); // Hier nehmen wir das Grid aus HTML
    grid.innerHTML = ""; // Falls vorherige Felder existieren, entfernen

    // Spielfelder in das Grid einfügen
    for (let i = 0; i < this.gameboardSize; i++) {
      for (let z = 0; z < this.gameboardSize; z++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        // Optional: Klick-Event auf jedes Feld, um zu schießen oder zu platzieren
        if (isPlayerBoard) {
          cell.addEventListener("click", () => this.handleCellClick(i, z));
        }
        grid.appendChild(cell);
      }
    }
    this.createShips();
  }

  //places a ship on the gameboard -> check later if grid placed right (x, y)
  placeShip(ship, x, y) {
    let z = 1;
    if (this.gameboard[x][y] !== 0) {
      console.log("Hier ist belegt");
    } else {
      for (let i = 0; i < ship.getShipLength(); i++) {
        if ([x + i] > 9) {
          this.gameboard[x - z][y] = ship.shipNumber;
          ship.wherePlaced.push([x - z, y]);
          z++;
        } else {
          this.gameboard[x + i][y] = ship.shipNumber;
          ship.wherePlaced.push([x + i, y]);
        }
      }

      this.updateGameboard();

      this.currentShipIndex++;
    }
  }

  updateGameboard() {
    const grid = document.querySelector(".grid");
    const cells = grid.querySelectorAll(".cell");

    cells.forEach((cell, index) => {
      const i = Math.floor(index / this.gameboardSize);
      const z = index % this.gameboardSize;

      if (this.gameboard[i][z] !== 0) {
        cell.classList.add("ship");
      } else {
        cell.classList.remove("ship");
      }
    });
  }

  placeShipComputer() {
    this.createShips();
    for (const ship of this.ships) {
      let x, y, z;

      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        z = 1;
      } while (!this.isPlacementValid(x, y, ship));

      for (let i = 0; i < ship.getShipLength(); i++) {
        if (x + i > 9) {
          this.gameboard[x - z][y] = ship.shipNumber;
          z++;
        } else {
          this.gameboard[x + i][y] = ship.shipNumber;
        }
      }
    }
  }

  isPlacementValid(x, y, ship) {
    for (let i = 0; i < ship.getShipLength(); i++) {
      if (x + i >= this.gameboardSize || this.gameboard[x + i][y] !== 0) {
        return false;
      }
    }
    return true;
  }

  //attack on the ship -> TODO: what exact ship got hit
  receiveAttack(x, y) {
    if (this.gameboard[x][y] !== 0) {
      this.gameboard[x][y] = "X";
      console.log(
        "Ein Schiff wurde getroffen auf den Positionen " + x + " und " + y
      );
    } else {
      this.gameboard[x][y] = "O";
      console.log("Das Schiff wurde verfehlt: " + x + " " + y);
      this.missedShots.push([x][y]);
    }
    this.areAllShipsSunk();
  }

  areAllShipsSunk() {
    this.count++;
    console.log("Ich funktioniere " + this.count);
  }

  handleCellClick(x, y) {
    if (!this.isPlayerBoard) {
      console.log(
        "Nicht erlaubt, Schiffe auf dem Computerboard zu platzieren!"
      );
      return;
    }

    if (this.ships.length === 0 || this.currentShipIndex >= this.ships.length) {
      console.log("Alle Schiffe sind bereits platziert!");
      return; // Keine weiteren Schiffe können platziert werden
    }
  
    const ship = this.ships[this.currentShipIndex];
    this.placeShip(ship, x, y);
  }
}

export { Gameboard };
