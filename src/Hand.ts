import { Card, CardRank } from "./Card";

class Hand {
    cards: Array<Card> = [];

    addCard(card?: Card | Array<Card>) {
        if (!card) return;

        if (Array.isArray(card)) {
            card.forEach(c => {
                this.cards.push(c);
            });
            return;
        }

        this.cards.push(card);
    }

    getHand(): Array<Card> {
        return this.cards;
    }

    getScore(): number {
        let score = 0
        let aces: Array<Card> = []

        this.cards.forEach(card => {
            if (card.rank == CardRank.Ace) {
                aces.push(card);
                return; // Check aces last
            }
            score += card.getValue(score);
        });

        // Check value of aces last as they can be 11 or 1 depending on other score
        aces.forEach(ace => {
            score += ace.getValue(score);
        });

        return score;
    }

    reset() {
        this.cards = [];
    }

    printHand() {
        return `${this.cards.map(c => c.printCard()).join(', ')}`
    }
}

export {Hand};