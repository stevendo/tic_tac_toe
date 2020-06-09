'use strict'
const config = require('./../config')
const store = require('./../store')

const startNewGame = function(formData) {
  return $.ajax({
    method: 'post',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const gameUpdate = function(formData) {
  return $.ajax({
    method: 'update',
    url: config.apiUrl + '/games' + store.game._id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': formData,
          'value': formData
        },
        'over': false
      }
    }
  })
}

module.exports = {
  startNewGame: startNewGame,
  gameUpdate: gameUpdate
}
