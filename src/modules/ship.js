'use strict'

//Add property to save whereHit positions

class Ship {
    constructor(name, length, number) {
        this.name = name;
        this.length = length;
        this.number = number;
        this.isSunk = false;
        this.timesHit = 0;
        this.whereHit = [];
        this.wherePlaced = [];
    }

    getWhereHit(){
        return this.whereHit;
    }

    getTimesHit(){
        return this.timesHit;
    }

    isShipSunk(){
        if (this.timesHit === this.length){
            return this.isSunk = true;
        } else {
            return this.isSunk;
        }
    }

    hit(x, y){
        this.whereHit.push([x,y]);
        this.timesHit++;
        console.log(this.isShipSunk());
    }

}

export { Ship };