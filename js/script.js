var startButton = document.getElementById('start-button')
var quizContainer = document.getElementById('quiz')
var questionEl = document.getElementById('question')
var answerEl = document.getElementsByClassName('answers')
var mainSplash = document.getElementById('splash')
var container = document.getElementsByClassName('container')
var timerEl = document.getElementById('timer')
var endPage = document.getElementById('end-page')

// undefined arrays to allow questions
var questionRandom, questionIndex

startButton.addEventListener('click', startQuiz)

function startQuiz() {
 console.log('Started')
 mainSplash.classList.add('hide')
 questionRandom = questions.sort(() => Math.random() - .5)
 questionIndex = 0
 quizContainer.classList.remove('hide')
 countDown()

}

function countDown() {
    var timeLeft = 11
    quizTimer = setInterval(function(){
        timeLeft--
        timerEl.innerText = timeLeft
if (timeLeft <= 0) {
    clearInterval(timerEl)
    quizContainer.classList.add('hide')
    endPage.classList.remove('hide')
    timerEl.innerHTML = ' is up!'
}
}, 1000 ) }

function setQuestion() {
    showQuestion(questionRandom[questionIndex])
}

// foreach executes a provided function once for each array element
function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.array.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerEl.appendChild(button)
    });
}

function selectAnswer(e) {}

// WOKRING ON QUESTIONS APPEARING




const questions = [
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
