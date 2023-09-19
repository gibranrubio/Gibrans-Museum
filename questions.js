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
        image: "./Images/5_Question_Object_Image.png",
        question: 'What is the name of the painter?',
        choice1: "Guy Buffet",
        choice2: "Guy Martini",
        choice3: "Guy Fieri",
        answer: 1,

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
        image: "./Images/6_Question_Object_Image.jpeg",
        question: "This is a portrait of what famous actress?",
        choice1: "Elizabeth Taylor",
        choice2: "Marilyn Monroe",
        choice3: "Audrey Hepburn",
        answer: 2,

    },

    {
        image: "./Images/Background-Merger.png",
        question: "There is print of a very famous jazz player in the hallway. What's his name?",
        choice1: "Dizzy Gillespie",
        choice2: "Miles Davis",
        choice3: "John Coltrane",
        answer: 1,

    },

    {
        image: "./Images/Background-Merger.png",
        question: "There is a painting of a city in the masterbedroom. What city is it?",
        choice1: "Pasadena, CA",
        choice2: "Brooklyn, NY",
        choice3: "Beverly Hills, CA",
        answer: 3,

    },

    {
        image: "./Images/Background-Merger.png",
        question: "How many total paintings with frames are in the house?",
        choice1: "21",
        choice2: "24",
        choice3: "26",
        answer: 1,

    }
]

const SCORE_POINTS = 1;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end.html');
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