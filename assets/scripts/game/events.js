'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('./../store')


const getFormFields = require('../../../lib/get-form-fields.js')

const onStartNewGame = function (event) {
  event.preventDefault()
  // const form = event.target
  // const data = getFormFields(form)
  api.startNewGame()
    .then(ui.startNewGameSuccess)
    .catch(ui.startNewGameFailure)
}

let currentMove = 'X' // Tracks current move
let gamePiece         // Parameter for game move
let gameIndex         // Parameter for game tile
let numTurns          // Turn count

const onGameUpdate = function (event) {
  // Checks if tile is free
  if ($(event.target).hasClass('free')) {
    $(event.target).text(currentMove)
    $(event.target).removeClass('free').addClass('taken')

    // store.cells[$(event.target).data('cell-index')] = currentMove
    // console.log($(event.target).data('cell-index')) // steps to find index of

    // Parameters to be passed to api
    gamePiece = currentMove
    gameIndex = $(event.target).data('cell-index')

    // Alternate Game Piece
    if (currentMove === 'X') {
      currentMove = 'O'
    } else {
      currentMove = 'X'
    }

    // Messaging for next move
    $('#player-turn').text(currentMove + ' Is the next turn')
  } else {
  }

  api.gameUpdate(gamePiece, gameIndex)
    .then(ui.gameUpdateSuccess)
    .catch(ui.gameUpdateFailure)
}

module.exports = {
  onStartNewGame: onStartNewGame,
  onGameUpdate: onGameUpdate
}
