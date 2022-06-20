const span = document.getElementById('span');

export default class Timer {
    constructor(root) {
        root.innerHTML = Timer.getHTML();

        this.element = {
            minutes: root.querySelector(".timer__part--minutes"),
            seconds: root.querySelector(".timer__part--seconds"),
            control: root.querySelector(".timer__btn--control"),
            reset: root.querySelector(".timer__btn--reset"),
        };
//Make sure the timer isnt running as soon as the webpage is loaded
        this.interval = null; 
        
//current remaining seconds
        this.remaining = seconds = 0;


        this.element.control.addEventListener("click", () => {
        });

        this.element.reset.addEventListener("click", () => {
        });
    }

    updateInterfaceTime() {

    }}