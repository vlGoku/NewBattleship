import "./styles.css";

import { Ship } from "./modules/ship";
import { Gameboard } from "./modules/gameboard";

let newShip = new Ship("Carrier", 2, 5);
let newShip2 = new Ship("Bomber", 3, 3);

let newGameboard = new Gameboard(10);
newGameboard.createGameboard();
newGameboard.placeShip(newShip, 3, 7);

newGameboard.receiveAttack(3,7);
newGameboard.receiveAttack(4,7);

newGameboard.areAllShipsSunk();

console.log(newGameboard);