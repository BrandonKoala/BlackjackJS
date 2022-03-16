import { Hand } from "./Hand"

class Player {
    hand: Hand;
    wins: number = 0;
    losses: number = 0;
    draws: number = 0;
    money: number = 100;
    currentBet: number = 0;

    constructor() {
        this.hand = new Hand();
    }


    gameWin() {
        this.wins++;
        this.money += this.currentBet;
        this.currentBet = 0;
    }

    gameLose() {
        this.losses++;
        this.money -= this.currentBet;
        this.currentBet = 0
    }

    gameDraw() {
        this.draws++;
        this.currentBet = 0
    }

    startBet(bet: number): boolean {
        if (bet > this.money && bet > 0) {
            return false;
        }

        this.currentBet = bet;
        return true;
    }

    doubleBet(): boolean {
        if (this.money >= this.currentBet * 2) {
            this.currentBet *= 2;
            return true;
        }

        return false;
    }
}

export {Player}