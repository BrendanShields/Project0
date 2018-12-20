// start screen ////////////////////////////////////////////////////////////////

const startScreen = function(toggle) {

  $('.grid, .pvporcvp, .easyorhard').css('visibility', 'hidden')
  $('.grid, .counter').removeClass('animated zoomOutUp').css('visibility', 'visible')
  $('.grid').addClass('animated rotateIn')

}

const easyHard = function() {

  $('.grid, .pvporcvp').css('visibility', 'hidden')
  $('.easyorhard').css('visibility', 'visible')

}

$('.comp').on('click', function() {

  computer = true
  easyHard()

});

$('.pvp').on('click', function() {

  startScreen()

});

$('.easy').on('click', function() {

  easy = true;
  startScreen()

});

$('.hard').on('click', function() {

  easy = false;
  logic()
  startScreen()

});


// warn re multiple clicks /////////////////////////////////////////////////////
$(allGrids).on('click', function() {
  if ($(this).hasClass("bgnoughts") && !$(this).hasClass("bgcrosses")) {
    $('.noughty, .cross').removeClass('animated flipOutX delay-2s')
    $('.cross').css('visibility', 'hidden')
    $('.noughty').css('visibility', 'visible')
    $('.noughty').addClass('animated flipOutX delay-2s')


  } else if (!$(this).hasClass("bgnoughts") && $(this).hasClass("bgcrosses")) {
    $('.noughty, .cross').removeClass('animated flipOutX delay-2s')
    $('.noughty').css('visibility', 'hidden')
    $('.cross').css('visibility', 'visible')
    $('.cross').addClass('animated flipOutX delay-2s')
  }
})

///////////// Jquery Logic COMP V P /////////////////////////////////////////////////
$(allGrids).on('click', function() {

  if (!$(this).hasClass("bgnoughts") && !$(this).hasClass("bgcrosses")) {

    count++

    $(".counter").text(count)
    spliceFunc($(this).data('cell'))

    if (player === 1) {

      player1.push($(this).data('cell'));
      $(this).addClass("bgnoughts").html('<h1>O</h1>');
      player = 5;
      checkWin('player1');

    if (computer && easy && remaining.length > 0) {

        logic()
      }

    } else if (player === 5) {

      player2.push($(this).data('cell'));
      $(this).addClass("bgcrosses").html('<h1>X</h1>');
      player = 1;
      checkWin('player2');

    if (computer && !easy && remaining.length > 0)
        logic()
    }
  }
})

//Sets animation for mouseOver//////////////////////////////////////////////////
$(allGrids).mouseover(function() {

  if (!$(this).hasClass("bgnoughts") && !$(this).hasClass("bgcrosses"))
  $(this).addClass("animated flash");

}).mouseout(function() {

  $(this).removeClass("animated flash");

});

//Win animation ////////////////////////////////////////////////////////////////

const win = function(player) {

  $('.grid, .counter').addClass('animated zoomOutUp')

  if (player === 'draw') {
    $('.draw').addClass('animated slideInUp').css('visibility', 'visible')

  } else if (player !== 'draw' && !computer) {
    $('.' + player).addClass('animated slideInUp').css('visibility', 'visible')

  } else if (player !== 'draw' && computer) {
    $('.computer').addClass('animated slideInUp').css('visibility', 'visible');
  }
}

//Reset/////////////////////////////////////////////////////////////////////////

$('.reset').on('click', function() {

  $(allGrids).removeClass('bgnoughts').removeClass('bgcrosses').html('').css('background-color', 'transparent');
  $('.player1, .player2, .draw, .computer').removeClass('animated slideInUp').css('visibility', 'hidden');
  $('.pvporcvp').removeClass('animated zoomOutUp').addClass('animated rotateIn');
  $('.pvporcvp').css('visibility', 'visible');
  remaining = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  player1 = [];
  player2 = [];
  player = 1;
  computer = false;
  count = 0;
  easy = true;
  winner = 0;
  resultArr = [];
  $(".counter").text(count);

});







let colors = $('#colors')[0];
let client = {
  x: 0,
  y: 0,
};
colors.addEventListener('mousemove', (e) => {
  client = {
    x: e.clientX / colors.clientWidth,
    y: e.clientY / colors.clientHeight,
  }
});
let randomColor = (t, x, y) => {
  let r = Math.floor(255 * (Math.sin(t / 640) + 1) / 2);
  let g = Math.floor(255 * Math.sin(x));
  let b = Math.floor(255 * Math.sin(y));
  let color = `linear-gradient(217deg, rgba(${r},0,0,.8), rgba(${r},0,0,0) 70.71%), linear-gradient(127deg, rgba(0,${g},0,.8), rgba(0,${g},0,0) 70.71%), linear-gradient(336deg, rgba(0,0,${b},.8), rgba(0,0,${b},0) 70.71%);`;
  return color;
}

function repeat(t) {
  let color = randomColor(t, client.x, client.y);
  $('#colors').attr('style', `background: ${color}`);
  requestAnimationFrame(repeat);
}
requestAnimationFrame(repeat);
