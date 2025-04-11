const express = require('express');
const router = express.Router();
const path = require('path'); // <-- Add this line



// Home page
router.get('/', function(req, res, next) {
  res.render('main/index');
});

// Start screen
router.get('/start', function(req, res, next) {
  res.render('main/start');
});

// Add this route for quiz screen
router.get('/quiz', function(req, res, next) {
  res.render('main/quiz');
});

router.get('/results', function(req, res, next) {
  res.render('main/results'); // Make sure this EJS file exists
});

router.get('/settings', function(req, res, next) {
  res.render('main/settings');
});


// Path to your JSON file
const questionsFilePath = path.join(__dirname, 'model', 'question.json');

// Function to read questions from the JSON file
function readQuestionsFromFile() {
    const rawData = fs.readFileSync(questionsFilePath, 'utf-8');
    return JSON.parse(rawData);
}

// Route to render the quiz page
router.get('/quiz', (req, res) => {
    const questions = readQuestionsFromFile();  // Get questions from the JSON file
    res.render('main/quiz', { questions });  // Pass questions to the EJS template
    res.render('main/quiz', { questions, total: questions.length });

});

module.exports = router;
