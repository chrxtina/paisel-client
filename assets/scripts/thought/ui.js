'use strict';

// const app = require('../app');

const clearInputField = () => {
  $('.input').val('');
};

const indexThoughtsTemplate = require('../templates/index-thoughts-listing.handlebars');
const myThoughtsTemplate = require('../templates/my-thoughts-listing.handlebars');

const createThoughtSuccess = (data) => {
  clearInputField();
  console.log("Thought successfully created!", data);
};

const createThoughtFail = (data) => {
  clearInputField();
  console.log("Thought creation failed!", data);
};

const indexThoughtsSuccess = (thoughts) => {
  $('.content-display').html(indexThoughtsTemplate(thoughts));
  console.log(thoughts);
};

const myThoughtsSuccess = (thoughts) => {
  $('.content-display').html(myThoughtsTemplate(thoughts));
  console.log(thoughts);
};

const updateThoughtSuccess = () => {
  clearInputField();
  $('#updateThoughtModal').modal('hide');
};

const success = (data) => {
  clearInputField();
  console.log("SUCCESS!", data);
};

const failure = (data) => {
  clearInputField();
  console.log("OOPS!", data);
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
