let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function makeMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        document.getElementsByClassName("cell")[index].textContent = currentPlayer;
        
        if (checkWinner()) {
            document.getElementById("status").innerHTML = `🎉 Player <span id="player-turn">${currentPlayer}</span> Wins!`;
            gameActive = false;
            highlightWinningCells();
            return;
        }

        if (!board.includes("")) {
            document.getElementById("status").textContent = "🤝 It's a Draw!";
            gameActive = false;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        document.getElementById("player-turn").textContent = currentPlayer;
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    return winPatterns.find(pattern => {
        const [a, b, c] = pattern;
        return board[a] !== "" && board[a] === board[b] && board[b] === board[c];
    });
}

function highlightWinningCells() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
            document.getElementsByClassName("cell")[a].classList.add("win");
            document.getElementsByClassName("cell")[b].classList.add("win");
            document.getElementsByClassName("cell")[c].classList.add("win");
        }
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.getElementById("status").innerHTML = "Player <span id='player-turn'>X</span>'s Turn";
    
    let cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
        cells[i].classList.remove("win");
    }
}
