const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = {};

let questions = [
    {
        image: "./Images/1_Question_Object_Image.jpg",
        question: "This painting is above the chiminey. Who painted it?",
        choice1: "Pablo Picasso",
        choice2: "Vincent Van Gogh",
        choice3: "Claude Monet",
        answer: 2,

    },

    {
        image: "./Images/1_Question_Object_Image.jpg",
        question: "What country did the painter draw inspiration from for the painting above.",
        choice1: "Japan",
        choice2: "Netherlands",
        choice3: "Estonia",
        answer: 1,

    },

    {
        image: "./Images/3_Question_Object_Image.jpg",
        question: "What famous painter was the inspiration for the clock on the fireplace mantel?",
        choice1: "Rembrandt",
        choice2: "Johannes Vermeer",
        choice3: "Salvador Dalí",
        answer: 3,

    },

    {
        image: "./Images/4_Question_Object_Image.jpeg",
        question: "What is the name of this famous painting?",
        choice1: "Melting Clocks",
        choice2: "The Persistence of Memory",
        choice3: "The Melting of Time",
        answer: 2,

    },

    {
        image: "./Images/5_Question_Object_Image.png",
        question: "There is two paitnings above the bar in the living room. What is the name of this print?",
        choice1: "Making of a Great Martini",
        choice2: "The perfect Martini",
        choice3: "Bartender, one more please",
        answer: 1,

    },

    {
        image: "./Images/10_Question_Object_Image.jpg",
        question: 'There is a musical instrument in one of the bedrooms. What is the name of the instrument?',
        choice1: "Trumpet",
        choice2: "Bass",
        choice3: "Guitar",
        answer: 3,

    },

    {
        image: "./Images/6_Question_Object_Image.jpeg",
        question: "This is an official collaboration of what painter with Lego?",
        choice1: "Jean-Michel Basquiat",
        choice2: "Andy Warhol",
        choice3: "Keith Haring",
        answer: 2,

    },

    {
        image: "./Images/11_Question_Object_Image.jpg",
        question: "In the living room there is an art book on the side table next to the couch. What famous art auction house is it from?",
        choice1: "Christie's",
        choice2: "Sotheby's",
        choice3: "Berkshire Hathaway",
        answer: 1,

    },

    {
        image: "./Images/9_Question_Object_Image.jpg",
        question: "There is print of a very famous jazz player in the hallway. What's his name?",
        choice1: "Dizzy Gillespie",
        choice2: "Miles Davis",
        choice3: "John Coltrane",
        answer: 2,

    },

    {
        image: "./Images/7_Question_Object_Image.jpg",
        question: "There is a boquet of flowers on the fireplace. What kind of flowers are they?",
        choice1: "Legos",
        choice2: "Real flowers",
        choice3: "Synthetic flowers",
        answer: 1,

    },

    {
        image: "./Images/8_Question_Object_Image.jpg",
        question: "There is a painting as soon as you walk into the house from the front door. It's my favorite breakfast, what is it?",
        choice1: "Sardines",
        choice2: "Eggs",
        choice3: "Steak",
        answer: 2,

    }
]

const SCORE_POINTS = 1;
const MAX_QUESTIONS = 11;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('./gameover.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];    
    question.innerText = currentQuestion.question;

    document.querySelector("#questionImage").src = currentQuestion.image;


    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;



}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return; 

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 10)

    })
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame();