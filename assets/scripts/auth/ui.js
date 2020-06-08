'use strict'

const store = require('./../store')

const createSuccess = function (responseData) {

  $('form').trigger('reset')

  $('#message').text('Sign up successfully!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
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
  // messaging:
  $('#message').text('Sign Out Successful!')
  $('#message').show()
  $('#message').removeClass().addClass('success')
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign Out Failed :(')
  $('#message').show().removeClass().addClass('failure')
}

module.exports = {
  createSuccess: createSuccess,
  createFailure: createFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure
}
