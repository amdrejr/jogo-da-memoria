import './style.css'

function PlayerScore(player) {

    return `
        <div class="player-score" id="${player}" data-points="0">
            <div class="player-point"></div>
            <div class="player-point"></div>
            <div class="player-point"></div>
        </div>
    `
}

export default PlayerScore