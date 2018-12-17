let player = 1

  const grid = {
    1: $('#grid1').on('click', function() {
      wins.row[0] += player;
      wins.col[0] += player;
      wins.diag[0] += player
      win()
    }),
    2: $('#grid2').on('click', function() {
      wins.row[0] += player;
      wins.col[1] += player;
      win()
    }),
    3: $('#grid3').on('click', function() {
      wins.row[0] += player;
      wins.col[2] += player;
      wins.diag[1] += player
      win()
    }),
    4: $('#grid4').on('click', function() {
      wins.row[1] += player;
      wins.col[0] += player;
      win()
    }),
    5: $('#grid5').on('click', function() {
      wins.row[1] += player;
      wins.col[1] += player;
      wins.diag[0] += player;
      wins.diag[1] += player;
      win()
    }),
    6: $('#grid6').on('click', function() {
      wins.row[1] += player;
      wins.col[2] += player;
      win()
    }),
    7: $('#grid7').on('click', function() {
      wins.row[2] += player;
      wins.col[0] += player;
      wins.diag[1] += player;
      win()
    }),
    8: $('#grid8').on('click', function() {
      wins.row[2] += player;
      wins.col[1] += player;
      win()
    }),
    9: $('#grid9').on('click', function() {
      wins.row[2] += player;
      wins.col[2] += player;
      wins.diag[0] += player;
      win()
    })
  }

  $('#grid1, #grid2, #grid3, #grid4, #grid5, #grid6, #grid7, #grid8, #grid9').on('click', function() {
  console.log(this)
    if (player === 1) {
      $(this).css("background-color", "grey")
      player = 5;
    } else {
      $(this).css("background-color", "pink")
      player = 1
    }
  })
