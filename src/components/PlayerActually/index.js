import './style.css'

function PlayerActually (currentPlayer = 1) {

    return `
        <div class="player-actually" -data-currentPlayer="${currentPlayer}" >&gt</div>
    `
}

export default PlayerActually