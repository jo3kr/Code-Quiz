const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');

const questions = [
    {
        question: 'What is the correct way to declare a variable in JavaScript?',
        answers: [
        { text: 'var=...;', correct: true },
        { text: 'int=...;', correct: false },
        { text: 'let=... =', correct: false },
        { text: 'variable=...;', correct: false },
        ],
    },
    ];
    let currentQuestionIndex;
let timeLeft;
let timer;
let score;

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.classList.add('hidden');
    currentQuestionIndex = 0;
    timeLeft = 60;
    timerElement.textContent = timeLeft;
    timer = setInterval(updateTimer,1000);
    score = 0;
    questionContainer.classList.remove('hidden');
    showNextQuestion();
    }
    