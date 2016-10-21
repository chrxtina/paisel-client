'use strict';

const app = require('../app');

const createVote = (data) => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/votes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + token,
    },
    data: data,
  });
};

const voteResults = (data) => {
  let token = app.user.token;
  let vote_id = data.vote.id;
  return $.ajax({
    url: app.host + '/vote-results/' + vote_id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

module.exports = {
  createVote,
  voteResults
};
