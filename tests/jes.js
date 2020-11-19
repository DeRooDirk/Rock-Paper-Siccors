var rPs = ["Rock", "Paper", "Scissors"];
// We need two random variables, one for 'you'
var you = rPs[Math.floor(Math.random() * 3)];
// and one for the 'computer'
var computer = rPs[Math.floor(Math.random() * 3)];

// Now invoke function
random(you, computer);

function random(you, computer) {
    if (you === computer) {
        console.log("It's a tie!");
    } else if (you === "Rock" && computer === "Scissors" || you === "Paper" && computer === "Rock" || you === "Scissors" && computer === "Paper") {
        console.log("You've won!");
    } else {
        console.log("You've lost!");
    }
}