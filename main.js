import './src/styles/generic/reset.css';
import './src/styles/settings/colors.css';
import './src/styles/elements/base.css';

import ScoreBoard from './src/components/ScoreBoard';
import BoardGame from './src/objects/BoardGame';

window.$root = document.querySelector('#root');

$root.insertAdjacentHTML(
  'beforeend', 
  `
  ${ScoreBoard()}
  ${BoardGame(6)}
  `
  );

//IIFE - Revelar todas cartas e depois virá-las
(() => {
  const allCards = document.querySelectorAll('.card-front-back')
  setTimeout(() => {
    allCards.forEach((card)=>{
        card.classList.add('-freeze-card')
        console.log('entrou')
    })
  }, 0);
  setTimeout(() => {
    allCards.forEach((card)=>{
      card.classList.remove('-freeze-card')
    })
  }, 1500);
})()


