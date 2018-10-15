const express = require('express');
var bodyParser = require("body-parser");
const os = require('os');
const registerAnswerRoutes = require('./API/answer');
const registerQuestionRoutes = require('./API/question');
const data = require('./data/livePollData');

const app = express();
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
registerAnswerRoutes(app, data);
registerQuestionRoutes(app, data);
app.listen(80, () => console.log('Listening on port 80!!'));
