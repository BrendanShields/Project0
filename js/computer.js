const spliceFunc = function(num) {
  const index = remaining.indexOf(num)
  remaining.splice(index, 1)
}

const compStart = function() {
  $(`#grid1`).trigger('click')
  player = 5;
}
const secondMove = function() {
  if (!player2.includes(9)) {
    $(`#grid9`).trigger('click')
  } else {
    spliceFunc(7)
    $(`#grid7`).trigger('click')
  }
}

const logic = function() {
  let toggle = 0
  for (i = 0; i < winArr.length; i++) {
    if (toggle === 0 && player1.includes(winArr[i][0]) && player1.includes(winArr[i][1]) && !player1.includes(winArr[i][2]) && !player2.includes(winArr[i][2])) {
      $(`#grid${winArr[i][2]}`).trigger('click');

      toggle = 1
    } else if (toggle === 0 && player1.includes(winArr[i][1]) && player1.includes(winArr[i][2]) && !player1.includes(winArr[i][0]) && !player2.includes(winArr[i][0])) {
      $(`#grid${winArr[i][0]}`).trigger('click');
      toggle = 1
    } else if (toggle === 0 && player1.includes(winArr[i][2]) && player1.includes(winArr[i][0]) && !player1.includes(winArr[i][1]) && !player2.includes(winArr[i][1])) {
      $(`#grid${winArr[i][1]}`).trigger('click');
      toggle = 1
    } else if (toggle === 0 && player2.includes(winArr[i][0]) && player2.includes(winArr[i][1]) && !player2.includes(winArr[i][2]) && !player1.includes(winArr[i][2])) {
      spliceFunc(winArr[i][2])
      player1.push($(`#grid${winArr[i][2]}`).data('cell'))
      $(`#grid${winArr[i][2]}`).addClass("bgnoughts").html('<h1>O</h1>')
      player = 5
      toggle = 1
    } else if (toggle === 0 && player2.includes(winArr[i][1]) && player2.includes(winArr[i][2]) && !player2.includes(winArr[i][0]) && !player1.includes(winArr[i][0])) {
      $(`#grid${winArr[i][0]}`).trigger('click');
      toggle = 1
    } else if (toggle === 0 && player2.includes(winArr[i][2]) && player2.includes(winArr[i][0]) && !player2.includes(winArr[i][1]) && !player1.includes(winArr[i][1])) {
      $(`#grid${winArr[i][1]}`).trigger('click');
      toggle = 1
    }
    console.log(toggle)
  }
  if (toggle === 0) {
    const randNum = Math.floor(Math.random() * remaining.length)
    const rand = remaining[randNum]
    $(`#grid${rand}`).trigger('click');
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
