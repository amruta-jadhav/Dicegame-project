'use strict';
//html elements
let newButton = document.querySelector('.btn--new')
let rollButton = document.querySelector('.btn--roll')
let holdButton = document.querySelector('.btn--hold')
let currentscoreplayer1 = document.querySelector('#current--0')
let currentscoreplayer2 = document.querySelector('#current--1')
let scoreplayer1 = document.querySelector('#score--0')
let scoreplayer2 = document.querySelector('#score--1')
let diceRoll = document.querySelector('.dice')
let playeronesection = document.querySelector('.player--0')
let playertwosection = document.querySelector('.player--1')

let currentscore = 0
let score = [0, 0]
let randomNumber;
let activePlayer = 0

function init() {
    diceRoll.style.display = 'none'
    scoreplayer1.textContent = 0
    scoreplayer2.textContent = 0
    currentscoreplayer1.textContent = 0
    currentscoreplayer2.textContent = 0
    currentscore = 0
    score = [0, 0]
    activePlayer = 0
    playeronesection.classList.add('player--active')
    playertwosection.classList.remove('player--active')
}

init()
function switchPlayer() {
    //diceRoll.style.display = 'none'
    currentscore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    playeronesection.classList.toggle('player--active')
    playertwosection.classList.toggle('player--active')
}



//Event handler
rollButton.addEventListener('click', function () {

    randomNumber = Math.floor(Math.random() * 6) + 1//5
    diceRoll.style.display = 'block'
    diceRoll.src = `dice-${randomNumber}.png`//dice-5.png

    if (randomNumber != 1) {
        currentscore = currentscore + randomNumber
        document.querySelector(`#current--${activePlayer}`).textContent = currentscore//current--0
    }
    else {
        switchPlayer()
    }
})

newButton.addEventListener('click', function () {
    init()
})

let flag = true
holdButton.addEventListener('click', function () {
    if (flag) {
        score[activePlayer] = score[activePlayer] + currentscore
        document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer]
        if (score[activePlayer] > 10) {
            diceRoll.style.display = 'none'
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            flag = false
            //holdButton.style.display='none'
            // rollButton.style.display='none'
        }
        else {
            switchPlayer()
        }
    }

})



