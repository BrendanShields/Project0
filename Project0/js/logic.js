const wins = {
  //col        1  2  3
  row: [0, 0, 0],
  //row        1  2  3
  col: [0, 0, 0],
  //diag       1  2  3
  diag: [0, 0, 0],
}
const win = function(row, column, diag = 0) {
  for (i = 0; i < 3; i++) {
    if (+wins.row[i] === 3 || +wins.col[i] === 3 || +wins.diag[i] === 3) {
      $('.grid').addClass('animated zoomOutUp')
      $('.player1').addClass('animated slideInUp')
      $(".player1").css('visibility', 'visible');
      $('.x').addClass('animated tada delay-2s')
    } else if (+wins.row[i] === 15 || +wins.col[i] === 15 || +wins.diag[i] === 15) {
      $('.grid').addClass('animated zoomOutUp')
      $('.player2').addClass('animated slideInUp')
      $(".player2").css('visibility', 'visible');
      $('.x').addClass('animated tada delay-2s')
    }
  }
}
