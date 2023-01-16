let hearts = []
let spades = []
let clubs = []
let diamonds = []
let deckOfCards = []
while (hearts.length <14) {
    hearts.push("Hjärter ")
  }
while (spades.length <14) {
    spades.push("Spader ")
  }
while (clubs.length <14) {
    clubs.push("Klöver ")
  }
while (diamonds.length <14) {
    diamonds.push("Ruter ")
  }

hearts.forEach((heart, index) => {
    if (index >= 1) {
      deckOfCards.push(heart + index)
  }
})
spades.forEach((spade, index) => {
  if (index >= 1) {
    deckOfCards.push(spade + index)
}
})
clubs.forEach((club, index) => {
  if (index >= 1) {
    deckOfCards.push(club + index)}
})
diamonds.forEach((diamond, index) => {
  if (index >= 1) {
    deckOfCards.push(diamond + index)}
})
deckOfCards.forEach(card => {
  //console.log(card)
})

let cardHolder = document.querySelector(".placeholder")
let newParagraph = document.createElement("p")

//Först generera random kort ur listan

//Hur får vi innehållet i listan
let oldCard
let random1
function generateNewCard () {
  random1 = deckOfCards[(Math.floor(Math.random() * (deckOfCards.length)))]
  console.log(random1)
  newParagraph.innerText = random1
  cardHolder.appendChild(newParagraph)
  oldCard = random1
  return oldCard
} 
generateNewCard()
let lowerBtn = document.getElementById("lower")
let equalBtn = document.getElementById("equal")
let higherBtn = document.getElementById("higher")
let points = document.querySelector(".score")
points.innerText = 0


// let splitNumber = deckOfCards.split(" ")
// console.log(splitNumber[0])
let i
lowerBtn.addEventListener("click", () => {
  if (oldCard[i] > random1[i]) {
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
