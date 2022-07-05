const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstcard, secondCard;
let bockBoard = false;

 function flipCard(){
   if(bockBoard) return;
   if(this === firstcard) return;

    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstcard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMath();
 }
function checkForMath(){
   if(firstcard.dataset.card === secondCard.dataset.card){
      disableCards();
      return;
   }

   unflipCards();
}
function disableCards(){
   firstcard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
   resetBoard();
}
// 
function unflipCards() {
   bockBoard = true;

   setTimeout(() => {
      firstcard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
   }, 1500);
}

function resetBoard(){
   [hasFlippedCard, bockBoard] = [false, false];
   [firstcard, secondCard] = [ null, null]; 

}
//esta função serva para misturar as cartas//
(function shuffle(){
   cards.forEach((card) =>{
      //math.floor serva para redondar os numeros que o math.rendon calcula//
      let ramdonPosition = Math.floor(Math.random() * 12);
      card.style.order = ramdonPosition;
   })
})();

 cards.forEach((card) =>{
    card.addEventListener('click',flipCard)
 })