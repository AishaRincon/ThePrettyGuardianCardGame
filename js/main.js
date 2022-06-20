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