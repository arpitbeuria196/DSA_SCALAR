const { stdin } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
    input: stdin,
    output: process.stdout
});

rl.question("Enter the number of passes (A): ", (ip) => {
    const A = parseInt(ip);

    rl.question("Enter the ID of the initial player (B): ", (ip) => {
        const B = parseInt(ip);

        rl.question("Enter the array of passes (C): ", (array_ip) => {
            const arr = array_ip.split(' ').map(Number);

            console.log(passingGame(A, B, arr));
            rl.close();
        });
    });
});

const passingGame = (A, B, arr) => {
    let currentPlayer = B; // The player currently possessing the ball
    let previousPlayer = null; // The player who passed the ball last

    for (let i = 0; i < arr.length; i++) {
        const pass = arr[i];

        if (pass === 0) {
            // Back pass: current player gets the ball from the previous player
            currentPlayer = previousPlayer;
        } else {
            // Forward pass: update current and previous players
            previousPlayer = currentPlayer;
            currentPlayer = pass;
        }
    }

    return currentPlayer; // Return the player who has the ball after all passes
};
