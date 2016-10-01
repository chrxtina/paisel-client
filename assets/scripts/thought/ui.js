'use strict';

// const app = require('../app');

const clearInputField = () => {
  $('.input').val('');
};

const showThoughtsTemplate = require('../templates/thought-listing.handlebars');

const createThoughtSuccess = (data) => {
  clearInputField();
  console.log("Thought successfully created!", data);
};

const createThoughtFail = (data) => {
  clearInputField();
  console.log("Thought creation failed!", data);
};

const indexThoughtsSuccess = (thoughts) => {
  $('.content').html(showThoughtsTemplate(thoughts));
  console.log(thoughts);
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
  success,
  failure
};
