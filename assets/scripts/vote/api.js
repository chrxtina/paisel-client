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

module.exports = {
  createVote
};
