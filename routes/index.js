// Author: Maira Bermeo
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// path to json file
const questionsFilePath = path.join(__dirname, '..', 'model', 'question.json');

// read and parse the questions JSON file
function readQuestionsFromFile() {
  let data = fs.readFileSync(questionsFilePath, 'utf-8');
  return JSON.parse(data);
}

//start
router.get('/', function(req, res, next) {
  res.render('main/index');
});

router.get('/start', function(req, res, next) {
  res.render('main/start');
});

router.get('/results', function(req, res, next) {
  res.render('main/results');
});

router.get('/settings', function(req, res, next) {
  res.render('main/settings');
});

module.exports = router;
