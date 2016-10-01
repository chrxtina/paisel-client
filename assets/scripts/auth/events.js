'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

$(window).load(function(){
  $('nav, .container').hide();
});

const showSignInModal = function (){
  $('#signInModal').modal('show');
};

const showSignUpModal = function (){
  $('#signUpModal').modal('show');
};

const onSignUp = function (event) {
  event.preventDefault();
  $('#signUpModal').modal('hide');
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signFailure);
};

const onSignIn = function (event) {
  event.preventDefault();
  $('#signInModal').modal('hide');
  $('#sign-in-button').hide();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signFailure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  $('#changePasswordModal').modal('hide');
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#sign-in-button').on('click', showSignInModal);
  $('#sign-up-button').on('click', showSignUpModal);
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers,
};
