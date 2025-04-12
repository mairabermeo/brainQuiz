// === APPLY SAVED SETTINGS ===//
document.addEventListener('DOMContentLoaded', function() {
const savedDarkMode = localStorage.getItem("darkMode");
const savedFontSize = localStorage.getItem("fontSize");

if (savedDarkMode === "true") {
  document.body.classList.add("dark-mode");
}

if (savedFontSize) {
  document.documentElement.style.fontSize = savedFontSize;
}
    // Hide elements initially until we determine which ones to show
    const resultEmoji = document.getElementById('result-emoji');
    const resultMessage = document.getElementById('result-message');
    const scorePercentage = document.getElementById('score-percentage');
    const percImage = document.querySelector('.perc-image');
    const bannerContainer = document.querySelector('.banner-container');
  
    // Initially hide everything
    if (resultEmoji) resultEmoji.style.visibility = 'hidden';
    if (resultMessage) resultMessage.style.visibility = 'hidden';
    if (scorePercentage) {
      scorePercentage.style.visibility = 'hidden';
      scorePercentage.style.opacity = '0';
    }
    if (percImage) {
      percImage.style.visibility = 'hidden';
      percImage.style.opacity = '0';
    }
  
    // Get score data from localStorage
    const score = localStorage.getItem('quizScore');
    console.log('Score retrieved from localStorage:', score);
  
    // Display the score
    if (scorePercentage && percImage && bannerContainer) {
        // Position score and percentage image
        scorePercentage.style.position = 'absolute';
        scorePercentage.style.bottom = '30%';
        scorePercentage.style.left = '35%'; // Adjust as needed
        scorePercentage.style.fontSize = '130px'; // Larger font size
        scorePercentage.style.color = 'white'; // Ensure white color
        scorePercentage.style.fontWeight = 'bold'; // Make it bold
        scorePercentage.style.transition = 'opacity 0.3s ease'; // Smooth transition
  
        percImage.style.position = 'absolute';
        percImage.style.bottom = '30%';
        percImage.style.left = '50%'; // Adjust as needed
        percImage.style.transition = 'opacity 0.3s ease'; // Smooth transition
    }
  
    // Actually set the text content
    if (scorePercentage) {
        scorePercentage.textContent = score || '0';
    }
  
    // Set appropriate size constraints on the result images
    if (resultEmoji) {
        resultEmoji.style.maxWidth = '150px';
        resultEmoji.style.maxHeight = '150px';
        resultEmoji.style.width = 'auto';
        resultEmoji.style.height = 'auto';
    }
  
    if (resultMessage) {
        resultMessage.style.maxWidth = '250px';
        resultMessage.style.maxHeight = '150px';
        resultMessage.style.width = 'auto';
        resultMessage.style.height = 'auto';
    }
  
    // Change content based on score
    const scoreNum = parseInt(score) || 0;
  
    // Set default image sources in HTML to blank or a loading image
    if (resultEmoji) resultEmoji.src = '';
    if (resultMessage) resultMessage.src = '';
  
    if (scoreNum >= 70) {
        // Good score
        if (resultEmoji) resultEmoji.src = '/images/thumbs-up.webp';
        if (resultMessage) resultMessage.src = '/images/great.webp';
        document.body.classList.add('good-score');
    } else if (scoreNum >= 40) {
        // Medium score
        if (resultEmoji) resultEmoji.src = '/images/meh.webp';
        if (resultMessage) resultMessage.src = '/images/almost.webp';
        document.body.classList.add('meh-score');
    } else {
        // Bad score
        if (resultEmoji) resultEmoji.src = '/images/crying-img.webp';
        if (resultMessage) resultMessage.src = '/images/better-luck-next-time.webp';
        document.body.classList.add('bad-score');
    }
  
    // Show elements with a slight delay and fade in
    setTimeout(function() {
        if (resultEmoji) {
            resultEmoji.style.visibility = 'visible';
            resultEmoji.style.opacity = '1';
        }
        if (resultMessage) {
            resultMessage.style.visibility = 'visible';
            resultMessage.style.opacity = '1';
        }
        if (scorePercentage) {
            scorePercentage.style.visibility = 'visible';
            scorePercentage.style.opacity = '1';
        }
        if (percImage) {
            percImage.style.visibility = 'visible';
            percImage.style.opacity = '1';
        }
    }, 50);
  
    // Log any issues for debugging
    if (!score) {
        console.warn('No score found in localStorage');
    }
  });
