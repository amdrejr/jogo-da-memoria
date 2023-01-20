import './style.css'
import CardFrontBack from '../../components/CardFrontBack';
import PageWinner from '../../components/PageWinner';

function BoardGame ()  {

    let playerActually = 1;
    let playerOnePoints = 0;
    let playerTwoPoints = 0;

    const clearMainSetWinner = (winner) => {
        $root.replaceChildren('')
        $root.insertAdjacentHTML('afterbegin',PageWinner(winner))
    }

    const isWon = () => {
        if(playerOnePoints >= 3) {
            clearMainSetWinner(1)
        }
        if(playerTwoPoints >= 3) {
            clearMainSetWinner(2)
        }
    }

    const setPoints = () => {
        const playerONE = document.querySelector('#player-ONE')
        const playerTWO = document.querySelector('#player-TWO')
        playerONE.setAttribute('data-points', playerOnePoints)
        playerTWO.setAttribute('data-points', playerTwoPoints)
        isWon()
    }

    const hideCards = (cardsActive) => {
        cardsActive.forEach((card) => card.classList.remove('-active-rotate-card'))
    }

    const togglePlayer = (cardsActive) => {
        const $arrowDown = document.querySelector('.player-actually')
        // caso arrowDown não possuir a class -toggle-player,
        // toggle a adicionará e retornará true
        // casso possua, a removerá e retornará false
        if($arrowDown.classList.toggle('-toggle-player')){
            cardsIsEqual(cardsActive)
            playerActually = 2
        } else { 
            cardsIsEqual(cardsActive)
            playerActually = 1
        }
    }

    const freezeAndDeFreeze = (boardGame) => {
        boardGame.classList.toggle('-freeze')
    }

    const cardsIsEqual = (cards) => {
        if(cards[0].textContent == cards[1].textContent) {
            playerActually == 1 ?
                playerOnePoints++ : 
                playerTwoPoints++
            setPoints()
            cards.forEach((card) => {
                card.classList.add('-freeze-card')
            })
        }
    }

    window.BoardGame = {};
    window.BoardGame.handleClick = () => {
        const $boardGame = document.querySelector('.board-game');
        const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active-rotate-card');

        if($cardsActive.length == 2) {
        freezeAndDeFreeze($boardGame)
            setTimeout(()=>{
                hideCards($cardsActive)
                togglePlayer($cardsActive)
                freezeAndDeFreeze($boardGame)
            }, 1000)
        }
    }

    const cards = [':)',':)',';-;',';-;',':B',':B',':S',':S','xD','xD', ':@', ':@'].sort(() => Math.random() - 0.5)
    
    const htmlCardsList = cards.map((card) => CardFrontBack(card))
    const $htmlCards = htmlCardsList.join('');

    return `
        <section class="board-game" onClick="BoardGame.handleClick()">
            ${$htmlCards}
        </section>
    `
}

export default BoardGame