'use strict';

// const app = require('../app');

const clearInputField = () => {
  $('.input').val('');
};

const indexThoughtsTemplate = require('../templates/index-thoughts-listing.handlebars');
const myThoughtsTemplate = require('../templates/my-thoughts-listing.handlebars');

const createThoughtSuccess = () => {
  clearInputField();
};

const createThoughtFail = () => {
  clearInputField();
};

const indexThoughtsSuccess = (thoughts) => {
  $('.content-display').html(indexThoughtsTemplate(thoughts));
};

const myThoughtsSuccess = (thoughts) => {
  $('.content-display').html(myThoughtsTemplate(thoughts));
};

const updateThoughtSuccess = () => {
  clearInputField();
  $('#updateThoughtModal').modal('hide');
};

const success = () => {
  clearInputField();
};

const failure = () => {
  clearInputField();
};


module.exports = {
  createThoughtSuccess,
  createThoughtFail,
  indexThoughtsSuccess,
  myThoughtsSuccess,
  updateThoughtSuccess,
  success,
  failure
};
