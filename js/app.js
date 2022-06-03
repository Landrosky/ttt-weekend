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



/*----------------------------- Event Listeners -----------------------------*/
 squareEls.forEach(function(square) {
     square.addEventListener('click', handleClick) 
 })

/*-------------------------------- Functions --------------------------------*/
init()

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
            //console.log(squareEls[Idx].textContent)
        } 
        if (square === -1) {
            squareEls[Idx].textContent = "O"
            //console.log(squareEls[Idx].textContent)
        } 
        
    })
        if (winner === null) {
            messageEl.textContent = `Player ${turn === 1 ? "X": "O"}'s turn!`
        } else if (winner === 'T')  {
            messageEl.textContent = `It 's a tie!`
        } else {
            messageEl.textContent = `Congratulations!!! Player ${turn === 1 ? "O": "X"} won!`
        }

}

function handleClick(evt) {
    console.log(evt)
    console.log(evt.target)
    console.log(evt.target.id)
    const sqIdx = evt.target.id
    board[sqIdx] = turn
    turn = turn * -1
}
