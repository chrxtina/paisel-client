'use strict';

const success = (data) => {
  console.log("success!",data);
};

const failure = (error) => {
  console.log(error);
};


module.exports = {
  success,
  failure
};
