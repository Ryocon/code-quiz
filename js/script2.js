
// variable containing an array of objects for the questions
var quizQuestions = [
    {
      question: "Question 1",
      answers: ["A", "B", "C", "D", "E"],
      correctAnswer: "A",
    },
    {
      question: " Q 2",
      answers: ["A", "B", "C", "D", "E"],
      correctAnswer: "B",
    },
    {
      question: "Question 3",
      answers: ["A", "B", "C", "D", "E"],
      correctAnswer: "C",
    },
    {
      question: " Q 4",
      answers: ["A", "B", "C", "D", "E"],
      correctAnswer: "D",
    },
  ];

var questionIndex = 0

var mainEl = document.getElementById('main')
var startButton = document.getElementById('start-button')
var quizEl = document.getElementById('quiz')
var timerEl = document.getElementById('timer')
var endPageEl = document.getElementById('end-page')

// timer initial setting in global scope
var timeLeft = 5

// event listener that calls the start startQuiz function
startButton.addEventListener('click', startQuiz)

function startQuiz() {
 console.log('Started')
 mainEl.classList.add('hide')
 quizEl.classList.remove('hide')
 countDown()
}


function stopQuiz() {
    clearInterval(timerEl)
    quizEl.classList.add('hide')
    endPageEl.classList.remove('hide')
    timerEl.innerHTML = ' is up!'
}

function countDown() {
    // var timeLeft = 11
    quizTimer = setInterval(function(){
        timeLeft--
        timerEl.innerText = timeLeft
if (timeLeft <= 0) {
    // clearInterval(timerEl)
    stopQuiz()
    // quizContainer.classList.add('hide')
    // endPage.classList.remove('hide')
    // timerEl.innerHTML = ' is up!'
}
// DOES THIS WORK WHEN END OF QUESTIONS?
// if (questionIndex >= questions.length) {
//     clearInterval(timer);
// }
}, 1000 ) }