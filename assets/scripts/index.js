'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const authEvents = require('./auth/events.js');
const thoughtEvents = require('./thought/events.js');
const thoughtUI = require('./thought/ui.js');
const voteEvents = require('./vote/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  thoughtEvents.addHandlers();
  thoughtUI.addHandlers();
  voteEvents.addHandlers();
});
