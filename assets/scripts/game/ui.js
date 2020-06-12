'use strict'

const store = require('./../store')

const startNewGameSuccess = function (responseData) {
  $('form').trigger('reset')

  $('#message').text('New Game Started!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
  $('#game-board').show()
  $('#start-new-game')
  console.log(responseData, 'is this a new game')
  $('.content').text('')
  $('.content').removeClass('taken').addClass('free')
  $('#status-message').text('Get Ready! Tic Tac Toe!!!')
  store.game = responseData.game
}

const startNewGameFailure = function () {
  $('form').trigger('reset')
  $('#message').text('New Game Failed')
  $('#message').show().removeClass().addClass('failure')
}

// const clickTile = function () {
//   $(event.target).text('x')
// }

const gameUpdateSuccess = function (responseData) {
  $('form').trigger('reset')

  $('#message').text('Game Updated!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
  console.log(responseData, 'What happening when updated')
}

const gameUpdateFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Game not Updated')
  $('#message').show().removeClass().addClass('failure')
}

module.exports = {
  startNewGameSuccess: startNewGameSuccess,
  startNewGameFailure: startNewGameFailure,
  // clickTile: clickTile,
  gameUpdateSuccess: gameUpdateSuccess,
  gameUpdateFailure: gameUpdateFailure
}
