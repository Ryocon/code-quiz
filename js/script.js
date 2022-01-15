var startButton = document.getElementById('start-button')
var quizContainer = document.getElementById('quiz')
var questionEl = document.getElementById('question')
var answerEl = document.getElementById('answers')
var mainSplash = document.getElementById('main')
var container = document.getElementsByClassName('container')
var timerEl = document.getElementById('timer')
var endPage = document.getElementById('end-page')
// for moving to the next question set
var nextQuestion = document.getElementById('next')
// undefined arrays to allow questions
var questionRandom, questionIndex

// variables to work out high score
var correctAnswers = 0
var falseAnswers = 0

var highscoreStorage

// declared at global scope to be accessed elsewhere
var timeLeft = 11



startButton.addEventListener('click', startQuiz)

// debugger

function startQuiz() {
 console.log('Started')
 mainSplash.classList.add('hide')
 questionRandom = questions.sort(() => Math.random() - .5)
 questionIndex = 0
 quizContainer.classList.remove('hide')
 countDown()
setQuestion()
correctAnswers = 0
falseAnswers = 0
}

// hides and removes elements when time is up
function stopQuiz() {
    clearInterval(timerEl)
    quizContainer.classList.add('hide')
    endPage.classList.remove('hide')
    timerEl.innerHTML = ' is up!'
    renderHighScores()
}

// countdown function using setinterval
function countDown() {
    var timeLeft = 11
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
if (questionIndex >= questions.length) {
    clearInterval(timer);
}
}, 1000 ) }

function setQuestion() {
    showQuestion(questionRandom[questionIndex])
}

// foreach executes a provided function once for each array element
function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button-style')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        // Uncaught TypeError: answerEl.appendChild is not a function
        answerEl.appendChild(button)
    })
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (questionRandom.length > questionIndex + 1) {
  
} }

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }

  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

// WOKRING ON QUESTIONS APPEARING
// correct answers will need to increment in order to set highscore

function resetPage() {
    while (answerEl.firstChild) {
        answerEl.removeChild
        (answerEl.firstChild)
    }
}






function subtractTime()  {

}

// function renderHighScores() {
//     // removepreviouscontent

//     var highscores = localStorage.getItem("highscores")

//     // this needs major work
//     if (highscores === null) {
//         var parsedHighscores = JSON.parse(highscores)

// for (var i = 0; i < parsedHighscores.length; i++) {
//     var highscore = parsedHighscores[1]


//     var score = highscore.score
//     var initials = highscore.initials
// }

//         // obtain user initials via input field (use .val)

//         // localStorage.setItem("highscores")
//     }

//     localStorage.setItem("highscores", )
// }

// create input field for user initials
// create event listener for user input to write to local storage for highscores




const questions = [
    {
        question: 'What is an Egg?',
        answers: [
            { text: 'Round', correct: false},
            { text: 'Bird', correct: false },
            { text: 'Food', correct: true},
            { text: 'Java', correct: false}
        ]
    },
    {
        question: 'test',
        answers: [
            {text: 'test', correct: true},
            {text: 'test', correct: false},
            {text: 'test', correct: false},
            {text: 'test', correct: false}
        ]
    }
]