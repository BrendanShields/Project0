/// Checks WinArr for move, else returns random ////////////////////////////////
const logic = function() {
    let t = 0
  const w  = compWin[i];
  const p1 = p1;
  const p2 = p2;

  for (i = 0; i < compWin.length; i++) {

    if (t === 0 && p1.includes(w[0]) && p1.includes(w[1]) && !p1.includes(w[2]) && !p2.includes(w[2])) {
      $(`#grid${w[2]}`).trigger('click');
      t++

    } else if (t === 0 && p1.includes(w[1]) && p1.includes(w[2]) && !p1.includes(w[0]) && !p2.includes(w[0])) {
      $(`#grid${w[0]}`).trigger('click');
      t++

    } else if (t === 0 && p1.includes(w[2]) && p1.includes(w[0]) && !p1.includes(w[1]) && !p2.includes(w[1])) {
      $(`#grid${w[1]}`).trigger('click');
      t++

    } else if (t === 0 && p2.includes(w[0]) && p2.includes(w[1]) && !p2.includes(w[2]) && !p1.includes(w[2])) {
      $(`#grid${w[2]}`).trigger('click');
      t++

    } else if (t === 0 && p2.includes(w[1]) && p2.includes(w[2]) && !p2.includes(w[0]) && !p1.includes(w[0])) {
      $(`#grid${w[0]}`).trigger('click');
      t++

    } else if (t === 0 && p2.includes(w[2]) && p2.includes(w[0]) && !p2.includes(w[1]) && !p1.includes(w[1])) {
      $(`#grid${w[1]}`).trigger('click');
      t++
    }
  }

  if (t === 0) {
    const randNum = Math.floor(Math.random() * remaining.length)
    const rand = remaining[randNum]
    $(`#grid${rand}`).trigger('click');
  }
}
/// Second set of outcomes (untested) //////////////////////////////////////////

compWin = [[1, 2, 3],[1, 3, 2],[3, 2, 1],[1, 5, 9],[1, 9, 5],
           [5, 9, 1],[1, 4, 7],[1, 7, 4],[4, 7, 1],[4, 5, 6],
           [4, 6, 5],[5, 6, 4],[7, 8, 9],[7, 9, 8],[8, 9, 7],
           [5, 2, 8],[5, 8, 2],[2, 8, 5],[6, 9, 3],[6, 3, 9],
           [9, 3, 6],[5, 7, 3],[5, 3, 5],[7, 3, 7]]
