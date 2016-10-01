'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onCreateThought = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createThought(data)
    .done(ui.createThoughtSuccess)
    .fail(ui.createThoughtFail);
  api.indexThoughts()
    .done(ui.indexThoughtsSuccess)
    .fail(ui.failure);
};

const onIndexThoughts = function (event) {
  event.preventDefault();
  api.indexThoughts()
    .done(ui.indexThoughtsSuccess)
    .fail(ui.failure);
};

const onShowThought = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.showThought(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onEditThought = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.editThought(data)
    .done(ui.success)
    .fail(ui.failure);
  api.indexThoughts()
    .done(ui.indexThoughtsSuccess)
    .fail(ui.failure);
};

const onDeleteThought = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.deleteThought(data)
    .done(ui.success)
    .fail(ui.failure);
  api.indexThoughts()
    .done(ui.indexThoughtsSuccess)
    .fail(ui.failure);
};


const addHandlers = () => {
  $('#create-thought').on('submit', onCreateThought);
  $('#index-thoughts').on('submit', onIndexThoughts);
  $('#show-thought').on('submit', onShowThought);
  $('#edit-thought').on('submit', onEditThought);
  $('#delete-thought').on('submit', onDeleteThought);
};

module.exports = {
  addHandlers,
};
