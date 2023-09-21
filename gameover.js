// const username = document.querySelector('#username');
// const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
// const highScore = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 15;
finalScore.innerText = mostRecentScore;

// username.addEventListener('keyup', () => {
//     saveScoreBtn.disabled = !username.value;
// });

let saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScore.push(score);
    highScore.sort((a,b) => {
        return b.score -a.score;
    });

    // highScore.splice(15);
    // localStorage.setItem('highScores', JSON.stringify(highScore));
    // window.location.assign('/');

}

if (mostRecentScore > 8) {
    alert("Someone stayed awake during art class! Way to go, message me on the Airbnb app and we'll schedule a time to go get coffee on me.");
    window.location.href = "./youwonmessage.html";
} else {
    alert("You suck!");
}

