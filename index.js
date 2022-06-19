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
        }
    });
});
