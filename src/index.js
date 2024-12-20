import "./styles.css";

import { Ship } from "./modules/ship";
import { Gameboard } from "./modules/gameboard";

let newGameboard = new Gameboard(10);
newGameboard.createGameboard();

console.log(newGameboard);