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

let currentMove = 'X'

const onGameUpdate = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  if ($(event.target).hasClass('free')) {
    $(event.target).text(currentMove)
    $(event.target).removeClass('free').addClass('taken')

    if (currentMove === 'X') {
      currentMove = 'O'
    } else {
      currentMove = 'X'
    }
    return
  } else {
    return
  }

  api.gameUpdate(data)
    .then(ui.gameUpdateSuccess)
    .catch(ui.gameUpdateFailure)
}

module.exports = {
  onStartNewGame: onStartNewGame,
  onGameUpdate: onGameUpdate
}
