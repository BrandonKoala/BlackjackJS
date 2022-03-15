import { Actions } from "./Actions";
import { Hand } from "./Hand";

class Dealer {
    hand: Hand;

    constructor() {
        this.hand = new Hand();
    }

    makeDecision(): Actions {
        const score = this.hand.getScore();
        if (score < 17) {
            return Actions.Hit;
        }

        return Actions.Stand;
    }
}

export {Dealer};