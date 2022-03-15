import { Deck } from './Deck';
import { Hand } from './Hand';

const deck = new Deck();

deck.printDeck();
console.log('Shuffling');
deck.shuffleDeck();
deck.printDeck();

const hand = new Hand();
hand.addCard(deck.drawCard());
hand.addCard(deck.drawCard());
hand.addCard(deck.drawCard());
console.log(hand);
console.log(hand.getScore());

