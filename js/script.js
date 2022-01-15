
// variable containing an array of objects for the questions
var quizQuestions = [
    {
      question: "What would and alert() create?",
      answers: ["A Popup", "A Noise", "A Reminder", "Something Else"],
      correctAnswer: "A Popup",
    },
    {
      question: "Which of the following is the correct element to put JavaScript? ",
      answers: ["<js>", "<javascript>", "<href>", "<script>"],
      correctAnswer: "<script>",
    },
    {
      question: "How do you create a function in JavaScript?",
      answers: ["function myFunction()", "var =", "function:MyFunction", "<Function>"],
      correctAnswer: "function myFunction()",
    },
    {
      question: "JavaScript variables are written in what kind of style?",
      answers: ["HumpBack", "camelCase", "mountainWords", "hills"],
      correctAnswer: "camelCase",
    },
  ];


// variable to set the question index at 0 so the questions can cycle
var questionIndex = 0

// setting variables and calling various elements from the html
var questionEl = document.getElementById('question')
var answersEl = document.getElementById('answers')
var mainEl = document.getElementById('main')
var startButton = document.getElementById('start-button')
var quizEl = document.getElementById('quiz')
var timerEl = document.getElementById('timer')
var endPageEl = document.getElementById('end-page')
var backButton = document.getElementById('back-button')

// timer initial setting in global scope
// set at 21 as there seems to be a delay in the display of the timer so it starts the display at 20
var timeLeft = 21
var wrongAnswer = 3

// user starting score which will be added to incrementaly
var score = document.getElementById('score')
var userScore = 0

// user intials input
var userInitials = document.getElementById('user-initials')
var submitInitialsButton = document.getElementById('submit-initials')

// event listener that calls the start startQuiz function
startButton.addEventListener('click', startQuiz)

// the funcation to start the quiz which hides the main page and unhides the quiz page
// it also starts the timer and renders the questions which are written in seperate functions
function startQuiz() {
 console.log('Started')
 mainEl.classList.add('hide')
 quizEl.classList.remove('hide')
 renderQuestion()
 countDown()
}

// the function to stop the quiz once all questions are complete or the timer counts to 0
function stopQuiz() {
    clearInterval(timerEl)
    quizEl.classList.add('hide')
    endPageEl.classList.remove('hide')
    timerEl.innerHTML = ' is up!'
    displayScore()
    clearTimeout(countDown, 1000)
}

// function to display the users score
function displayScore() {
    score.textContent = userScore 
}

// the timer function which counts down incrementaly in 1000 milisecond intervals and displays on the page
// once the timer hits 0 it calls the stopQuiz function and clears the interval which stops the timer
function countDown() {
    // var timeLeft = 11
    quizTimer = setInterval(function(){
        timeLeft--
        timerEl.innerText = timeLeft
if (timeLeft <= 0) {
    clearInterval(timerEl)
    stopQuiz()
  
}
}, 1000 ) }

// the function to render the questions from the object array and displays them on the page
// forEach cycles the array and displays a new question once until it reaches the end
function renderQuestion() {
    var questionObject = quizQuestions[questionIndex]

    questionEl.textContent = questionObject.question

    answersEl.innerHTML = ""

    questionObject.answers.forEach(function(answer){
       var answerButton = document.createElement('button')
       answerButton.setAttribute('value', answer)

       answerButton.textContent = answer

       answerButton.onclick = answerChoice
       answersEl.appendChild(answerButton)
    }
  ) 
}

// the function that checks if the user has selected the correct answer
// if the wrong answer is selected the timer has time reduced and the correct answer adds to the userScore
// if the questions reach the end of the array the quiz is stopped
function answerChoice() {
    if (this.value !== quizQuestions[questionIndex].correctAnswer) {
        console.log('wrong')
        timeLeft = timeLeft - wrongAnswer
    } else {
        console.log('correct')
        userScore++
        console.log(userScore)
        questionIndex++
        // add to user score
    }


    if (questionIndex === quizQuestions.length) {
        stopQuiz()
        clearInterval(countDown)
    } else {
        renderQuestion()
    }
}


// local storage HELL
// function storeHighscore() {
//     localStorage.setItem('highscore', userScore)
// }

// function storeInitials() {
//   localStorage.setItem('initials', userInitials)
// }



// console.log(localStorage.getItem('initials'))

// attempting to create local storage logging and displaying to the page
// it currently runs without error but does not function correctly despite best efforts at this time
var finalScore = {
  initials: userInitials.value,
  score: JSON.parse(userScore)
}

// event listener for submitting initials
submitInitialsButton.addEventListener('click', function(event) {
event.preventDefault()


localStorage.setItem('intials', JSON.stringify(userScore))
renderHighscore()

}
)

function renderHighscore() {
  var highScores = JSON.parse(localStorage.getItem('finalScore'))
  if (!highScores) {
    highScores = [];
  }

  console.log(finalScore.initials + finalScore.score)
  document.appendChild.textContent = finalScore.initials + finalScore.score

}


// event listener and function below that refreshes the page and allows the user to restart the quiz
backButton.addEventListener('click', goBack)

function goBack () {
location.reload();
}