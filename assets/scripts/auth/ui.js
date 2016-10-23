'use strict';

const app = require('../app');

$(window).load(function(){
  $('nav, .container').hide();
});

const displayMessage = () => {
  $('#message').fadeIn('fast').delay(3000).fadeOut('fast');
};

const clearInputField = () => {
  $('.input').val('');
};

const showSignButtons = () => {
  $('#sign-in-button').show();
  $('#sign-up-button').show();
};

const signUpSuccess = () => {
  $('#signUpModal').modal('hide');
  clearInputField();
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#signInModal').modal('hide');
  $('#sign-in-button').hide();
  $('#sign-up-button').hide();
  clearInputField();
  $('nav, .container').show();
};

const signFailure = () => {
  document.getElementById("message").innerHTML = 'Sorry! Please try again';
  displayMessage();
  showSignButtons();
  clearInputField();
};

const signOutSuccess = () => {
  app.user = null;
  document.getElementById("message").innerHTML = 'Logged out';
  displayMessage();
  showSignButtons();
  $('nav, .container').hide();
};

const changePasswordSuccess = () => {
  document.getElementById("message").innerHTML = 'Password successfully changed';
  $('#changePasswordModal').modal('hide');
  displayMessage();
  clearInputField();
};

const failure = (error) => {
  document.getElementById("message").innerHTML = 'Error: ' + error.statusText;
  displayMessage();
};

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  signFailure
};
