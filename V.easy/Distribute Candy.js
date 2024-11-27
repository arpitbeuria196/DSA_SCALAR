const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the array of ratings (space-separated): ", (ip) => {
    const arr = ip.split(' ').map(Number);
    console.log(distributeCandies(arr));
    rl.close();
});

const distributeCandies = (A) => {
    if (A.length === 0) {
        return 0;
    }

    let candies = new Array(A.length).fill(1);

    // Left-to-right pass
    for (let i = 1; i < A.length; i++) {
        if (A[i] > A[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Right-to-left pass
    for (let i = A.length - 2; i >= 0; i--) {
        if (A[i] > A[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    return candies.reduce((a, b) => a + b, 0);
};
