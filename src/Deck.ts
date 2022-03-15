import { Card, CardRank, CardSuit } from "./Card";

class Deck {
    cards: Array<Card> = [];

    constructor() {
        this.createDeck();
    }

    createDeck() {
        this.cards = [];
        Object.values(CardSuit).forEach(suit => {
            Object.values(CardRank).forEach(rank => {
                const card = new Card(suit, rank);
                this.cards.push(card);
            });
        });
        this.shuffleDeck();
    }

    printDeck() {
        this.cards.forEach(card => {
            console.log(`Value of the ${card.printCard()} is ${card.getValue()}`);
        });
    }

    shuffleDeck() { // Shuffle deck to be more like real Blackjack
        for (var i = this.cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }

    drawCard(): Card | undefined {
        return this.cards.pop();
    }

    replenishDeck(): boolean {
        if (this.cards.length < 26) {
            this.createDeck();
            return true;
        }

        return false;
    }
}

export {Deck};