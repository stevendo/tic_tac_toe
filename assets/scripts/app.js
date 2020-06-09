'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const gameUI = require('./game/ui')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#game-board').hide()
  $('#start-new-game').on('click', gameEvents.onStartNewGame)
  $('#index-1').on('click', gameEvents.onGameUpdate)
  $('#index-2').on('click', gameEvents.onGameUpdate)
  $('#index-3').on('click', gameEvents.onGameUpdate)
  $('#index-4').on('click', gameEvents.onGameUpdate)
  $('#index-5').on('click', gameEvents.onGameUpdate)
  $('#index-6').on('click', gameEvents.onGameUpdate)
  $('#index-7').on('click', gameEvents.onGameUpdate)
  $('#index-8').on('click', gameEvents.onGameUpdate)
  $('#index-9').on('click', gameEvents.onGameUpdate)
})
