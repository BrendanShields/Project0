/// Checks WinArr for move, else returns random ////////////////////////////////
const logic = function() {
audio2.play()
// Toggle gets set to 1 if there are no moves in the preset;

  let toggle = 0


// iterates through the computers possible win array if match play match,
// else ret random play.

  for (i = 0; i < compWin.length; i++) {
    if (toggle === 0 && player1.includes(compWin[i][0]) && player1.includes(compWin[i][1]) && !player1.includes(compWin[i][2]) && !player2.includes(compWin[i][2])) {
      $(`#grid${compWin[i][2]}`).trigger('click');
      toggle++
      winner === 1

    } else if (toggle === 0 && player1.includes(compWin[i][1]) && player1.includes(compWin[i][2]) && !player1.includes(compWin[i][0]) && !player2.includes(compWin[i][0])) {
      $(`#grid${compWin[i][0]}`).trigger('click');
      toggle++
      winner === 1

    } else if (toggle === 0 && player1.includes(compWin[i][2]) && player1.includes(compWin[i][0]) && !player1.includes(compWin[i][1]) && !player2.includes(compWin[i][1])) {
      $(`#grid${compWin[i][1]}`).trigger('click');
      toggle++
      winner === 1

    } else if (toggle === 0 && player2.includes(compWin[i][0]) && player2.includes(compWin[i][1]) && !player2.includes(compWin[i][2]) && !player1.includes(compWin[i][2])) {
      $(`#grid${compWin[i][2]}`).trigger('click');
      toggle++

    } else if (toggle === 0 && player2.includes(compWin[i][1]) && player2.includes(compWin[i][2]) && !player2.includes(compWin[i][0]) && !player1.includes(compWin[i][0])) {
      $(`#grid${compWin[i][0]}`).trigger('click');
      toggle++

    } else if (toggle === 0 && player2.includes(compWin[i][2]) && player2.includes(compWin[i][0]) && !player2.includes(compWin[i][1]) && !player1.includes(compWin[i][1])) {
      $(`#grid${compWin[i][1]}`).trigger('click');
      toggle++

    }
  }
  if (toggle === 0) {
    const randNum = Math.floor(Math.random() * remaining.length)
    const rand = remaining[randNum]
    $(`#grid${rand}`).trigger('click');
  }
}

const compWin = [[1, 2, 3],[1, 3, 2],[3, 2, 1],[1, 5, 9],[1, 9, 5],
           [5, 9, 1],[1, 4, 7],[1, 7, 4],[4, 7, 1],[4, 5, 6],
           [4, 6, 5],[5, 6, 4],[7, 8, 9],[7, 9, 8],[8, 9, 7],
           [5, 2, 8],[5, 8, 2],[2, 8, 5],[6, 9, 3],[6, 3, 9],
           [9, 3, 6],[5, 7, 3],[5, 3, 5],[7, 3, 7]]
