'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields.js')

const onStartNewGame = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.startNewGame(data)
    .then(ui.startNewGameSuccess)
    .catch(ui.startNewGameFailure)
}

module.exports = {
  onStartNewGame: onStartNewGame
}
