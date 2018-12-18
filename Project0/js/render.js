let player = 1

//For all grids on click, check if player 1 or 2, push the cell id to players array. and add one to the count.
$('#grid1, #grid2, #grid3, #grid4, #grid5, #grid6, #grid7, #grid8, #grid9').on('click', function() {
  if (player === 1) {
    count++
    player1.push($(this).data('cell'))
    checkWin('player1')
  } else if (player === 5) {
    count++
    player2.push($(this).data('cell'))
    checkWin('player2')
  }
})

//Sets the correct O or X on the screen
$('#grid1, #grid2, #grid3, #grid4, #grid5, #grid6, #grid7, #grid8, #grid9').on('click', function() {
  if ($(this).hasClass("bgnoughts") === false && $(this).hasClass("bgcrosses") === false) {
    if (player === 1) {
      $(this).addClass("bgnoughts").html('<h1>O</h1>')
      player = 5;
    } else {
      $(this).addClass("bgcrosses").html('<h1>X</h1>')
      player = 1
    }
  }
})

//Sets animation for mouseOver
$('#grid1, #grid2, #grid3, #grid4, #grid5, #grid6, #grid7, #grid8, #grid9').mouseover(function() {
  if (!$(this).hasClass("bgnoughts") && !$(this).hasClass("bgcrosses"))
    $(this).addClass("animated flash")
}).mouseout(function() {
  $(this).removeClass("animated flash");
});

//Sets animation for win.
const win = function(player) {
    if (player === 'draw') {
    $('.grid').addClass('animated zoomOutUp')
    $('.draw').addClass('animated slideInUp')
    $('.draw').css('visibility', 'visible');
  } else if (player !== 'draw'){
    $('.grid').addClass('animated zoomOutUp')
    $('.' + player).addClass('animated slideInUp')
    $('.' + player).css('visibility', 'visible');
  }
}

//Resets gameboard
$('button').on('click', function() {
  $('#grid1, #grid2, #grid3, #grid4, #grid5, #grid6, #grid7, #grid8, #grid9').removeClass('bgnoughts').removeClass('bgcrosses').html('')
  $('.player1, .player2, .draw').removeClass('animated slideInUp').css('visibility', 'hidden')
  $('.grid').removeClass('animated zoomOutUp').addClass('animated rotateIn')
  player1 = []
  player2 = []
  player = 1
  count = 0
});
