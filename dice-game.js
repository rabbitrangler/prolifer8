function rollDice() {
    let goldCoins = 0;
    console.log();
    for (let i = 0; i < 10; i++){
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('The number you rolled is ' + roll + '.\n\nYour current bag is has ' + goldCoins + ' gold, bro.');
        if (roll === 1) {
            alert('Game over, no more rolls my dude!\n\n');
            break;
        }
        if (roll === 2) {
            continue;
        }
        if (roll === 3){
            continue;
        }
        if (roll === 4) {
            alert('Dude you lose a coin...\n\n');
            goldCoins += -1;
            continue;
        }
        alert('Niceee, you won ' +  roll + ' gold coins!\n\n');
        goldCoins += roll;
    }
    if (goldCoins >= 0) {
        alert('You got '+ goldCoins + ' gold, homie.\n\n');
    }
    if (goldCoins < 0) {
        alert('Dude you got ' + goldCoins + ', you owe me ' + -goldCoins + ' now breh...\n\n');
    }
}
