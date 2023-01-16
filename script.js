let deckOfCards = []
function createDeck() {
  let suits = ['Spader ', 'Hjärter ', 'Klöver ', 'Ruter ']
  for (let i = 0; i < suits.length; i++) {
    for(let j = 1; j < 14; j++) {
      let card = {
        suite: suits[i],
        value: j
      }
      deckOfCards.push(card)
    }
  }
  return deckOfCards
}

createDeck()

let cardHolder = document.querySelector(".placeholder")
let newParagraph = document.createElement("p")

//Först generera random kort ur listan

//Hur får vi innehållet i listan
let oldCard
let random1
function generateNewCard () {
  newCard = deckOfCards[(Math.floor(Math.random() * (deckOfCards.length)))]
  console.log(newCard)
  newParagraph.innerText = newCard.suite + newCard.value
  cardHolder.appendChild(newParagraph)
  oldCard = newCard
  console.log(oldCard.value)
  console.log(newCard.value)
} 
generateNewCard()
let lowerBtn = document.getElementById("lower")
let equalBtn = document.getElementById("equal")
let higherBtn = document.getElementById("higher")
let points = document.querySelector(".score")
points.innerText = 0



lowerBtn.addEventListener("click", () => {
  if (oldCard.value > newCard.value) {
    points.innerText += 1
    generateNewCard()
 }
 else {
  console.log("Else")
  generateNewCard()
 }
})



//Välja alternativ 
//Generera nytt kort + 
//ta bort nuvarande kort från listan (för att inte kunna välja det igen)

//Vid val 1 && nytt kort är lägre än nuvarande kort = poäng +1 
//Annars försök kvar -1

//Vid val 2 && nytt kort samma värde = poäng+ 1
//Annars försök kvar -1

//Vid val 3 && nytt kort är högre än nuvarande kort = poäng +1
//Annars försök kvar -1

//While försök kvar > 0 spelet är igång. 
//Vid noll = Spelet slut - Starta om-knapp
