'use strict'

const store = require('./../store')

$('#sign-out-banner').hide()
$('#sign-out').hide()
$('#start-new-game-banner').hide()
$('#start-new-game').hide()
$('#change-password-banner').hide()
$('#change-password').hide()
$('#game-board').hide()
$('#game-index-banner').hide()
$('#game-index').hide()

const createSuccess = function (responseData) {
  $('form').trigger('reset')

  $('#message').text('Sign up successfully!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
  $('#status-message').text('Hello!')
}

const createFailure = function () {
  $('form').trigger('reset')

  $('#message').text('Sign Up Failed')
  $('#message').show().removeClass().addClass('failure')
}

const signInSuccess = function (responseData) {
  $('form').trigger('reset')
  $('#message').text('Sign in successfully!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
  store.user = responseData.user
  $('#sign-up').hide()
  $('#sign-up-banner').hide()
  $('#sign-in').hide()
  $('#sign-in-banner').hide()
  $('#sign-out-banner').show()
  $('#sign-out').show()
  $('#change-password-banner').show()
  $('#change-password').show()
  $('#start-new-game-banner').show()
  $('#start-new-game').show()
  $('#status-message').text('Hello!')
  $('#game-index-banner').show()
  $('#game-index').show()
}

const signInFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign in Failed :(')
  $('#message').show().removeClass().addClass('failure')
}

const changePasswordSuccess = function (responseData) {
  $('form').trigger('reset')

  $('#message').text('Change Password Successful!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
}

const changePasswordFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Change Password Failed :(')
  $('#message').show().removeClass().addClass('failure')
}

const signOutSuccess = function (responseData) {
  $('form').trigger('reset')

  $('#message').text('Sign Out Successful!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
  $('#game-board').hide()
  $('#sign-up').show()
  $('#sign-up-banner').show()
  $('#sign-in').show()
  $('#sign-in-banner').show()
  $('#sign-out-banner').hide()
  $('#sign-out').hide()
  $('#start-new-game-banner').hide()
  $('#start-new-game').hide()
  $('#change-password-banner').hide()
  $('#change-password').hide()
  $('#status-message').text('Bye!')
  // store.user = null
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign Out Failed :(')
  $('#message').show().removeClass().addClass('failure')
}

// const startNewGameSuccess = function (responseData) {
//   $('form').trigger('reset')
//
//   $('#message').text('New Game Started!')
//   $('#message').show()
//   $('#message').removeClass().addClass('success')
// }

// const startNewGameFailure = function () {
//   $('form').trigger('reset')
//   $('#message').text('New Game Failed')
//   $('#message').show().removeClass().addClass('failure')
// }

module.exports = {
  createSuccess: createSuccess,
  createFailure: createFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure
  // startNewGameSuccess: startNewGameSuccess,
  // startNewGameFailure: startNewGameFailure
}
