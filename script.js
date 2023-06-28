let currentQuestion = 0;
let score = 0;
let totalQuestions = questions.length;

let container = document.getElementById("quizContainer");
let questionEl = document.getElementById("question");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
let nextButton = document.getElementById("nextButton");
let resultCont = document.getElementById("result");


function loadQuestion (questionIndex) {
    let q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + "." + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion () {
    let selectedOption = document.querySelector("input[type=radio]:checked");
    if (!selectedOption) {
        alert("Please select your answer!");
        return;
    }
    let answer = selectedOption.value;
    if (questions[currentQuestion].answer === answer) {
        score += 1;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = "Quiz Over";
    }
    if (currentQuestion == totalQuestions) {
        container.style.display = "none";
        resultCont.style.display = "";
        resultCont.textContent = "Your Score"   +  score  + "/" + questions.length;
        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);