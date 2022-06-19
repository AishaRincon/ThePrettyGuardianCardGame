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
                    ".cards[sailor= '" + firstSelection + "']"
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

//score
const scoutsSavedCount = document.querySelector("span");
const scoutsSaved = 6;

scoutsSavedCount.textContent = scoutsSaved;

//randomize the cards
var allCards = document.getElementById("cards");

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = 
      [array[randomIndex], array[currentIndex]];
      [array[randomIndex], array[currentIndex]];
      [array[randomIndex], array[currentIndex]];
      [array[randomIndex], array[currentIndex]];
      [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  // Used like so
  var array = [cards];
  shuffle(array);
  console.log(array);

  //create a score count for Scouts Saved
  //when a match is made, the count will increase by 1
 

  //Create a button for start


  //when the start button is clicked, 
  //the timer will start counting down AND all the cards will reshuffle
    const startingMinutes = 1;
    let time = startingMinutes * 60; 

    const countdown = document.getElementById("time");

    setInterval(updateCountDown, 1000);

    function updateCountDown() {
        const minutes = Math.floor(time / 60);
        let seconds = time %60;

//Make the timer end at 0
    
        seconds = seconds <1 ? "0" + seconds : seconds;
        
        countdown.innerHTML = '${minutes}: ${seconds}';
        time--;
    }
  //when the timer reaches 0 the player is no longer allowed to click on the cards.
  //All cards get turned back over and reshuffled. 
