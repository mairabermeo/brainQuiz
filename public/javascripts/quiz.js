// === APPLY SAVED SETTINGS === //
document.addEventListener('DOMContentLoaded', () => {
  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode === "true") {
    document.body.classList.add("dark-mode");
  }
  const savedFontSize = localStorage.getItem("fontSize");
  if (savedFontSize) {
    document.documentElement.style.fontSize = savedFontSize;
  }
});
// Author: Jude Marryshow

let allQuestions = [];
let selectedQuestions = [];
let userAnswers = [];
let currentQuestionIndex = 0;
let totalTimeLeft = 45; 
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

      allQuestions = questions;
      selectedQuestions = questions;
      userAnswers = Array(questions.length).fill(null); 
      totalQuestionsEl.textContent = questions.length;

      showQuestion(0);
      startTimer(); // Start total quiz timer
    })
    .catch(error => {
      console.error('Error fetching quiz questions:', error);
    });
}

// Show the question and options
function showQuestion(index) {
  const q = selectedQuestions[index];

  currentQuestionEl.textContent = index + 1;
  questionTextEl.textContent = q.question;
  optionsContainerEl.innerHTML = '';

  q.options.forEach(optionText => {
    const button = document.createElement('button');
    button.textContent = optionText;
    button.classList.add('option-btn');

    if (userAnswers[index] === optionText) {
      button.classList.add('selected');
    }

    button.addEventListener('click', () => {
      selectAnswer(optionText);
    });

    optionsContainerEl.appendChild(button);
  });

  updateNavButtons();
  updateProgressBar();
}

// Handle answer selection
function selectAnswer(answer) {
  userAnswers[currentQuestionIndex] = answer;

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

// Start total quiz timer
function startTimer() {
  updateTimerDisplay();

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    totalTimeLeft--;
    updateTimerDisplay();

    if (totalTimeLeft <= 0) {
      clearInterval(timerInterval);
      finishQuiz(); // Auto-submit when time runs out
    }
  }, 1000);
}

// Update timer display
function updateTimerDisplay() {
  timerEl.textContent = `Time: ${totalTimeLeft}s`;
  timerEl.style.color = totalTimeLeft <= 5 ? '#cc0000' : '#fc94df';
}

// Navigation
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
}

function nextQuestion() {
  if (currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  }
}

// Finish the quiz and calculate score
function finishQuiz() {
  clearInterval(timerInterval);

  let score = 0;
  selectedQuestions.forEach((q, index) => {
    if (userAnswers[index] === q.correctAnswer) {
      score++;
    }
  });

  const percentage = Math.round((score / selectedQuestions.length) * 100);

  localStorage.setItem('quizScore', percentage);
  localStorage.setItem('totalQuestions', selectedQuestions.length);
  localStorage.setItem('correctAnswers', score);

  window.location.href = '/results';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  fetchQuizQuestions();
  prevBtn.addEventListener('click', previousQuestion);
  nextBtn.addEventListener('click', nextQuestion);
  submitBtn.addEventListener('click', finishQuiz);
});
