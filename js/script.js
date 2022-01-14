var startButton = document.getElementById('start-button')
var quizContainer = document.getElementById('quiz')
var questionEl = document.getElementById('question')
var AnswerEl = document.getElementsByClassName('answers')
var mainSplash = document.getElementById('splash')
var container = document.getElementsByClassName('container')
var timerEl = document.getElementById('timer')
var endPage = document.getElementById('end-page')

var questionRandom, questionIndex

startButton.addEventListener('click', startQuiz)

function startQuiz() {
 console.log('Started')
 mainSplash.classList.add('hide')
 questionRandom = questions.sort(() => Math.random() - .5)
 questionIndex = 0
 quizContainer.classList.remove('hide')
 countdown()

}

function countdown() {
    var timeLeft = 11
    quizTimer = setInterval(function(){
        timeLeft--
        timerEl.innerText = timeLeft
if(timeLeft <= 0) {
    clearInterval(timerEl)
    quizContainer.classList.add('hide')
    endPage.classList.remove('hide')
    timerEl.innerHTML = ' is up!'
}
}, 1000 ) }

function setQuestion() {
    showQuestion(questionRandom[questionIndex])
}

function showQuestion(question) {
    questionEl.innerHTML = question.question
}

function selectAsnswer() {}

// WOKRING ON QUESTIONS APPEARING




var questions = [
    {
        question: 'What is an Egg?',
        answers: [
            { text: 'Round', correct: false},
            { text: 'Bird', correct: false },
            { text: 'Food', correct: true},
            { text: 'Java', correct: false}
        ]
    }
]
