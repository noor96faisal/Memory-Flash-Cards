const cardValues = [
  { name: 'Arthur', path: './images/arthur.webp' },
  { name: 'John', path: './images/john.webp' },
  { name: 'Dutch', path: './images/dutch.webp' },
  { name: 'Hosea', path: './images/hosea.webp' },
  { name: 'Sadie', path: './images/sadie.webp' },
  { name: 'Micah', path: './images/micah.webp' }
]
let cards = [...cardValues, ...cardValues]

cards.sort(() => 0.5 - Math.random())
// I googled this and found an answer in a website "I DID NOT COPY THE CODE just needed a hint or sample" (https://www.geeksforgeeks.org/javascript-program-to-shuffle-deck-of-cards/)
const board = document.getElementById('gameBoard')

for (let i = 0; i < cards.length; i++) {
  const card = document.createElement('div') //I took a reference from previous DOM lesson in github (https://github.com/SEB-5-Bahrain/u1_lesson_DOM)
  card.className = 'card'
  card.name = cards[i].name

  const img = document.createElement('img')
  img.src = cards[i].path
  img.alt = cards[i].name
  img.classList.add('card-image')
  img.style.display = 'none'

  card.appendChild(img)
  board.appendChild(card)
}

let firstCard = null
let secondCard = null
let lock = false

const allCards = document.querySelectorAll('.card')

allCards.forEach((card) => {
  card.addEventListener('click', () => {
    if (lock) return
    if (card === firstCard) return

    card.classList.add('flipped')
    card.innerText = card.name

    if (firstCard === null) {
      firstCard = card
    } else {
      secondCard = card
      lock = true
      // this part is for when a card is selected similar to the other one selected they stay revealed when matched. However, if it is not a match, they flip back.
      if (firstCard.name === secondCard.name) {
        firstCard = null
        secondCard = null
        lock = false
      } else {
        setTimeout(() => {
          //I looked at a reference from  stack overflow but I DID NOT COPY IT: ( https://stackoverflow.com/questions/63940169/how-can-i-flip-cards-in-a-sequence-at-intervals)

          firstCard.classList.remove('flipped')
          secondCard.classList.remove('flipped')
          firstCard.innerText = ''
          secondCard.innerText = ''
          firstCard = null
          secondCard = null
          lock = false
        }, 1000)
      }
    }
  })
})
