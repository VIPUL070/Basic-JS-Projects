let cell = document.querySelectorAll('.cell')
let result = document.getElementById('res')

let turnX = true;

let winOrder = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

cell.forEach(c => {
    c.addEventListener("click", (e) => {
        if (turnX) {
            c.textContent = "X"
            turnX = false;
        } else {
            c.textContent = "O"
            turnX = true;
        }
        c.style.pointerEvents = "none";
        checkWinner();
        if(winner){
            resetGame();
        }
        startGame();
    })
});

let winner = false;
function checkWinner() {

    for (order of winOrder) {
        let firstVal = cell[order[0]].textContent
        let secVal = cell[order[1]].textContent
        let thirdVal = cell[order[2]].textContent
        
        if(firstVal != "" && secVal != "" && thirdVal != ""){
            if(firstVal == secVal && secVal === thirdVal){
                result.textContent = `Winner Is ${firstVal}`
                winner =true;
            }
        }
    }
}

function resetGame(){
    cell.forEach(c => {
        c.style.pointerEvents = "none";
    })
}

let newGame = document.createElement('button')
newGame.className = "new-game-btn";
document.querySelector('h1').appendChild(newGame)
newGame.textContent = "Start New Game"

function startGame() {
    newGame.addEventListener("click", (e) => {
       cell.forEach(c => {
        c.textContent = ''
        c.style.pointerEvents = "pointer";
       })
       turnX = true;
       result.textContent = ''
    })
}
