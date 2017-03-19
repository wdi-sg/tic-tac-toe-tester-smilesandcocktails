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

    case (grid[0] && grid[1] && grid[2] === 1):
    case (grid[3] && grid[4] && grid[5] === 1):
    case (grid[6] && grid[7] && grid[8] === 1):
    case (grid[0] && grid[3] && grid[6] === 1):
    case (grid[1] && grid[4] && grid[7] === 1):
    case (grid[2] && grid[5] && grid[8] === 1):
    case (grid[0] && grid[4] && grid[8] === 1):
    case (grid[2] && grid[4] && grid[6] === 1):
      winner = 1
      return true
      break;

    case (grid[0] && grid[1] && grid[2] === 2):
    case (grid[3] && grid[4] && grid[5] === 2):
    case (grid[6] && grid[7] && grid[8] === 2):
    case (grid[0] && grid[3] && grid[6] === 2):
    case (grid[1] && grid[4] && grid[7] === 2):
    case (grid[2] && grid[5] && grid[8] === 2):
    case (grid[0] && grid[4] && grid[8] === 2):
    case (grid[2] && grid[4] && grid[6] === 2):
      winner = 2
      return true
      break;

    case (grid.length = 9):
      winner = 3
      return true
      break;

  default:
    return false
  }
}

function whoWon () {
  if (isGameOver.call(winner) == 1) {
    return 1
  }
  else if (isGameOver.call(winner) == 2) {
    return 2
  }
  else if (isGameOver.call(winner) == 3) {
    return 3
  }
  return 0
}

function playTurn(index) {
  if (grid[index] === 9) {
    if (turn % 2 !== 0) {
      grid[index] = playerOne
      console.log(grid)
    }
    else {
      grid[index] = playerTwo
      console.log(grid)
    }
    isGameOver()
    console.log("Game Over is " + isGameOver())
    turn++

    // isGameOver()
    return true
  }
  return false
}