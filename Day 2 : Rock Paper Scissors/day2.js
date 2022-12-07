// Part 1
var score = 0;
require('fs').readFileSync("./input.txt", "utf-8").split(/\r?\n/).forEach((line) => {
    var round = 0;
    switch (line) {
        case "A X":
            round = 1 + 3;
            break;
        case "B Y":
            round = 2 + 3;
            break;
        case "C Z":
            round = 3 + 3;
            break;
        case "A Y":
            round = 2 + 6;
            break;
        case "A Z":
            round = 3 + 0;
            break;
        case "B X":
            round = 1 + 0;
            break;
        case "B Z":
            round = 3 + 6;
            break;
        case "C X":
            round = 1 + 6;
            break;
        case "C Y":
            round = 2 + 0;
            break;
    }
    score += round;
});
console.log("Partie 1:", score);

// Part 2
var score = 0;
require('fs').readFileSync("./input.txt", "utf-8").split(/\r?\n/).forEach((line) => {
    var round = 0;
    switch (line) {
        case "A X":
            round = 3 + 0;
            break;
        case "A Y":
            round = 1 + 3;
            break;
        case "A Z":
            round = 2 + 6;
            break;

        case "B X":
            round = 1 + 0;
            break;
        case "B Y":
            round = 2 + 3;
            break;
        case "B Z":
            round = 3 + 6;
            break;

        case "C X":
            round = 2 + 0;
            break;
        case "C Y":
            round = 3 + 3;
            break;
        case "C Z":
            round = 1 + 6;
            break;
    }
    score += round;
});
console.log("Partie 2:", score);