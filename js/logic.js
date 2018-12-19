//Sets the player Arrays & count for the number of turns.
let player1 = [],
  player2 = [],
  count = 0;
remaining = [1,2,3,4,5,6,7,8,9]
//Sets winning combinations Array.
const winArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]
const compLogic = [1, 3, 7, 9]
//compares players array to winning combinations, if true then starts win function.
const checkWin = function(player) {
  for (i = 0; i < winArr.length; i++) { //position in first array
    if (player === 'player1' && player1.includes(winArr[i][0]) && player1.includes(winArr[i][1]) && player1.includes(winArr[i][2])) {
      win(player)
    } else if (player === 'player2' && player2.includes(winArr[i][0]) && player2.includes(winArr[i][1]) && player2.includes(winArr[i][2])) {
      win(player)
    } else if (remaining.length === 0) {
      win('draw')
    }
  }
}
