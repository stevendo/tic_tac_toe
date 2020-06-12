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
  $('#start-new-game').on('click', gameEvents.onStartNewGame)
  // $('[data-cell-index=0]').on('click', gameEvents.onGameUpdate)
  // $('[data-cell-index=1]').on('click', gameEvents.onGameUpdate)
  // $('[data-cell-index=2]').on('click', gameEvents.onGameUpdate)
  // $('[data-cell-index=3]').on('click', gameEvents.onGameUpdate)
  // $('[data-cell-index=4]').on('click', gameEvents.onGameUpdate)
  // $('[data-cell-index=5]').on('click', gameEvents.onGameUpdate)
  // $('[data-cell-index=6]').on('click', gameEvents.onGameUpdate)
  // $('[data-cell-index=7]').on('click', gameEvents.onGameUpdate)
  // $('[data-cell-index=8]').on('click', gameEvents.onGameUpdate)
  $('.content').on('click', gameEvents.onGameUpdate)
})
