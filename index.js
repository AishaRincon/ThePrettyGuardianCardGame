//Items from HTML
const section = document.querySelector("section");
const time = document.querySelector("span");
const cardFlip = document.querySelector("span");

//format image sizes

//information for the cards
function show_image(src, id){
    var img = document.createElement("img");
    imgSrc = "src"
    imgId="name"
    document.body.appendChild(img);
}
//Make an array for 12 cards
const getData = () => [
//first set of cards
    {imgId:"Jupiter", imgSrc:"./assets/Sailor-Jupiter.png"},
    {imgId:"Mars", imgSrc:"./assets/Sailor-Mars.png"},
    {imgId:"Neptune", imgSrc:"./assets/Sailor-Neptune.png"},
    {imgId:"Pluto", imgSrc:"./assets/Sailor-Pluto.png"},
    {imgId:"Saturn", imgSrc:"./assets/Sailor-Saturn.png"},
    {imgId:"Venus", imgSrc:"./assets/Sailor-Venus.png"},
//second set of cards
    {imgId:"Jupiter", imgSrc:"./assets/Sailor-Jupiter.png"},
    {imgId:"Mars", imgSrc:"./assets/Sailor-Mars.png"},
    {imgId:"Neptune", imgSrc:"./assets/Sailor-Neptune.png"},
    {imgId:"Pluto", imgSrc:"./assets/Sailor-Pluto.png"},
    {imgId:"Saturn", imgSrc:"./assets/Sailor-Saturn.png"},
    {imgId:"Venus", imgSrc:"./assets/Sailor-Venus.png"},
];

//shuffle the cards, make them random. 
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

//generate the cards
const cardGenerator = () => {
    const cardData = randomize();
//link to the html
//Create a for loop to generate the cards
    cardData.forEach((items) => {
        const cards = document.createElement("div");
        const front = document.createElement('img');
        const back = document.createElement("div");
//add classes to each element
        cards.classList = "cards";
        front.classList = "front";
        back.classList = "back";
//add the image to the source image
        front.src = items.imgSrc;

        section.appendChild(cards);
        cards.appendChild(front);
        cards.appendChild(back);

//add eventlistener to get the cards to flip over
//const cards = document.getElementById("cards")  

        cards.addEventListener("click",flipCard) 
            function flipCard(){
                cardData.classList.toggle("flipCard");

            }
        })
};
cardGenerator();

// var cards = document.querySelector('.cardData')
// cardData.addEventListener('click', function(){
//     cardData.classList.toggle('is-flipped');



//Inner text adds text inside a button
//add the villan faces when the player chooses wrong. 