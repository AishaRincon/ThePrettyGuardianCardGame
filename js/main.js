let counter = 0
let firstSelection = "";
let secondSelection = "";

//select all of the cards and the individual ones
const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
    card.addEventListener("click", () =>{
//when ever a card is clicked on its documented
//instead of creating an array, I'mm pulling from the sailor attribute i addedd to all the cards. 
        card.classList.add("clicked");
//if the counter is set to 0 then no cards have been selected. Check if the two cards are a match
        if(counter === 0){
            firstSelection = card.getAttribute("sailor")
            counter++;
        } else {
            secondSelection = card.getAttribute("sailor")
            counter = 0;
//are they a match? 
            if(firstSelection === secondSelection){
                const correctCards = document.querySelectorAll(
                    ".card[sailor='" + firstSelection + "']"
            );
//correct cards will be logged with correctCards            

//if two of the same cards are selected then it'll show as checked if the cards don't match then it remains as clicked
                correctCards[0].classList.add("checked");
                correctCards[0].classList.remove("clicked");
                correctCards[1].classList.add("checked");
                correctCards[1].classList.remove("clicked");
//if the cards dont match then they animate and turn bacck over. Property needs to be added to both cards.
            } else {
                const incorrectCards = document.querySelectorAll(".card.clicked");
                incorrectCards[0].classList.add("shake");
                incorrectCards[1].classList.add("shake");

//remove the color of the cards when the wrong selection is made, 
//create a setTimeOut function and remove the shake after 8 seconds.
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

