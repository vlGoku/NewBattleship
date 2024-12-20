"use strict";

//import { Ship } from "./ship";

class Gameboard {
  constructor(gameboardSize) {
    this.gameboard = [];
    this.ships = [];
    this.missedShots = [];
    this.allShipsSunk = false;
    this.gameboardSize = gameboardSize;
    this.count = 0;
  }

  //creates a gameboard with a given size
  createGameboard() {
    for (let i = 0; i < this.gameboardSize; i++) {
      let innerArray = [];
      this.gameboard.push(innerArray);
      for (let z = 0; z < this.gameboardSize; z++) {
        innerArray.push(0);
      }
    }
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
          z++;
        } else {
          this.gameboard[x + i][y] = ship.shipNumber;
        }
      }
      this.ships.push(ship);
    }
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
}

export { Gameboard };
