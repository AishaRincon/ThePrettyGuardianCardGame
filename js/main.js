let counter = 0
let firstSelection = "";
let secondSelection = "";


const cards = document.querySelectorAll(".cards");
cards.forEach((cards) => {
    cards.addEventListener("click", () =>{
        cards.classList.add("clicked");

        if(counter === 0){
            firstSelection = cards.getAttribute("sailor")
            counter++;
        } else {
            secondSelection = cards.getAttribute("sailor")
            counter = 0;

            if(firstSelection === secondSelection){
                const correctCards = document.querySelectorAll(
                    ".cards[sailor='" + firstSelection + "']"
            );

//if two of the same cards are selected then it'll show as checked if the cards don't match then it remains as clicked
                correctCards[0].classList.add("checked");
                correctCards[0].classList.remove("clicked");
                correctCards[1].classList.add("checked");
                correctCards[1].classList.remove("clicked");
//if the cards dont match then they animate and turn bacck over. Property needs to be added to both cards.
            } else {
                const incorrectCards = document.querySelectorAll(".cards.clicked");
                incorrectCards[0].classList.add("shake");
                incorrectCards[1].classList.add("shake");
//to remove the color of the cards when the wrong selection is made, I need to create a setTimeOut function also, I have to remove the shake after 8 seconds.
                setTimeout(() => {
                    incorrectCards[0].classList.remove("shake");
                    incorrectCards[0].classList.remove("clicked");
                    incorrectCards[1].classList.remove("shake");
                    incorrectCards[1].classList.remove("clicked");
                }, 800);
            }
        }
    });
});

//Timer
import Timer from "./js/timer.js";

new Timer(
    document.querySelector("Timer")
);

// //score
// const scoutsSavedCount = document.querySelector("span");
// const scoutsSaved = 6;

// scoutsSavedCount.textContent = scoutsSaved;
//Randomize the cards
//make an array 
// var sailors = () => [
//     {imgSrc:"./assets/Sailor-Jupiter.png", sailor:"Jupiter"},
//     {imgSrc:"./assets/Sailor-Mars.png", sailor:"Mars"},
//     {imgSrc:"./assets/Sailor-Neptune.png", sailor:"Neptune"},
//     {imgSrc:"./assets/Sailor-Pluto.png", sailor:"Pluto"},
//     {imgSrc:"./assets/Sailor-Saturn.png", sailor:"Saturn"},
//     {imgSrc:"./assets/Sailor-Venus.png", sailor:"Venus"},
//     {imgSrc:"./assets/Sailor-Jupiter.png", sailor:"Jupiter"},
//     {imgSrc:"./assets/Sailor-Mars.png", sailor:"Mars"},
//     {imgSrc:"./assets/Sailor-Neptune.png", sailor:"Neptune"},
//     {imgSrc:"./assets/Sailor-Pluto.png", sailor:"Pluto"},
//     {imgSrc:"./assets/Sailor-Saturn.png", sailor:"Saturn"},
//     {imgSrc:"./assets/Sailor-Venus.png", sailor:"Venus"},
// ];

const name = "frontOfCard";
console.log(name)
export {};

let frontOfCard = {Jupiter, Mars, Neptune, Pluto, Saturn, Venus, Jupiter, Mars, Neptune, Pluto, Saturn, Venus}

let arrayShuffle = function(frontOfCard) {
    let newPos, 
        temp;

        for (let i=frontOfCard.length -1; i > 0; i--) {
            newPos = Math.floor(Math.random() * (i + 1));
            temp=frontOfCard[i];
            frontOfCard[i]=frontOfCard[newPos];
            frontOfCard[newPos]=temp;
        }
        return frontOfCard;
};



  //create a score count for Scouts Saved
  //when a match is made, the count will increase by 1
 

  //Create a button for start

  //when the start button is clicked, 
  //the timer will start counting down AND all the cards will reshuffle
  //when the timer reaches 0 the player is no longer allowed to click on the cards.
  //All cards get turned back over and reshuffled. 
