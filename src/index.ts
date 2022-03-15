import { Dealer } from './Dealer';
import { Deck } from './Deck';
import { Hand } from './Hand';
import { Player } from './Player';

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  

function startGame(player: Player): Promise<boolean> {
    return new Promise (resolve => {
        readline.question(`How much would you like to bet? You have \$${player.money}\n`, (bet: any) => {
            if (isNaN(Number(bet))) {
                console.log("That is not a number. Please enter a valid bet.")
                resolve(startGame(player));
                return;
            }
            if (!player.startBet(Number(bet))) {
                console.log("You do not have enough money to bet this amount. Please enter a valid bet.")
                resolve(startGame(player));
                return;
            }
    
            readline.close();
            resolve(true);
        });
        
    });
}

function main() {
    console.log('Welcome to BlackJack')

    let playing = true;
    const player = new Player();
    const dealer = new Dealer();
    const deck = new Deck();

   startGame(player).then((res) => {
        if (res) {
            console.log("Next");
        }
   });
}

main();


