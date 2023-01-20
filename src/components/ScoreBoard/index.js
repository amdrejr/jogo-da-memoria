import './style.css'
import PlayerName from "../PlayerName";
import PlayerScore from '../PlayerScore';
import PlayerActually from '../PlayerActually';

function ScoreBoard() {
    return `
        <header class="score-board">
            ${PlayerActually()}
            ${PlayerName("Player 1")}
            ${PlayerScore("player-ONE")}
            <span style="color: var(--color-yellow)">vs</span>
            ${PlayerScore("player-TWO")}
            ${PlayerName("Player 2")}
        </header>
    `;
}

export default ScoreBoard