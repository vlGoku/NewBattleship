'use strict'

class Gameboard {
    constructor(gameboardSize){
        this.gameboard = [];
        this.ships = [];
        this.missedShots = [];
        this.allShipsSunk = false;
        this.gameboardSize = gameboardSize;
    }

    createGameboard() {
        for(let i = 0; i < this.gameboardSize; i++){
            let innerArray = [];
            this.gameboard.push(innerArray);
            for (let z = 0; z < this.gameboardSize; z++){
                innerArray.push(0);
            }
        }
    }

    placeShip(x, y){

    }
}

export {Gameboard};