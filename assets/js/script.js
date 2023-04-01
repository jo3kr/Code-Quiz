const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const timerElement = document.getElementById("time-left");
const scoreContainer = document.getElementById("score-container");
const finalScore = document.getElementById("final-score");
const highscoreForm = document.getElementById("highscore-form");
const initialsInput = document.getElementById("initials");

const questions = [
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    answers: [
      { text: "var=...;", correct: true },
      { text: "int=...;", correct: false },
      { text: "let=... =", correct: false },
      { text: "variable=...;", correct: false },
    ],
  },
];
let currentQuestionIndex;
let timeLeft;
let timer;
let score;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.classList.add("hidden");
  currentQuestionIndex = 0;
  timeLeft = 60;
  timerElement.textContent = timeLeft;
  timer = setInterval(updateTimer, 1000);
  score = 0;
  questionContainer.classList.remove("hidden");
  showNextQuestion();
}

function updateTimer() {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
        endQuiz();
    }
    }
    
    function showNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
    }