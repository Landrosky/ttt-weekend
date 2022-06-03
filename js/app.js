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
        let sum = board[winningCombos[0]] + board[winningCombos[1]] + board[winningComb[2]]
        if(Math.abs(sum) === 3) {
            winner = turn
        } else if (board.every!== null)
}


//for(let i = 0; i < winningCombos.length; i++) {
    // let sum = Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === 3)
    //     } if (sum === 3) {
    //         winner = 1
    //     }   else if (sum === -3) {
    //         winner = -1
    //     }   else if (sum !== 3) {
    //         winner = "T"
    //     }   else {
    //         return null
    //     }
//}