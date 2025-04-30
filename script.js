const cardValues = [
  { name: 'Arthur', path: './images/arthur.jpg' },
  { name: 'John', path: './images/john.jpg' },
  { name: 'Dutch', path: './images/dutch.jpg' },
  { name: 'Hosea', path: './images/hosea.jpg' },
  { name: 'Sadie', path: './images/sadie.jpg' },
  { name: 'Micah', path: './images/micah.jpg' },
  { name: 'Lenny', path: './images/lenny.jpg' },
  { name: 'Charles', path: './images/charles.jpg' }
]
let cards = [...cardValues, ...cardValues]

cards.sort(() => 0.5 - Math.random())
// I googled this and found an answer in a website "I DID NOT COPY THE CODE just needed a hint or sample" (https://www.geeksforgeeks.org/javascript-program-to-shuffle-deck-of-cards/)
const board = document.getElementById('gameBoard')

for (let i = 0; i < cards.length; i++) {
  const card = document.createElement('div')
  card.className = 'card'
  card.name = cards[i].name

  const img = document.createElement('img')
  img.src = cards[i].path
  img.alt = cards[i].name //I looked at samples in Overflow and geeksforgeeks.
  img.classList.add('card-image')
  img.style.display = 'none'

  card.appendChild(img)
  board.appendChild(card)
}
//I took a reference from previous DOM lesson in github (https://github.com/SEB-5-Bahrain/u1_lesson_DOM)

let firstCard = null
let secondCard = null
let lock = false

const allCards = document.querySelectorAll('.card')

allCards.forEach((card) => {
  card.addEventListener('click', () => {
    if (lock) return
    if (card === firstCard) return

    card.classList.add('flipped')

    card.querySelector('img').style.display = 'block'

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

          firstCard.querySelector('img').style.display = 'none'
          secondCard.querySelector('img').style.display = 'none'
          firstCard = null
          secondCard = null
          lock = false
        }, 1000)
      }
    }
  })
})

document.getElementById('restartButton').addEventListener('click', () => {
  location.reload()
})
//I took references from Events lesson in Github and from Chatgpt
