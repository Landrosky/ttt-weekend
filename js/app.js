/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]


/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner



/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".square")

const messageEl = document.querySelector("#message")

const resetBtnEl = document.querySelector("#reset-button")



const INIT_MESSAGE = "Player it's your turn! Make a move!"


/*----------------------------- Event Listeners -----------------------------*/
 squareEls.forEach(function(square) {
     square.addEventListener('click', handleClick) 
     
})

    



resetBtnEl.addEventListener("click", function() {
    init()
    messageEl.textContent = INIT_MESSAGE
}) 

/*-------------------------------- Functions --------------------------------*/
init()


messageEl.textContent = INIT_MESSAGE

function init() {
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = null
    
    //console.log("sanity check")
    render()
}


function render() {
    
    board.forEach(function(square, Idx) {
        if(square === 1) {
            squareEls[Idx].textContent = "X"
            squareEls[Idx].style.color = "red"
        } 
        if (square === -1) {
            squareEls[Idx].textContent = "O"
            //console.log(squareEls[Idx].textContent)
            squareEls[Idx].style.color = "blue"
        } 
        if(!square) {
            squareEls[Idx].textContent = ""
        }
        
    })
        if (winner === null) {
            messageEl.textContent =  `It's player ${turn === 1 ? "X": "O"}'s turn!`
            
        } else if (winner === 'T')  {
            messageEl.textContent = `It 's a tie!`
        } else {
            messageEl.textContent = `Congratulations!!! Player ${turn === 1 ? "O": "X"} won!`
        }

}

function handleClick(evt) {
    // console.log(evt)
    // console.log(evt.target)
    // console.log(evt.target.id)
    const sqIdx = parseInt(evt.target.id.substring(2))
    //console.log(sqIdx)
    if (board[sqIdx] !== null || winner !== null){
        return
    }
    board[sqIdx] = turn
    //console.log(turn)
    turn = turn * -1
    getWinner()
    //the below function will show X and O on the board every time the player clicks
    render()
}

function getWinner() {
    winningCombos.forEach(function(winningCombos) {
        let sum = board[winningCombos[0]] + board[winningCombos[1]] + board[winningCombos[2]]
        if(Math.abs(sum) === 3) {
            winner = turn
        } 
        else if (board.includes(null) === false) {
            winner = "T"
        }
    })
}

