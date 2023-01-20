import './style.css'

function PageWinner(winner) {
    window.pageWinner = {}

    window.pageWinner.restart = () => {
            window.location.reload()
    }

    let playerWinner = ''
    winner == 1 ? 
            playerWinner = 'Player 1' :
            playerWinner = 'Player 2' 

    return `
        <div class="page-winner">
            <p>${playerWinner}</->
            <h1>Winner!!!</h1>
            <span>🏆</span>
            <button onclick="pageWinner.restart()"}>restart</button>
        </div>
    `
}

export default PageWinner