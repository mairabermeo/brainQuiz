// Author: Maira Bermeo
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const questionsFilePath = path.join(__dirname, '..', 'model', 'question.json');

function readQuestionsFromFile() {
  const rawData = fs.readFileSync(questionsFilePath, 'utf-8');
  return JSON.parse(rawData);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function transformQuestionFormat(rawQuestion) {
  return {
    question: rawQuestion.question,
    options: [rawQuestion.A, rawQuestion.B, rawQuestion.C, rawQuestion.D],
    correctAnswer: rawQuestion[rawQuestion.answer]
  };
}
router.get('/', (req, res) => {
  res.render('main/quiz'); 

});

router.get('/quiz', (req, res) => {
  const allRawQuestions = readQuestionsFromFile();
  shuffleArray(allRawQuestions);
  const selected = allRawQuestions.slice(0, 10);

  const transformed = selected.map(transformQuestionFormat);

  res.json(transformed);
});

module.exports = router;
