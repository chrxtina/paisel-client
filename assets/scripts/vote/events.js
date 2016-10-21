'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onCreateVote = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createVote(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onVoteResults = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.voteResults(data)
    .done(ui.voteResultsSuccess)
    .fail(ui.failure);
};

const addHandlers = () => {
  $('.content-display').on('submit', '#create-vote', onCreateVote);
  $('.content-display').on('submit', '#vote-results', onVoteResults);
};

module.exports = {
  addHandlers,
};
