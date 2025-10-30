const cardContainer = document.getElementById("cardContainer")
const startGame = document.getElementById("startGame")
const scoreText = document.getElementById("scoreText")
const memoryGameData = [
    {nameFruit: "banana", image:"img/banana.jpg"},
    {nameFruit: "apple", image:"img/apple.jpg"},
    {nameFruit: "orange", image:"img/orange.jpg"},
    {nameFruit: "grape", image:"img/grape.jpg"},
    {nameFruit: "mango", image:"img/mango.jpg"},
    {nameFruit: "coconut", image:"img/coconut.jpg"},
    {nameFruit: "pineapple", image:"img/pineapple.jpg"},
    {nameFruit: "kiwi", image:"img/kiwi.jpg"},
    {nameFruit: "blueberry", image:"img/blueberry.jpg"},
    {nameFruit: "strawberry", image:"img/strawberry.jpg"},
]
let allData = [...memoryGameData, ...memoryGameData];
let firstPick, secondPick
let pickCounter = 0
let score = 0

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


startGame.addEventListener("click", () => displayCards())



function displayCards(){
    allData = shuffle(allData)
    allData.forEach((data, index) => {
        const cards = document.createElement("div")
        cards.id = index
        cards.classList.add("card", "display")
        cards.innerHTML =  `<img src="${data.image}">`
        
        cards.addEventListener("click", () => revealCard(cards))
        cardContainer.appendChild(cards)
    }) 
}

function revealCard(cards){
    // Don't allow clicking already revealed cards
    if (!cards.classList.contains("display")) return;
    cards.classList.toggle("display")
    pickCounter++
    console.log(allData[cards.id].nameFruit)
    if (pickCounter === 1){
        firstPick = {
            element: cards,
            fruit: allData[cards.id].nameFruit
        }
        console.log(firstPick.fruit)
    } else if (pickCounter === 2){
        secondPick = {
            element: cards,
            fruit: allData[cards.id].nameFruit
        }

        checkCards()
    }
}

function checkCards(){
    if (firstPick.fruit === secondPick.fruit){
            score++
            scoreText.textContent = `Score: ${score}`
            pickCounter = 0
        } else{
            setTimeout(() => {
            firstPick.element.classList.add("display")
            secondPick.element.classList.add("display")
            
            firstPick = null
            secondPick = null
            pickCounter = 0
        }, 1000);
    }
}


