///////////// Jquery Logic

let player = 1;
let computer = false;
//For all grids on click, check if player 1 or 2, push the cell id to players array. and add one to the count.
$('#grid1, #grid2, #grid3, #grid4, #grid5, #grid6, #grid7, #grid8, #grid9').on('click', function() {
  if (player === 1) {
    count++
    $(".counter").text(count)
    spliceFunc($(this).data('cell'))
    player1.push($(this).data('cell'))
    checkWin('player1')

  } else if (player === 5) {
    spliceFunc($(this).data('cell'))
    count++
    $(".counter").text(count)
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











////////Animations and Resets
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
    $(".counter").addClass('animated zoomOutUp')
    $('.draw').addClass('animated slideInUp')
    $('.draw').css('visibility', 'visible');
  } else if (player !== 'draw'){
    $('.grid').addClass('animated zoomOutUp')
    $(".counter").addClass('animated zoomOutUp')
    $('.' + player).addClass('animated slideInUp')
    $('.' + player).css('visibility', 'visible');
  }
}

//Resets gameboard
$('button').on('click', function() {
  $('#grid1, #grid2, #grid3, #grid4, #grid5, #grid6, #grid7, #grid8, #grid9').removeClass('bgnoughts').removeClass('bgcrosses').html('')
  $('.player1, .player2, .draw').removeClass('animated slideInUp').css('visibility', 'hidden')
  $('.pvporcvp').removeClass('animated zoomOutUp').addClass('animated rotateIn')
  $('.pvporcvp').css('visibility', 'visible')
  remaining = [1,2,3,4,5,6,7,8,9]
  player1 = []
  player2 = []
  player = 1
  count = 0
  $(".counter").text(count)
});

// start screen
$('.comp').on('click', function() {
  console.log('test')
  $('.grid').css('visibility', 'hidden')
  $('.grid').removeClass('animated zoomOutUp')
  $('.pvporcvp').css('visibility', 'hidden')
  $('.grid').css('visibility', 'visible')
  $('.grid').addClass('animated rotateIn')
  $('.counter').removeClass('animated','zoomOutUp')
  $('.counter').removeClass('animated rotateIn')
  $('.counter').addClass('animated rotateIn')
  $('.counter').css('visibility', 'visible')
  computer = true;
  compStart()
  count = 0
});
$('.pvp').on('click', function() {
  console.log('test')
  $('.grid').css('visibility', 'hidden')
  $('.grid').removeClass('animated zoomOutUp')
  $('.pvporcvp').css('visibility', 'hidden')
  $('.grid').css('visibility', 'visible')
  $('.grid').addClass('animated rotateIn')
  $('.counter').removeClass('animated','zoomOutUp')
  $('.counter').removeClass('animated rotateIn')
  $('.counter').addClass('animated rotateIn')
  $('.counter').css('visibility', 'visible')
  computer = false;
  count = 0

});

// if draw at same time player wins don't show draw screen.
