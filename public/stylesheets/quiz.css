/* === Global Reset === */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px; /* Base size for scaling */
  }
  
  body {
    font-family: 'Quicksand', sans-serif;
    font-size: 1em; /* Allow scaling with html */
    border-left: 75px solid #fc94df;
    border-right: 75px solid #fc94df;
    min-height: 100vh;
    background: linear-gradient(to bottom right, #aec6ff, #fbe4ff);
  }
  
  nav {
    height: 100px;
    background-color: #00c4cc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin: 0 -75px;
    width: calc(100% + 150px);
  }
  
  nav img {
    height: 120px;
    object-fit: contain;
    align-self: center;
  }
  
  .flipped {
    transform: scaleX(-1);
  }
  
  ul {
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0;
    align-items: center;
  }
  
  li {
    display: inline;
  }
  
  nav a {
    text-decoration: none;
    color: white;
    font-size: 2em;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 30px;
    text-align: center;
    width: 220px;
    transition: all 0.3s ease-in-out;
    display: inline-block;
  }
  
  nav ul li:nth-child(1) a {
    background-color: #01f8d6;
  }
  
  nav ul li:nth-child(2) a {
    background-color: #fc94df;
  }
  
  nav ul li:nth-child(3) a {
    background-color: #fdb827;
  }
  
  nav a.active {
    box-shadow: 0 0 15px white;
  }
  
  nav a:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
  
  .quiz-container {
    max-width: 900px;
    margin: 40px auto;
    padding: 30px;
    background: linear-gradient(to bottom, #ffffff, #f4f4f4);
    border-radius: 20px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.15);
  }
  
  .progress-bar {
    height: 10px;
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  
  .progress {
    height: 100%;
    width: 0%;
    background-color: #fc94df;
    transition: width 0.3s ease;
  }
  
  .question-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #fc94df;
    padding-bottom: 15px;
    margin-bottom: 20px;
  }
  
  .question-number,
  .timer {
    font-size: 1.2em;
    font-weight: bold;
    color: #333;
  }
  
  .timer {
    color: #fc94df;
    background-color: #f8f8f8;
    padding: 10px 20px;
    border-radius: 10px;
  }
  
  .question-box {
    margin-bottom: 30px;
  }
  
  #question-text {
    font-size: 1.5em;
    margin-bottom: 30px;
    color: #333;
    line-height: 1.4;
  }
  
  .options-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .option-btn {
    padding: 15px 20px;
    font-size: 1em;
    background-color: #f0f0f0;
    border: 2px solid #ccc;
    border-radius: 10px;
    cursor: pointer;
    text-align: left;
    transition: all 0.3s ease;
  }
  
  .option-btn:hover {
    background-color: #e0e0e0;
    transform: translateY(-2px);
  }
  
  .option-btn.selected {
    background-color: #d4f0ff;
    border-color: #00c4cc;
  }
  
  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  
  .nav-btn {
    padding: 12px 25px;
    font-size: 1em;
    font-weight: bold;
    background-color: #fc94df;
    color: white;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .nav-btn:hover {
    background-color: #e272c3;
    transform: scale(1.05);
  }
  
  #submit-btn {
    background-color: #fdb827;
    display: none;
  }
  
  #submit-btn:hover {
    background-color: #e5a012;
  }
  
  .nav-btn:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    nav ul {
      gap: 10px;
    }
  
    nav a {
      font-size: 1.25em;
      width: 100px;
    }
  
    .quiz-container {
      margin: 20px 10px;
      padding: 15px;
    }
  
    #question-text {
      font-size: 1.25em;
    }
  
    .option-btn {
      font-size: 0.9em;
    }
  
    nav {
      flex-direction: column;
      align-items: center;
      padding: 10px 0;
    }
  
    nav ul {
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }
  
    .nav-logo, .flipped {
      height: 100px;
    }
  }
  
  /* === Dark Mode Styles for Quiz Page === */
  body.dark-mode {
    background-color: #1c1c2a;
    color: white;
    border-left: 75px solid #1c1c2a;
    border-right: 75px solid #1c1c2a;
  }
  
  body.dark-mode nav {
    background-color: #2e2e3e;
  }
  
  body.dark-mode nav a {
    background-color: #4a4a6a;
    color: white;
  }
  
  body.dark-mode nav a:hover {
    background-color: #5f5f8f;
  }
  
  body.dark-mode .quiz-container {
    background: #3b3b5f;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  }
  
  body.dark-mode .question-header {
    border-color: #ffffff88;
  }
  
  body.dark-mode .question-number,
  body.dark-mode #question-text,
  body.dark-mode .option-btn,
  body.dark-mode .timer {
    color: white;
  }
  
  body.dark-mode .option-btn {
    background-color: #4a4a6a;
    border-color: #7777a1;
  }
  
  body.dark-mode .option-btn.selected {
    background-color: #6c5ce7;
    border-color: white;
  }
  
  body.dark-mode .nav-btn {
    background-color: #6c5ce7;
  }
  
  body.dark-mode .nav-btn:hover {
    background-color: #5b4fd1;
  }
