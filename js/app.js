/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner

board = [null, null, null, null, null, null, null, null, null]
turn = 1
winner = null

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll("div.square")

const messageEl = document.querySelector("#message")

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init() {
    //console.log("sanity check")
    
}
render()
init()


// function render() {
//     board.forEach(square => {
//         square = squareEls[board.indexOf(square)]
//         //console.log(square)
//     })
// }

function render() {
    let Idx 
    board.forEach(function(square, Idx) {
        if(turn === 1) {
            squareEls[Idx].textContent = "X"
            //console.log(squareEls[Idx].textContent)
        } else {
            squareEls[Idx].textContent = "O"
            console.log(squareEls[Idx].textContent)
        } 
        
    })
        if (winner = null) {
            messageEl.textContent = `It is player ${turn}'s turn!`
        } else if (winner === 'T')  {
            messageEl.textContent = `It 's a tie!`
        } else {
            messageEl.textContent = `Player ${winner} won!`
        }

}
