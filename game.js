const startBtn = document.querySelector(".startButton");
const popUpInfo = document.querySelector(".popUp");
const exitButton = document.querySelector(".exit-btn")
const main = document.querySelector(".main")
const continueButton = document.querySelector(".questionContainer")

startBtn.addEventListener("click", () => {
    popUpInfo.classList.add("active");
    main.classList.add("active");
    
});

exitButton.addEventListener("click", () => {
    popUpInfo.classList.remove("active");
    main.classList.remove("active");
});

continueButton.addEventListener("click", startGame)
   

// logic for Continue Button/Start of Quiz

function startQuiz() {

}

function nextQuestion() {

}

function selectAnswer() {

}



