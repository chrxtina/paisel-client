'use strict';

// const app = require('../app');

const createThoughtSuccess = (data) => {
  console.log("Thought successfully created!", data);
};

const createThoughtFail = (data) => {
  console.log("Thought creation failed!", data);
};

const success = (data) => {
  console.log("SUCCESS!", data);
};

const failure = (data) => {
  console.log("OOPS!", data);
};


module.exports = {
  createThoughtSuccess,
  createThoughtFail,
  success,
  failure
  // success,
  // failure
};
