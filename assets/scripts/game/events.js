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
let numTurns = 0         // Turn count
let gameWin = false   // Boolean if game has been won
let gameModel = ['', '', '', '', '', '', '', '', '']    // Local game representation
let winner = ''            // Variable to assign winner O or X

const onGameUpdate = function (event) {
  // Checks if tile is free
  if ($(event.target).hasClass('free')) {
    $(event.target).text(currentMove)
    $(event.target).removeClass('free').addClass('taken')

    // store.cells[$(event.target).data('cell-index')] = currentMove
    // console.log($(event.target).data('cell-index')) // steps to find index of

    // Assign parameters to be passed to api
    gamePiece = currentMove
    gameIndex = $(event.target).data('cell-index')

    // Creating local model of the game to determine winner
    gameModel[$(event.target).data('cell-index')] = currentMove

    // Check for winner
    if (gameModel[0] !== '' && gameModel[0] === gameModel[1] && gameModel[0] === gameModel[2]) {
      gameWin = true
      winner = currentMove
      // block unused tiles
      $('.content').removeClass('free').addClass('taken')

      // Update API
      api.gameUpdate(gamePiece, gameIndex, gameWin)
        .then(ui.gameUpdateSuccess)
        .catch(ui.gameUpdateFailure)
    } else if (gameModel[3] !== '' && gameModel[3] === gameModel[4] && gameModel[3] === gameModel[5]) {
      gameWin = true
      winner = currentMove
      // block unused tiles
      $('.content').removeClass('free').addClass('taken')

      // Update API
      api.gameUpdate(gamePiece, gameIndex, gameWin)
        .then(ui.gameUpdateSuccess)
        .catch(ui.gameUpdateFailure)
    } else if (gameModel[6] !== '' && gameModel[6] === gameModel[7] && gameModel[6] === gameModel[8]) {
      gameWin = true
      winner = currentMove
      // block unused tiles
      $('.content').removeClass('free').addClass('taken')

      // Update API
      api.gameUpdate(gamePiece, gameIndex, gameWin)
        .then(ui.gameUpdateSuccess)
        .catch(ui.gameUpdateFailure)
    } else if (gameModel[0] !== '' && gameModel[0] === gameModel[3] && gameModel[0] === gameModel[6]) {
      gameWin = true
      winner = currentMove
      // block unused tiles
      $('.content').removeClass('free').addClass('taken')

      // Update API
      api.gameUpdate(gamePiece, gameIndex, gameWin)
        .then(ui.gameUpdateSuccess)
        .catch(ui.gameUpdateFailure)
    } else if (gameModel[1] !== '' && gameModel[1] === gameModel[4] && gameModel[1] === gameModel[7]) {
      gameWin = true
      winner = currentMove
      // block unused tiles
      $('.content').removeClass('free').addClass('taken')

      // Update API
      api.gameUpdate(gamePiece, gameIndex, gameWin)
        .then(ui.gameUpdateSuccess)
        .catch(ui.gameUpdateFailure)
    } else if (gameModel[2] !== '' && gameModel[2] === gameModel[5] && gameModel[2] === gameModel[8]) {
      gameWin = true
      winner = currentMove
      // block unused tiles
      $('.content').removeClass('free').addClass('taken')

      // Update API
      api.gameUpdate(gamePiece, gameIndex, gameWin)
        .then(ui.gameUpdateSuccess)
        .catch(ui.gameUpdateFailure)
    } else if (gameModel[0] !== '' && gameModel[0] === gameModel[4] && gameModel[0] === gameModel[8]) {
      gameWin = true
      winner = currentMove
      // block unused tiles
      $('.content').removeClass('free').addClass('taken')

      // Update API
      api.gameUpdate(gamePiece, gameIndex, gameWin)
        .then(ui.gameUpdateSuccess)
        .catch(ui.gameUpdateFailure)
    } else if (gameModel[2] !== '' && gameModel[2] === gameModel[4] && gameModel[2] === gameModel[6]) {
      gameWin = true
      winner = currentMove
      // block unused tiles
      $('.content').removeClass('free').addClass('taken')

      // Update API
      api.gameUpdate(gamePiece, gameIndex, gameWin)
        .then(ui.gameUpdateSuccess)
        .catch(ui.gameUpdateFailure)
    } else {
    // Alternate Game Piece
      if (currentMove === 'X') {
        currentMove = 'O'
      } else {
        currentMove = 'X'
      }
      // Count number of turns
      numTurns++
      // If number of turns reaches 9, it's a draw
      if (numTurns <= 8) {
      // Messaging for next move
        $('#player-turn').text(currentMove + ' Is the next turn')
        // Update API
        api.gameUpdate(gamePiece, gameIndex, gameWin)
          .then(ui.gameUpdateSuccess)
          .catch(ui.gameUpdateFailure)
      } else {
        $('#player-turn').text("It's a Draw!")
      }
    }
    console.log(gameModel, 'game model')
    console.log(gameWin, 'game win')
}
  // api.gameUpdate(gamePiece, gameIndex, gameWin)
  //   .then(ui.gameUpdateSuccess)
  //   .catch(ui.gameUpdateFailure)
}

module.exports = {
  onStartNewGame: onStartNewGame,
  onGameUpdate: onGameUpdate
}
