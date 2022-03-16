import { Actions } from './Actions';
import { Dealer } from './Dealer';
import { Deck } from './Deck';
import { Hand } from './Hand';
import { Player } from './Player';

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

async function startBet(player: Player): Promise<boolean> {
    return new Promise ((resolve) => {
        readline.question(`How much would you like to bet? You have \$${player.money}\n`, (bet: any) => {
            const betNum = Number(bet);
            if (isNaN(betNum)) {
                console.log("That is not a number. Please enter a valid bet.")
                resolve(startBet(player));
                return;
            }
            if (!player.startBet(betNum)) {
                console.log("You do not have enough money to bet this amount. Please enter a valid bet.")
                resolve(startBet(player));
                return;
            }
    
            player.startBet(betNum)
            readline.close();
            resolve(true);
        });
        
    });
}

function playerAction(action: Actions, player: Player, deck: Deck): number {
    switch (action) {
        case Actions.Hit:
            player.hand.addCard(deck.drawCard());
            break;
        case Actions.DoubleDown:
            player.doubleBet();
            player.hand.addCard(deck.drawCard());
            break;
        default:
    }

    return player.hand.getScore();
}

function startGame() {
    console.log('Welcome to BlackJack!');

    const player = new Player();
    const dealer = new Dealer();
    const deck = new Deck();

    startBet(player).then((res) => {
        if (res) {
            console.log(`Player is betting \$${player.currentBet}`);
            player.hand.addCard(deck.drawCard(2));
            console.log(`Hand: ${player.hand.printHand()}`);

            dealer.hand.addCard(deck.drawCard());
            console.log(`Dealer Hand: ${dealer.hand.printHand()}`);
            console.log("------------------------");
            console.log(playerAction(Actions.Hit, player, deck));
            console.log(`Hand: ${player.hand.printHand()}`);
        }
   });

}

startGame();


