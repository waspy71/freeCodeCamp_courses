
let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
let card

function startGame() {
  renderGame()
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
  
  sumEl.textContent = "Sum: " + sum
  messageEl.textContent = message 
  cardsEl.textContent = 'Cards: ' + cards[0] + ' + ' + cards[1]
}


function newCard() {
  console.log('here')
  card = 2
  sum += card
  renderGame()
}