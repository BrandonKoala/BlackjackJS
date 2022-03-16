enum CardSuit {
    Spades = "Spades",
    Clubs = "Clubs",
    Hearts = "Hearts",
    Diamonds = "Diamonds"
};

enum CardRank {
    Ace = "Ace",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10",
    Jack = "Jack",
    Queen = "Queen",
    King = "King"
};

class Card {
    suit: CardSuit;
    rank: CardRank;

    constructor(suit: CardSuit, rank: CardRank) {
        this.suit = suit;
        this.rank = rank;
    }

    printCard(): string {
        return `${this.rank} of ${this.suit}`;
    }

    getValue(score?: number): number {
        if (!isNaN(Number(this.rank))) {
            return Number(this.rank);
        }

        if (this.rank === CardRank.Ace) {
            if (score && score > 10) {
                return 1;
            }

            return 11;
        }

        return 10;
    }

}

export {Card, CardRank, CardSuit};