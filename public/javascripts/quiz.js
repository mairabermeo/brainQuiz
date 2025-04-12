// === APPLY SAVED SETTINGS ===//
document.addEventListener('DOMContentLoaded', () => {
  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode === "true") {
    document.body.classList.add("dark-mode");
  }
  const savedFontSize = localStorage.getItem("fontSize");
if (savedFontSize) {
  document.documentElement.style.fontSize = savedFontSize;
}});

let allQuestions = [];
let selectedQuestions = [];
let userAnswers = [];
let currentQuestionIndex = 0;
let timeLeft = 20;
let timerInterval;

// Element references
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');
const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const timerEl = document.getElementById('timer');
const progressBar = document.getElementById('progress');

// Fetch quiz questions from the server
function fetchQuizQuestions() {
  fetch('/quiz/quiz')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(questions => {
      if (questions.length === 0) {
        console.error('No questions returned from the server.');
        return;
      }
  // Set all the questions
  allQuestions = questions;
  selectedQuestions = questions;
  userAnswers = Array(questions.length).fill(null); 
  totalQuestionsEl.textContent = questions.length;

  // Display the first question
  showQuestion(0);

  // Start the timer
  startTimer();
  })
  .catch(error => {
    console.error('Error fetching quiz questions:', error);
    });
}

// Show the question and options
function showQuestion(index) {
  const q = selectedQuestions[index];

  // Update the question number and text
  currentQuestionEl.textContent = index + 1;
  questionTextEl.textContent = q.question;

  // Clear existing options and create new ones
  optionsContainerEl.innerHTML = '';

  // Display the options dynamically
  q.options.forEach(optionText => {
    const button = document.createElement('button');
    button.textContent = optionText;
    button.classList.add('option-btn');

    // Highlight the selected option
    if (userAnswers[index] === optionText) {
      button.classList.add('selected');
    }

    // Event listener for selecting an answer
    button.addEventListener('click', () => {
      selectAnswer(optionText);
    });

    // Append the option button to the options container
    optionsContainerEl.appendChild(button);
  });

  // Update the navigation buttons
  updateNavButtons();
  updateProgressBar();
}

// Handle answer selection
function selectAnswer(answer) {
  userAnswers[currentQuestionIndex] = answer;

  // Mark the selected answer visually
  const options = optionsContainerEl.querySelectorAll('.option-btn');
  options.forEach(button => {
    button.classList.remove('selected');
    if (button.textContent === answer) {
      button.classList.add('selected');
    }
  });
}

// Update the navigation buttons
function updateNavButtons() {
  prevBtn.disabled = currentQuestionIndex === 0;
  
  if (currentQuestionIndex === selectedQuestions.length - 1) {
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'block';
    submitBtn.style.display = 'none';
  }
}

// Update the progress bar
function updateProgressBar() {
  const percent = Math.round(((currentQuestionIndex + 1) / selectedQuestions.length) * 100);
  progressBar.style.width = `${percent}%`;
}

function startTimer() {
  timeLeft = 20;
  updateTimerDisplay();

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // Move to next question or finish quiz automatically
      if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        startTimer(); 
      } else {
        finishQuiz(); 
      }
    }
  }, 1000);
}

// Update the timer display
function updateTimerDisplay() {
  timerEl.textContent = `Time: ${timeLeft}s`;
  timerEl.style.color = timeLeft <= 5 ? '#cc0000' : '#fc94df';
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
    startTimer(); 
  }
}

function nextQuestion() {
  if (currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
    startTimer(); 
  }
}

// Finish the quiz and calculate score
function finishQuiz() {
  clearInterval(timerInterval);

  let score = 0;
  selectedQuestions.forEach((q, index) => {
    const correctAnswer = q.correctAnswer;
    if (userAnswers[index] === correctAnswer) {
      score++;
    }
  });

  const percentage = Math.round((score / selectedQuestions.length) * 100);

  // Save score for later use
  localStorage.setItem('quizScore', percentage);
  localStorage.setItem('totalQuestions', selectedQuestions.length);
  localStorage.setItem('correctAnswers', score);

  // Redirect to results page
  window.location.href = '/results';
}

// Wait for the DOM to load before starting
document.addEventListener('DOMContentLoaded', () => {
  fetchQuizQuestions();
  prevBtn.addEventListener('click', previousQuestion);
  nextBtn.addEventListener('click', nextQuestion);
  submitBtn.addEventListener('click', finishQuiz);
});
