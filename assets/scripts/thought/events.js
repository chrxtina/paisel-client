'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onIndexThoughts = function (event) {
  event.preventDefault();
  api.indexThoughts()
    .done(ui.indexThoughtsSuccess)
    .fail(ui.failure);
};

const onCreateThought = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createThought(data)
    .done( function(){
      ui.createThoughtSuccess();
      onIndexThoughts(event);
    })
    .fail(ui.createThoughtFail);
};

const onMyThoughts = function (event) {
  event.preventDefault();
  api.myThoughts()
    .done(ui.myThoughtsSuccess)
    .fail(ui.failure);
};

const onShowThought = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.showThought(data)
    .done(ui.success)
    .fail(ui.failure);
};

const addIdUpdateButton =  function (event){
  event.preventDefault();
  let id = $(event.target).attr("data-thought-id");
  $(".update-thought-button").attr("data-thought-id", id);
};

// const onUpdateThought = function (event) {
//   event.preventDefault();
//   let id = $(".update-thought-button").attr("data-thought-id");
//   let data = getFormFields(event.target);
//   api.updateThought(data, id)
//     .done(ui.updateThoughtSuccess)
//     .done(onMyThoughts(event))
//     .fail(ui.failure);
// };

const onUpdateThought = function (event) {
  event.preventDefault();
  let id = $(".update-thought-button").attr("data-thought-id");
  let data = getFormFields(event.target);
  api.updateThought(data, id)
    .done( function(){
      ui.updateThoughtSuccess();
      onMyThoughts(event);
    })
    .fail(ui.failure);
};

const addIdDeleteButton =  function (event){
  event.preventDefault();
  let id = $(event.target).attr("data-thought-id");
  $(".delete-thought-button").attr("data-thought-id", id);
};

// const onDeleteThought = function (event) {
//   event.preventDefault();
//   let id = $(this).attr("data-thought-id");
//   api.deleteThought(id)
//     .done(ui.success)
//     .done(onMyThoughts(event))
//     .fail(ui.failure);
// };

const onDeleteThought = function (event) {
  event.preventDefault();
  let id = $(this).attr("data-thought-id");
  api.deleteThought(id)
    .done( function() {
      ui.success();
      onMyThoughts(event);
    })
    .fail(ui.failure);
};

const addHandlers = () => {
  $('#create-thought').on('submit', onCreateThought);
  $('#index-thoughts').on('submit', onIndexThoughts);
  $('#my-thoughts').on('submit', onMyThoughts);
  $('#show-thought').on('submit', onShowThought);
  $('.content-display').on('click','.update-thought',addIdUpdateButton);
  $('#updateThoughtModal').on('submit', onUpdateThought);
  $('.content-display').on('click','.delete-thought',addIdDeleteButton);
  $('#delete-thought-button').on('click', onDeleteThought);
};

module.exports = {
  addHandlers,
};
