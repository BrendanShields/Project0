/// Variables //////////////////////////////////////////////////////////////////

let   player1 = [], player2 = [], count = 0, winner = 0, player = 1, computer = false, easy = true,
      remaining =[1,2,3,4,5,6,7,8,9]

const allGrids = '#grid1, #grid2, #grid3, #grid4, #grid5, #grid6, #grid7, #grid8, #grid9',
      winArr = [[1, 2, 3],[4, 5, 6],[7, 8, 9],[1, 4, 7],[2, 5, 8],[3, 6, 9],[1, 5, 9],[3, 5, 7]]
      resultArr = []




/// Checks Win /////////////////////////////////////////////////////////////////

const checkWin = function(player) {


  for (i = 0; i < winArr.length; i++) {

    const w  = winArr[i];
    const p1 = player1;
    const p2 = player2;
    const p  = player;


//// iterates through possible winning moves, if player1 !contain win it checks player2
/// if player2 !contain win && there are remaining tiles, keep playing else if remaining
// tiles is empty, return draw;

       if ( p=== 'player1' && p1.includes( w[ 0 ] ) && p1.includes( w[ 1 ] ) && p1.includes( w[ 2 ] )) {
         winner = 1;
         $(`#grid${w[0]}, #grid${w[1]}, #grid${w[2]}`).css('background-color', 'rgb(181, 244, 252, .5)')
         setTimeout(function() { win(p) }, 2500);

       } else if ( p === 'player2' && p2.includes( w[ 0 ] ) && p2.includes( w[ 1 ] ) && p2.includes( w[ 2 ] )) {
         winner = 1;
         $(`#grid${w[0]}, #grid${w[1]}, #grid${w[2]}`).css('background-color', 'rgb(181, 244, 252, .1)')
         setTimeout(function() { win(p) }, 2500);

       } else if (remaining.length === 0 && winner === 0) {
         $(allGrids).css('background-color', 'rgb(223, 79, 75, .5)')
         setTimeout(function() { win('draw') }, 2500);

    }
  }
}


/// Splice Function returning value to p1 and p2 arrays ////////////////////////
// takes argument passed from jquery logic in render   ////////////////////////

  const spliceFunc = function(num) {

    const index = remaining.indexOf(num)
    remaining.splice(index, 1)

}
