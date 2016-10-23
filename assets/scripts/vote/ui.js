'use strict';

const success = (data) => {
  console.log("success!",data);
};

const failure = (error) => {
  console.log(error);
};

const voteResultsSuccess = (data) => {
  console.log("Data:", data);

  document.getElementById("poll-question").innerHTML = data.question;

  document.getElementById("answer-A").innerHTML = data.answers[0];
  document.getElementById("prog-bar-A").innerHTML = data.percent.a*100+"%";
  $("#prog-bar-A").css('width', data.percent.a*100+"%");

  document.getElementById("answer-B").innerHTML = data.answers[1];
  document.getElementById("prog-bar-B").innerHTML = data.percent.b*100+"%";
  $("#prog-bar-B").css('width', data.percent.b*100+"%");

  document.getElementById("answer-C").innerHTML = data.answers[2];
  document.getElementById("prog-bar-C").innerHTML = data.percent.c*100+"%";
  $("#prog-bar-C").css('width', data.percent.c*100+"%");

  $('#pollDataModal').modal('show');
};


module.exports = {
  success,
  failure,
  voteResultsSuccess
};
