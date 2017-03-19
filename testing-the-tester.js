var grid = [9,9,9,9,9,9,9,9,9]
var playerOne = 1
var playerTwo = 2
var playerDraw = 3
var turn = 1
var winner = 0


function restart () {
  grid = [9,9,9,9,9,9,9,9,9]
  turn = 1
}

function isGameOver() {
  switch(true) {

    case (grid[0] === 1 && grid[1] === 1 && grid[2] === 1):
    case (grid[3] === 1 && grid[4] === 1 && grid[5] === 1):
    case (grid[6] === 1 && grid[7] === 1 && grid[8] === 1):
    case (grid[0] === 1 && grid[3] === 1 && grid[6] === 1):
    case (grid[1] === 1 && grid[4] === 1 && grid[7] === 1):
    case (grid[2] === 1 && grid[5] === 1 && grid[8] === 1):
    case (grid[0] === 1 && grid[4] === 1 && grid[8] === 1):
    case (grid[2] === 1 && grid[4] === 1 && grid[6] === 1):
      winner = 1
      return true
      break;

    case (grid[0] === 2 && grid[1] === 2 && grid[2] === 2):
    case (grid[3] === 2 && grid[4] === 2 && grid[5] === 2):
    case (grid[6] === 2 && grid[7] === 2 && grid[8] === 2):
    case (grid[0] === 2 && grid[3] === 2 && grid[6] === 2):
    case (grid[1] === 2 && grid[4] === 2 && grid[7] === 2):
    case (grid[2] === 2 && grid[5] === 2 && grid[8] === 2):
    case (grid[0] === 2 && grid[4] === 2 && grid[8] === 2):
    case (grid[2] === 2 && grid[4] === 2 && grid[6] === 2):
      winner = 2
      return true
      break;

    case (turn === 10):
      winner = 3
      return true
      break;

  default:
    return false
  }
}

function whoWon () {
  // console.log(winner)
  if (winner === 1) {
    winner = 0
    return 1
  }
  else if (winner === 2) {
    winner = 0
    return 2
  }
  else if (winner === 3) {
    winner = 0
    return 3
  }
  else {
  return 0
  }
}

function playTurn(index) {
  if (grid[index] === 9) {
    if (turn % 2 !== 0) {
      grid[index] = playerOne
    }
    else {
      grid[index] = playerTwo
    }
    turn++
    isGameOver()
    return true
  }
  return false
}
