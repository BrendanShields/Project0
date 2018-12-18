
const compStart = function() {
  player1.push($('#grid1').data('cell'))
  $('#grid1').addClass("bgnoughts").html('<h1>O</h1>')
  player = 5;
}
compStart()

const secondMove = function() {
  if (!player2.includes(9)){
  grid = `#grid9`
  player1.push($(grid).data('cell'))
  $('#grid9').addClass("bgnoughts").html('<h1>O</h1>')
  player = 5
} else {
  grid = `#grid7`
  player1.push($(grid).data('cell'))
  $('#grid7').addClass("bgnoughts").html('<h1>O</h1>')
  player = 5
}
}
compWin = [
  [1, 2, 3],
  [1, 3, 2],
  [3, 2, 1],
  [1, 5, 9],
  [1, 9, 5],
  [5, 9, 1],
  [1, 4, 7],
  [1, 7, 4],
  [4, 7, 1],
  [4, 5, 6],
  [4, 6, 5],
  [5, 6, 4],
  [7, 8, 9],
  [7, 9, 8],
  [8, 9, 7],
  [5, 2, 8],
  [5, 8, 2],
  [2, 8, 5],
  [6, 9, 3],
  [6, 3, 9],
  [9, 3, 6],
  [5, 7, 3],
  [5, 3, 5],
  [7, 3, 7]
]
compNext = [

]
const logic = function () {
let toggle = 0
for (i = 0; i < winArr.length; i++){



    if (toggle === 0 && player1.includes(winArr[i][0]) && player1.includes(winArr[i][1]) && !player1.includes(winArr[i][2]) && !player2.includes(winArr[i][2])) {
      console.log('first')
      player1.push($(`#grid${winArr[i][2]}`).data('cell'))
      $(`#grid${winArr[i][2]}`).addClass("bgnoughts").html('<h1>O</h1>')
      win(player)

    } else if (toggle === 0 && player1.includes(winArr[i][1]) && player1.includes(winArr[i][2]) && !player1.includes(winArr[i][0]) && !player2.includes(winArr[i][0])) {
      console.log('second')
      player1.push($(`#grid${winArr[i][0]}`).data('cell'))
      $(`#grid${winArr[i][0]}`).addClass("bgnoughts").html('<h1>O</h1>')
      win(player)

    } else if (toggle === 0 && player1.includes(winArr[i][2]) && player1.includes(winArr[i][0]) && !player1.includes(winArr[i][1]) && !player2.includes(winArr[i][1])) {
      player1.push($(`#grid${winArr[i][1]}`).data('cell'))
      $(`#grid${winArr[i][1]}`).addClass("bgnoughts").html('<h1>O</h1>')
      win(player)

    } else if (toggle === 0 && player2.includes(winArr[i][0]) &&  player2.includes(winArr[i][1]) && !player2.includes(winArr[i][2]) && !player1.includes(winArr[i][2])) {
      player1.push($(`#grid${winArr[i][2]}`).data('cell'))
      $(`#grid${winArr[i][2]}`).addClass("bgnoughts").html('<h1>O</h1>')
      player = 5
      toggle = 1

    } else if (toggle === 0 && player2.includes(winArr[i][1]) && player2.includes(winArr[i][2]) && !player2.includes(winArr[i][0]) && !player1.includes(winArr[i][0])) {
      player1.push($(`#grid${winArr[i][0]}`).data('cell'))
      $(`#grid${winArr[i][0]}`).addClass("bgnoughts").html('<h1>O</h1>')
      player = 5
      toggle = 1

    } else if (toggle === 0 && player2.includes(winArr[i][2]) && player2.includes(winArr[i][0]) && !player2.includes(winArr[i][1]) && !player1.includes(winArr[i][1])) {
      player1.push($(`#grid${winArr[i][1]}`).data('cell'))
      $(`#grid${winArr[i][1]}`).addClass("bgnoughts").html('<h1>O</h1>')
      player = 5
      toggle = 1
    }
  }
if (toggle = 0){
  //play random remaining
}
}










// const compStart = function() {
//   start = Math.floor(Math.random() * 4);
//   grid = `#grid${compLogic[start]}`;
//   player1.push($(grid).data('cell'))
//   $(grid).addClass("bgnoughts").html('<h1>O</h1>')
//   player = 5
// }
