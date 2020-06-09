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

module.exports = {
  startNewGame: startNewGame
}
