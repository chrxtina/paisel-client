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
  if (data.percent.a) {
    document.getElementById("prog-bar-A").innerHTML = data.percent.a*100+"%";
    $("#prog-bar-A").css('width', data.percent.a*100+"%");
  } else {
    document.getElementById("prog-bar-A").innerHTML = "0%";
    $("#prog-bar-A").css('width', "0%");
  }

  document.getElementById("answer-B").innerHTML = data.answers[1];
  if (data.percent.b) {
    document.getElementById("prog-bar-B").innerHTML = data.percent.b*100+"%";
    $("#prog-bar-B").css('width', data.percent.b*100+"%");
  } else {
    document.getElementById("prog-bar-B").innerHTML = "0%";
    $("#prog-bar-B").css('width', "0%");
  }

  document.getElementById("answer-C").innerHTML = data.answers[2];
  if (data.percent.c) {
    document.getElementById("prog-bar-C").innerHTML = data.percent.c*100+"%";
    $("#prog-bar-C").css('width', data.percent.c*100+"%");
  } else {
    document.getElementById("prog-bar-C").innerHTML = "0%";
    $("#prog-bar-C").css('width', "0%");
  }

  $('#pollDataModal').modal('show');
};


module.exports = {
  success,
  failure,
  voteResultsSuccess
};
