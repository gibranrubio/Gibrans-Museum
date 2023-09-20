const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScore = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 15;
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

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

    highScore.splice(15);
    localStorage.setItem('highScores', JSON.stringify(highScore));
    window.location.assign('/');

}
