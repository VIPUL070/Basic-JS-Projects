let cell = document.querySelectorAll('.cell')
let result = document.getElementById('res')

let turnX = true;
let winner = false;

let winOrder = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

// Add event listeners to cells only once
function setupGame(){
    cell.forEach(c => {
        c.addEventListener("click", handleCellClick);
    });
}

function handleCellClick(e) {
    const clickedCell = e.target;
    
    // Prevent clicking on already filled cells
    if (clickedCell.textContent !== "" || winner) {
        return;
    }
    
    if (turnX) {
        clickedCell.textContent = "X"
        turnX = false;
    } else {
        clickedCell.textContent = "O"
        turnX = true;
    }
    
    checkWinner();
    
    if(winner){
        // Disable all cells when game is won
        cell.forEach(c => {
            c.style.pointerEvents = "none";
        });
    }
}

function checkWinner() {
    for (order of winOrder) {
        let firstVal = cell[order[0]].textContent
        let secVal = cell[order[1]].textContent
        let thirdVal = cell[order[2]].textContent
        
        if(firstVal != "" && secVal != "" && thirdVal != ""){
            if(firstVal == secVal && secVal === thirdVal){
                result.textContent = `Winner Is ${firstVal}`
                winner = true;
                return;
            }
        }
    }
    
    // Check for tie
    let allFilled = true;
    cell.forEach(c => {
        if (c.textContent === "") {
            allFilled = false;
        }
    });
    
    if (allFilled && !winner) {
        result.textContent = "It's a Tie!";
    }
}

// Create new game button
let newGame = document.createElement('button')
newGame.className = "new-game-btn";
document.querySelector('h1').appendChild(newGame)
newGame.textContent = "Start New Game"

// Add event listener to new game button only once
newGame.addEventListener("click", startNewGame);

function startNewGame() {
    cell.forEach(c => {
        c.textContent = ''
        c.style.pointerEvents = "auto";
    });
    turnX = true;
    winner = false; // Reset winner flag
    result.textContent = ''
}

// Initialize the game
setupGame();