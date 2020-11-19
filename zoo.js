const moves = ["Rock ", "Paper ", "Scissors "],
    messages = ["You won! ✨", "Skynet won 🧨", "It's a draw! 🎃"], // [Player, skynet, draw]
    score = [0, 0, 0], // [PL, skynet draw]
    appel = sel => document.querySelector(sel),
    appel_result = appel("#result"),
    appel_playerScore = appel("#playerScore"),
    appel_skynetScore = appel("#skynetScore");


function game() {

    const player = +this.dataset.playermove; // Get dataset value as integer
    const skynet = ~~(Math.random() * 3); // All you need: 0, 1, 2   That `~~` is a double NOT bitwise operator.

    // info  http://rocha.la/JavaScript-bitwise-operators-in-practice

    //  ~~   It is used as a faster substitute for Math.floor() for positive numbers
    const result = player === skynet ? 2 : (skynet + 1) % 3 === player ? 0 : 1; // 0=PLwins 1=skynetwins 2=draw 

    score[result]++; // Increment PL or skynets score (Increments number of draws too ;) )
    appel_result.innerHTML = `You: ${moves[player]}<br>skynet: ${moves[skynet]}<br>${messages[result]}`;
    appel_playerScore.textContent = score[0];
    appel_skynetScore.textContent = score[1];
}

// EVENTS:
[...document.querySelectorAll("[data-playermove]")].forEach(el => el.addEventListener("click", game));