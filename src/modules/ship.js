'use strict'

import { Gameboard } from "./gameboard";

//Add property to save whereHit positions

class Ship {
    constructor(name, length, number) {
        this.name = name;
        this.length = length;
        this.shipNumber = number;
        this.isSunk = false;
        this.timesHit = 0;
        this.whereHit = [];
        this.wherePlaced = [];
    }

    //return where the ship got hit
    getWhereHit(){
        return this.whereHit;
    }

    //return how many times ship got hit
    getTimesHit(){
        return this.timesHit;
    }

    //return ship length
    getShipLength(){
        return this.length;
    }


    //return if ship is sunk, checks if the length === to times hit -> true = ship sunk
    isShipSunk(){
        if (this.timesHit === this.length){
            return this.isSunk = true;
        } else {
            return this.isSunk;
        }
    }


    //hit function 
    hit(x, y){
        this.whereHit.push([x,y]);
        this.timesHit++;
        console.log(this.isShipSunk());
    }

}

export { Ship };