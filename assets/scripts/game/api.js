'use strict'
const config = require('./../config')
const store = require('./../store')

const startNewGame = function(formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const gameUpdate = function (gamePiece, gameIndex, gameWin) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': { // maybe cells
          'index': gameIndex,
          'value': gamePiece
        },
        'over': gameWin
      }
    }
  })
}

const gameIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  startNewGame: startNewGame,
  gameUpdate: gameUpdate,
  gameIndex: gameIndex
}
