let currentQuestion = 0;
let score = 0;
const totalQuestions = questions.length;

/* Getting all the elements from the DOM */

const container = document.getElementById("quizContainer");
const questionEl = document.getElementById("question");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
const nextButton = document.getElementById("nextButton");
const resultCont = document.getElementById("result");
const scoreEl = document.getElementById("score");

/* The loadQuestions function */

function loadQuestion(questionIndex) {
    let q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + "." + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

/* Load next question function */

function loadNextQuestion() {
    let selectedOption = document.querySelector("input[type=radio]:checked");
    if (!selectedOption) {
        alert("Please select your answer!");
        return;
    }
    let answer = selectedOption.value;
    if (questions[currentQuestion].answer === answer) {
        score += 1;
    }

    scoreEl.innerHTML = `Score: ${score}`;

    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = "Quiz Over";
        restartQuizButton.style.display = "block"; // Show the restart button
    }
    if (currentQuestion == totalQuestions) {
        container.style.display = "none";
        resultCont.style.display = "";
        resultCont.textContent = "Your Score: " + score + "/" + questions.length;
        createRestartButton();
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

nextButton.addEventListener("click", loadNextQuestion);



function restartQuiz() {
    resultCont.style.display = "none";
    container.style.display = "block";
    currentQuestion = 0;
    score = 0;
    scoreEl.innerHTML = "Score: 0";
    restartQuizButton.style.display = "none"; // Hide the restart button
    nextButton.textContent = "Next Question";
    loadQuestion(currentQuestion);
}


function createRestartButton() {
    let restartQuizButton = document.createElement("button");
    restartQuizButton.innerText = "Restart Quiz";
    restartQuizButton.classList.add("restart-btn");
    resultCont.appendChild(restartQuizButton);
    restartQuizButton.addEventListener("click", restartQuiz);
  
}