'use strict'

const store = require('./../store')



const startNewGameSuccess = function (responseData) {
  $('form').trigger('reset')

  $('#message').text('New Game Started!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
  $('#game-board').show()
}

const startNewGameFailure = function () {
  $('form').trigger('reset')
  $('#message').text('New Game Failed')
  $('#message').show().removeClass().addClass('failure')
}

const clickTile = function () {
  $(event.target).text('x')

}

module.exports = {
  startNewGameSuccess: startNewGameSuccess,
  startNewGameFailure: startNewGameFailure,
  clickTile: clickTile
}
