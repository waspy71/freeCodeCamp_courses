
let player = {
  name: 'Player',
  chips: 140
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
let card
let playerEl = document.getElementById('player-el')

playerEl.textContent = player.name + ': ' + '$' + player.chips 

function startGame() {
  hasBlackJack = false
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  // let firstCard = 11
  // let secondCard = 10
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function getRandomCard() {
  let number = Math.floor(Math.random() * 13) + 1
  if(number === 1) {
    return 11
  } else if (number > 10) {
    return 10
  } else {
    return number
  }
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if ( sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  
  messageEl.textContent = message 
  sumEl.textContent = "Sum: " + sum

  cardsEl.textContent = 'Cards: ' 

  for( let i = 0; i < cards.length; i++ ) {
    cardsEl.textContent += cards[i] + ' '
  }
}


function newCard() {
  if(isAlive && !hasBlackJack) {
    card = getRandomCard()
    cards.push(card)
    console.log('array', cards)
    sum += card
    renderGame()
  }
}

