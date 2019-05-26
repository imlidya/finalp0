//list cards
var cards = document.querySelectorAll('.memory-card');
//looplist 
// cards.forEach(card => card.addEventListener('click', flipCard));

for (var i = 0; i < cards.length; i++){
  cards[i].addEventListener("click", flipCard);
};

var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;

function flipCard(){
  if(lockBoard) return
  this.classList.toggle('flip')
    if(!hasFlippedCard){
      hasFlippedCard = true
      firstCard = this
      return
      // console.log(hasFlippedCard, firstCard)
    } else {
      hasFlippedCard = false
      secondCard = this
      // console.log(firstCard, secondCard)
      checkForMatch()
    }
  }
  
function checkForMatch(){
    if(firstCard.dataset.framework === secondCard.dataset.framework){
      firstCard.removeEventListener('click', flipCard)
      secondCard.removeEventListener('click', flipCard)
    } else {
      lockBoard = true
      setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        lockBoard = false
      }, 1500)
    }
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

