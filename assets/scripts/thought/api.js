'use strict';

const app = require('../app');


const createThought = (data) => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/thoughts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + token,
    },
    data: data,
  });
};

const indexThoughts = () => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/thoughts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

const showThought = (data) => {
  let token = app.user.token;
  let thought_id = data.thought.id;
  return $.ajax({
    url: app.host + '/thoughts/' + thought_id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

const updateThought = (data, id) => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/thoughts/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + token,
    },
    data: data,
  });
};

const deleteThought = (id) => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/thoughts/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};


module.exports = {
  createThought,
  indexThoughts,
  showThought,
  updateThought,
  deleteThought
};
