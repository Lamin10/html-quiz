let currentQuestion = 0;
let score = 0;
let totalQuestions = questions.length;

/* Getting all the elements from the DOM */

let container = document.getElementById("quizContainer");
let questionEl = document.getElementById("question");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
let nextButton = document.getElementById("nextButton");
let restartQuizButton = document.getElementById("restartButton");
let resultCont = document.getElementById("result");
let scoreEl = document.getElementById("score");

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

    scoreEl.innerHTML = `score: ${score}`;

    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = "Quiz Over";
    }
    if (currentQuestion == totalQuestions) {
        container.style.display = "none";
        resultCont.style.display = "";
        resultCont.textContent = "Your Score: " + score + "/" + questions.length;
        restartQuizButton.style.display = "block"; // Show the restart button
        resultCont.appendChild(restartQuizButton); // Append the restart button to the resultCont
        return;
    }
    loadQuestion(currentQuestion);
}

/* Event listeners */

nextButton.addEventListener("click", loadNextQuestion);

restartQuizButton.addEventListener("click", function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    scoreEl.innerHTML = "Score: 0";
    container.style.display = "block";
    resultCont.style.display = "none";
    restartQuizButton.style.display = "none"; // Hide the restart button
    nextButton.textContent = "Next Question";
    loadQuestion(currentQuestion);
});

/* Initial load */
loadQuestion(currentQuestion);




