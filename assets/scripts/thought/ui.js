'use strict';

// const app = require('../app');
const indexThoughtsTemplate = require('../templates/index-thoughts-listing.handlebars');
const myThoughtsTemplate = require('../templates/my-thoughts-listing.handlebars');

const onTogglePollForm = () => {
  $(".poll-form").slideToggle("slow");
};

const clearInputField = () => {
  $('.input').val('');
};

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

const setTextareaContent = (event) => {
  event.preventDefault();
  let content = $(event.target).attr("data-thought-content");
  $('.content-textarea').val(content);
};

const addHandlers = () => {
  $('#add-poll-button').on('click', onTogglePollForm);
  $('.content-display').on('click','.update-thought',setTextareaContent);
};

module.exports = {
  addHandlers,
  createThoughtSuccess,
  createThoughtFail,
  indexThoughtsSuccess,
  myThoughtsSuccess,
  updateThoughtSuccess,
  success,
  failure
};
